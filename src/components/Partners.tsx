"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Define the Partner interface
interface Partner {
  id: number;
  name: string;
  logo: string;
}

// Sample partner data
const partners: Partner[] = [
  { id: 1, name: "Partner 1", logo: "/1.svg" },
  { id: 2, name: "Partner 2", logo: "/2.svg" },
  { id: 3, name: "Partner 3", logo: "/3.png" },
  { id: 4, name: "Partner 4", logo: "/1.svg" },
  { id: 5, name: "Partner 5", logo: "/2.svg" },
  { id: 6, name: "Partner 6", logo: "/3.png" },
  { id: 7, name: "Partner 7", logo: "/1.svg" },
  { id: 8, name: "Partner 8", logo: "/2.svg" },
];

const Partners = () => {
  return (
    <div className="w-full py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Partners
        </h2>

        {/* Top carousel - slides right */}
        <div className="mb-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="h-24 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom carousel - slides left */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {partners
            .slice()
            .reverse()
            .map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="h-24 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
