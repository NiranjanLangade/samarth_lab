"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 px-6 md:px-16">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-64">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6 text-center md:text-left md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            We Provide Services Like <br />
            <span className="text-yellow-300">
              <Typewriter
                words={["Electrohomeopathy", "Pathology", "X-ray"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </h1>
          <p className="text-lg text-gray-200">
            Samarth Lab is committed to providing top-quality diagnostic
            services with precision and care.
          </p>
          <Button
            onClick={() => router.push("/book-appointment")}
            className="px-6 py-3 text-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-lg"
          >
            Book Appointment
          </Button>
        </motion.div>

        {/* Right Section (Hidden on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 hidden md:flex justify-center mt-8 md:mt-0"
        >
          <Image
            src="/hero.png"
            alt="Samarth Lab"
            width={500}
            height={500}
            className="w-full max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
