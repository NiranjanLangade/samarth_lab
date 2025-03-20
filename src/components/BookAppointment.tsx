"use client";

import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

const BookAppointment = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 md:px-10 lg:px-20">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">We Are Always Ready To Help You.</h2>
        <h3 className="text-2xl font-semibold text-gray-900">Book An Appointment</h3>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet.</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <AppointmentForm />
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center">
          <Image
            src="/contact-img.png" // Replace with actual image path
            alt="Doctors"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
