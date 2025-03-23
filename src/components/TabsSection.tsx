"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaMicroscope, FaXRay } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";

const services = [
  {
    id: "Electrohomeopathy",
    title: "Electrohomeopathy",
    description: "A holistic treatment system using plant-based remedies.",
    quote: "“Providing natural healing with Electrohomeopathy.”",
    points: [
      "100% natural remedies",
      "Non-invasive treatments",
      "Safe and effective therapies",
    ],
    image: "/pf1.jpg",
    icon: GiMedicines,
  },
  {
    id: "Pathology",
    title: "Pathology",
    description: "Comprehensive diagnostic lab tests with accurate results.",
    quote: "“Ensuring precise and reliable diagnostic services.”",
    points: [
      "Advanced lab equipment",
      "Experienced pathologists",
      "Quick and accurate reports",
    ],
    image: "/pf2.jpg",
    icon: FaMicroscope,
  },
  {
    id: "X-ray",
    title: "X-ray",
    description: "State-of-the-art imaging services for accurate diagnosis.",
    quote: "“High-quality X-ray imaging for better health insights.”",
    points: ["Modern radiology", "Detailed imaging", "Expert analysis"],
    image: "/pf3.jpg",
    icon: FaXRay,
  },
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeTab);

  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="container mx-auto">
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-12 mb-8 border-b pb-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                className={`flex flex-col items-center text-gray-600 transition-all pb-2 ${
                  activeTab === service.id
                    ? "text-blue-600 font-semibold border-b-2 border-blue-500"
                    : "hover:text-blue-500"
                }`}
                onClick={() => setActiveTab(service.id)}
              >
                <Icon
                  className={`text-3xl mb-2 transition ${
                    activeTab === service.id ? "text-blue-600" : "text-gray-500"
                  }`}
                />
                <span className="text-lg">{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeService && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {activeService.title}
              </h2>
              <p className="text-lg text-blue-600 mb-4">{activeService.quote}</p>
              <p className="text-gray-600 mb-4">{activeService.description}</p>
              <ul className="space-y-2 text-gray-700">
                {activeService.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-500 text-xl">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative w-full h-80 shadow-lg rounded-lg overflow-hidden">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TabsSection;
