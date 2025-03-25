"use client";

import React, { useState, useEffect } from "react";

interface Appointment {
  _id: string;
  name: string;
  timeSlot: string;
  mobile: string;
}

const Admin = () => {
  const [date, setDate] = useState<string>(new Date().toISOString().split("T")[0]); // Default: Today
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchAppointments = async (selectedDate: string, pageNumber: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/get-appointments?date=${selectedDate}&page=${pageNumber}&limit=10`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch appointments.");
      }

      if (data.success) {
        setAppointments(data.appointments);
        setTotalPages(data.totalPages);
      } else {
        setAppointments([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setError("Failed to load appointments. Please try again.");
      setAppointments([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchAppointments(date, page);
  }, [date, page]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Appointments</h1>

      {/* Date Picker */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <label className="text-lg font-medium">Select Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setPage(1); // Reset page when date changes
          }}
          className="p-2 border rounded-md"
        />
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center py-6">
          <div className="h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          {/* Appointments List */}
          {appointments.length > 0 ? (
            <div className="grid gap-4">
              {appointments.map((appointment) => (
                <div key={appointment._id} className="p-4 border rounded-lg shadow-sm bg-gray-50">
                  <h2 className="text-lg font-semibold">{appointment.name}</h2>
                  <p className="text-gray-600">Time: {appointment.timeSlot}</p>
                  <p className="text-gray-600">Contact: {appointment.mobile}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No appointments found for this date.</p>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-4 space-x-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
                disabled={page === 1}
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              >
                Previous
              </button>
              <span>Page {page} of {totalPages}</span>
              <button
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
                disabled={page === totalPages}
                onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Admin;
