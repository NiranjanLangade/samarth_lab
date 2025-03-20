"use client";

import Image from "next/image";
import { PlayCircle, CircleDot } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            We Offer Different Services To Improve Your Health
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto my-4"></div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet, pretium.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
              Who We Are
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est
              lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center">
                <CircleDot className="text-blue-500 mr-2" />
                Maecenas vitae luctus nibh.
              </div>
              <div className="flex items-center">
                <CircleDot className="text-blue-500 mr-2" />
                Maecenas vitae luctus nibh.
              </div>
              <div className="flex items-center">
                <CircleDot className="text-blue-500 mr-2" />
                Duis massa massa.
              </div>
              <div className="flex items-center">
                <CircleDot className="text-blue-500 mr-2" />
                Duis massa massa.
              </div>
              <div className="flex items-center">
                <CircleDot className="text-blue-500 mr-2" />
                Aliquam feugiat interdum.
              </div>
              <div className="flex items-center">
                <CircleDot className="text-blue-500 mr-2" />
                Aliquam feugiat interdum.
              </div>
            </div>
          </div>

          {/* Right - Image with Play Button */}
          <div className="relative">
            <Image
              src="/video-bg.jpg"
              alt="Medical Care"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/80 p-4 rounded-full shadow-md hover:scale-105 transition">
                <PlayCircle size={60} className="text-blue-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
