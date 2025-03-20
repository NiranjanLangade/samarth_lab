"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeartPulse, FaBrain, FaTooth, FaStethoscope, FaBone } from "react-icons/fa6";

const services = [
  {
    id: "cardiac",
    title: "Cardiac Clinic",
    description: "Specialized in heart-related diseases with expert cardiologists.",
    quote: "“We provide the best cardiac care with advanced treatments.”",
    points: [
      "Experienced heart specialists",
      "State-of-the-art facilities",
      "Personalized treatment plans",
    ],
    image: "/pf1.jpg",
    icon: FaHeartPulse,
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Advanced care for brain and nervous system disorders.",
    quote: "“Leading neurology department for stroke and epilepsy treatment.”",
    points: [
      "Expert neurologists",
      "Modern diagnostic technology",
      "Comprehensive rehabilitation programs",
    ],
    image: "/pf2.jpg",
    icon: FaBrain,
  },
  {
    id: "dentistry",
    title: "Dentistry",
    description: "Top-notch dental care with pain-free treatment options.",
    quote: "“Your smile is our priority! Trusted dental experts at your service.”",
    points: ["Painless treatments", "Modern equipment", "Affordable services"],
    image: "/pf3.jpg",
    icon: FaTooth,
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    description: "Expert care for digestive system disorders.",
    quote: "“Advanced treatments for stomach and digestive diseases.”",
    points: [
      "Gastroenterology specialists",
      "Endoscopy and colonoscopy services",
      "Nutritional counseling",
    ],
    image: "/pf4.jpg",
    icon: FaStethoscope,
  },
  {
    id: "orthopedagogy",
    title: "Orthopedagogy",
    description: "Specialized treatments for bone and muscle disorders.",
    quote: "“Leading orthopedagogy specialists for advanced rehabilitation.”",
    points: ["Orthopedic surgeons", "Rehabilitation programs", "Physiotherapy"],
    image: "/pf1.jpg",
    icon: FaBone,
  },
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("cardiac");

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
                <span className="text-sm text-gray-400">Lorem Sit</span>
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
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TabsSection;
