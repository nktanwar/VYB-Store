'use client'; // Ensure this is a client component
import { useState } from 'react';
import Signin from './Signin';
import Two from './2';
import Three from './3';
import Four from './4';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide data with components to render
  const slides = [
    { id: 1, content: <Signin /> },
    { id: 2, content: <Two /> },
    { id: 3, content: <Three /> },
    { id: 4, content: <Four /> },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-screen-lg md:h-[400px]  h-[500px] overflow-hidden rounded-2xl mx-auto">
     
      <div
        className="absolute inset-0 flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full md:h-[400px] flex-shrink-0 flex items-center justify-center " // Add a default background color
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2  rounded-full p-2 shadow-lg  transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2  rounded-full p-2 shadow-lg  transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
