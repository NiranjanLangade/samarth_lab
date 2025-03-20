"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Home, User, Smile, Calendar } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Stats Data
const stats = [
  { id: 1, value: 3468, label: "Hospital Rooms", icon: Home },
  { id: 2, value: 557, label: "Specialist Doctors", icon: User },
  { id: 3, value: 4379, label: "Happy Patients", icon: Smile },
  { id: 4, value: 32, label: "Years of Experience", icon: Calendar },
];

// Counter Animation Function
const Counter = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(0);
  const animatedValue = useSpring(motionValue, { duration: 2 });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    motionValue.set(value);
    const unsubscribe = animatedValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest)); // Ensure whole numbers
    });

    return () => unsubscribe();
  }, [value, motionValue, animatedValue]);

  return (
    <motion.span
      className="text-4xl font-bold text-white"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {displayValue.toLocaleString()}
    </motion.span>
  );
};

export default function AnimatedStats() {
  return (
    <section className="relative w-full py-20">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0">
        <Image
          src='/fun-bg.jpg'
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center space-y-4">
            {/* Icon with Hover Effect */}
            <motion.div
              className="w-20 h-20 flex items-center justify-center border-2 border-white rounded-full"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon className="h-10 w-10 text-white" />
            </motion.div>
            {/* Animated Number */}
            <Counter value={stat.value} />
            {/* Label */}
            <p className="text-white text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
