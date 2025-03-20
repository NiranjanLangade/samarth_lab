import { Ambulance, Stethoscope, Pill } from "lucide-react";

const features = [
  {
    title: "Emergency Help",
    description:
      "Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.",
    icon: <Ambulance className="h-12 w-12 text-blue-500" />,
  },
  {
    title: "Enriched Pharmacy",
    description:
      "Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.",
    icon: <Pill className="h-12 w-12 text-blue-500" />,
  },
  {
    title: "Medical Treatment",
    description:
      "Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.",
    icon: <Stethoscope className="h-12 w-12 text-blue-500" />,
  },
];

export default function FeatureSection() {
  return (
    <section className="py-16 bg-gray-50">
      {/* Centered Container */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-extrabold text-gray-900">
          We Are Always Ready To Help You & Your Family
        </h2>
        <div className="mx-auto w-16 h-1 bg-blue-500 my-4 rounded-full"></div>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet, pretium.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative text-center p-6 bg-white shadow-lg rounded-lg border border-gray-200
                         transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:-translate-y-2"
            >
              {/* Animated Icon */}
              <div
                className="flex items-center justify-center w-24 h-24 border border-gray-300 rounded-full mx-auto
                           transition-all duration-300 group-hover:bg-blue-100 group-hover:scale-110"
              >
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
