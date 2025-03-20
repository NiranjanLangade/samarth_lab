"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ruhfayed Sakib",
    image: "/doctor1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros.",
  },
  {
    name: "Shakil Hossain",
    image: "/doctor2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros.",
  },
  {
    name: "Naimur Rahman",
    image: "/doctor3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros.",
  },
  {
    name: "Naimur Rahman",
    image: "/doctor3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros.",
  },
  {
    name: "Naimur Rahman",
    image: "/doctor3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros.",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="relative bg-blue-700 text-white py-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/testi-bg.jpg')",
          filter: "blur(2px)",
          opacity: 0.3,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>

      {/* Section Content */}
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-3xl font-bold">What Our Patients Say About Our Medical Treatments</h2>
        <div className="w-16 h-1 bg-white mx-auto mt-2"></div>
      </div>

      {/* Testimonials Slider */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
                <p className="text-sm mb-4">{testimonial.text}</p>
                <div className="flex justify-center items-center gap-3 mt-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full border-2 border-blue-500" />
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
