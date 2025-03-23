import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Appointment from '@/models/Appointment';
import twilio from 'twilio';

// Twilio client setup
const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request: NextRequest) {
    console.log("📢 API Hit: /api/book-appointment");
    await dbConnect();

    try {
        const { name, email, mobile, date, timeSlot } = await request.json();

        // Validate mobile number (India format: 10-digit, starts with 6-9)
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!mobileRegex.test(mobile)) {
            return NextResponse.json(
                { success: false, message: 'Invalid mobile number. Must be 10 digits and start with 6-9.' },
                { status: 400 }
            );
        }

        // Check required fields
        if (!name || !email || !mobile || !date || !timeSlot) {
            return NextResponse.json(
                { success: false, message: 'All fields are required' },
                { status: 400 }
            );
        }

        // Check if the time slot is already booked
        const existingAppointment = await Appointment.findOne({ date: new Date(date), timeSlot });
        if (existingAppointment) {
            return NextResponse.json(
                { success: false, message: 'Time slot already booked' },
                { status: 400 }
            );
        }

        // Create new appointment
        const newAppointment = await Appointment.create({
            name,
            email,
            mobile,
            date: new Date(date),
            timeSlot,
        });

        const fromNumber = process.env.TWILIO_SMS_NUMBER;
        const doctorNumber = process.env.DOCTOR_PHONE_NUMBER;

if (!fromNumber || !doctorNumber) {
    throw new Error("Twilio environment variables are missing!");
}

await client.messages.create({
    from: fromNumber,
    to: doctorNumber,
    body: `📅 New Appointment Booked!\n👤 Name: ${name}\n📞 Mobile: ${mobile}\n📆 Date: ${date}\n🕒 Time Slot: ${timeSlot}`
});


        return NextResponse.json(
            { success: true, message: 'Appointment booked successfully, and doctor notified via SMS', appointment: newAppointment },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error booking appointment:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to book appointment' },
            { status: 500 }
        );
    }
}
