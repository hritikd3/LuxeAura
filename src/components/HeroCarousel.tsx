import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    title: 'Modern Architecture',
    description: 'Creating spaces that inspire and endure'
  },
  {
    image: 'https://images.unsplash.com/photo-1613390792897-aa0c06a52332?auto=format&fit=crop&q=80',
    title: 'Innovative Design',
    description: 'Where creativity meets functionality'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    title: 'Sustainable Living',
    description: 'Building for a better tomorrow'
  }
];

export default function HeroCarousel() {
  return (
    <div className="h-screen relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="max-w-3xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}