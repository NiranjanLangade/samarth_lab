import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/Appointment";

export async function GET(request: NextRequest) {
    console.log("📢 API Hit: /api/get-appointments");
    await dbConnect();

    try {
        const url = new URL(request.url);
        const dateString = url.searchParams.get("date"); // Example: "2025-03-24"
        const page = parseInt(url.searchParams.get("page") || "1", 10); // Default: Page 1
        const limit = parseInt(url.searchParams.get("limit") || "10", 10); // Default: 10 per page

        if (!dateString) {
            return NextResponse.json(
                { success: false, message: "Date is required" },
                { status: 400 }
            );
        }

        // Convert the date string into a start and end range
        const startDate = new Date(dateString);
        startDate.setHours(0, 0, 0, 0); // Start of the day
        const endDate = new Date(dateString);
        endDate.setHours(23, 59, 59, 999); // End of the day

        console.log(`🔍 Searching for appointments between ${startDate} and ${endDate}`);

        const totalAppointments = await Appointment.countDocuments({
            date: { $gte: startDate, $lte: endDate },
        });

        const appointments = await Appointment.find({
            date: { $gte: startDate, $lte: endDate },
        })
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ timeSlot: 1 });

        if (appointments.length === 0) {
            return NextResponse.json(
                { success: true, message: "No appointments found for this date", appointments: [] },
                { status: 200 }
            );
        }

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
        console.error("❌ Error fetching appointments:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch appointments" },
            { status: 500 }
        );
    }
}
