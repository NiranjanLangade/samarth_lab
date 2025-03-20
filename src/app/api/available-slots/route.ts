import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Appointment from '@/models/Appointment';

const ALL_SLOTS = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

export async function GET(request: NextRequest) {
    await dbConnect();

    try {
        const url = new URL(request.url);
        const date = url.searchParams.get('date');  // e.g., "2025-04-12"

        if (!date) {
            return NextResponse.json(
                { success: false, message: 'Date is required' },
                { status: 400 }
            );
        }

        const queryDate = new Date(date);
        queryDate.setHours(0, 0, 0, 0);

        const bookedAppointments = await Appointment.find({ date: queryDate }).select('timeSlot');

        const bookedSlots = bookedAppointments.map(appt => appt.timeSlot);
        const availableSlots = ALL_SLOTS.filter(slot => !bookedSlots.includes(slot));

        return NextResponse.json(
            { success: true, availableSlots },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching available slots:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch available slots' },
            { status: 500 }
        );
    }
}
