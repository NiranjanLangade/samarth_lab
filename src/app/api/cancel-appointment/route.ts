import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Appointment from '@/models/Appointment';

export async function DELETE(request: NextRequest) {
    // console.log("📢 API Hit: /api/cancel-appointment");
    await dbConnect();

    try {
        const { appointmentId } = await request.json();

        if (!appointmentId) {
            return NextResponse.json(
                { success: false, message: 'Appointment ID is required' },
                { status: 400 }
            );
        }

        const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);

        if (!deletedAppointment) {
            return NextResponse.json(
                { success: false, message: 'Appointment not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Appointment canceled successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error canceling appointment:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to cancel appointment' },
            { status: 500 }
        );
    }
}
