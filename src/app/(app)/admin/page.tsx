"use client"

import { useEffect, useState } from "react";

export default function AdminDashboard() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const res = await fetch("/api/book-appointment");
            const data = await res.json();
            setAppointments(data);
        };
        fetchAppointments();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Appointments</h1>
            <ul>
                {appointments.map((appt) => (
                    <li key={appt._id}>
                        {appt.name} - {appt.date} at {appt.time}
                    </li>
                ))}
            </ul>
        </div>
    );
}
