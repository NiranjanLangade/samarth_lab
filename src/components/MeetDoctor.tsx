"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MeetDoctor = () => {
  const [count, setCount] = useState(0);

  // Counter Animation Effect
  useEffect(() => {
    let start = 0;
    const end = 12;
    const duration = 1000; // Faster animation
    const stepTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-6 lg:px-32 flex flex-col md:flex-row items-center gap-16 md:gap-64">
        {/* Left Content */}
        <div className="md:w-[48%]">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Dr. Vibhas Naik</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Protect yourself and others by wearing masks and washing hands frequently. Outdoor is safer
            than indoor for gatherings or holding events. People who get sick with Coronavirus disease
            (COVID-19) will experience mild to moderate symptoms and recover without special treatments.
          </p>
          <p className="text-gray-600 leading-relaxed">
            You can feel free to use this CSS template for your medical profession or health care related websites.
          </p>
        </div>

        {/* Right Content - Doctor Image with Badge */}
        <div className="relative w-72 h-72 shrink-0">
          {/* Doctor Image */}
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-gray-300 shadow-xl">
          <Image
  src="/doctor.jpg"
  fill // Instead of `layout="fill"`
  style={{ objectFit: "cover" }} // Instead of `objectFit`
  alt="Doctor"
/>

          </div>

          {/* Experience Badge - Bottom Right Corner */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute bottom-2 right-2 bg-white bg-opacity-90 px-4 py-2 rounded-full shadow-lg flex items-center space-x-2"
          >
            <span className="text-2xl font-bold text-blue-500">{count}</span>
            <div className="text-sm text-gray-700">
              <span className="block font-semibold">Years</span>
              <span>of Experience</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetDoctor;
