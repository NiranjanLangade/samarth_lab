"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface AppointmentForm {
  name: string;
  email: string;
  mobile: string;
  date: string;
  timeSlot: string;
}

const AppointmentForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AppointmentForm>();
  const [loading, setLoading] = useState(false);

  // Define static time slots
  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
  ];

  const onSubmit = async (data: AppointmentForm) => {
    setLoading(true);
    try {
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Appointment booked successfully!");
        reset();
      } else {
        toast.error(result.message || "Failed to book appointment");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Book an Appointment</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Mobile */}
          <div>
            <input
              type="text"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: { value: /^[6-9]\d{9}$/, message: "Invalid mobile number" },
              })}
              placeholder="Mobile"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
          </div>

          {/* Date */}
          <div>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
          </div>

          {/* Time Slot */}
          <div>
            <select
              {...register("timeSlot", { required: "Please select a time slot" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Select Time Slot</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
            {errors.timeSlot && <p className="text-red-500 text-sm">{errors.timeSlot.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" disabled={loading}>
              {loading ? "Booking..." : "Book Appointment"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
