import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Appointment from '@/models/Appointment';

export async function GET(request: NextRequest) {
    console.log("📢 API Hit: /api/get-appointments");
    await dbConnect();

    try {
        const url = new URL(request.url);
        const date = url.searchParams.get('date');  // e.g., "2025-04-12"
        const page = parseInt(url.searchParams.get('page') || '1', 10); // Default: Page 1
        const limit = parseInt(url.searchParams.get('limit') || '10', 10); // Default: 10 per page

        if (!date) {
            return NextResponse.json(
                { success: false, message: 'Date is required' },
                { status: 400 }
            );
        }

        const queryDate = new Date(date);
        queryDate.setHours(0, 0, 0, 0);

        const totalAppointments = await Appointment.countDocuments({ date: queryDate });

        const appointments = await Appointment.find({ date: queryDate })
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ timeSlot: 1 }); // Sort by time slot

        return NextResponse.json(
            {
                success: true,
                totalAppointments,
                totalPages: Math.ceil(totalAppointments / limit),
                currentPage: page,
                appointments,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching appointments:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch appointments' },
            { status: 500 }
        );
    }
}
