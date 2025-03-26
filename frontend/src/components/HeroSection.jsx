import React, { useEffect, useRef } from "react";
import heroImage from "../assets/HeroSec.jpeg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Fade-in and slide animation on mount
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (overlay && content) {
      // Initialize styles
      overlay.style.opacity = "0";
      overlay.style.transform = "translateX(-30px)";
      content.style.opacity = "0";
      content.style.transform = "translateX(30px)";

      // Trigger animations after a short delay
      setTimeout(() => {
        overlay.style.opacity = "1";
        overlay.style.transform = "translateX(0)";
        content.style.opacity = "1";
        content.style.transform = "translateX(0)";
      }, 300);
    }
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center min-h-[50vh] md:min-h-[80vh] sm:min-h-[60vh] bg-gray-900 text-white">
    {/* Background Image with Overlay */}
    <div
      ref={overlayRef}
      className="absolute inset-0 w-full h-full transition-all duration-1000"
    >
      <img
        src={heroImage}
        alt="Political Consulting"
        className="w-full h-[50vh] sm:h-[60vh] md:h-full object-cover object-top opacity-30 transform hover:scale-105 transition duration-700"
      />
    </div>
  
    {/* Content */}
    <div
      ref={contentRef}
      className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl px-6 md:px-12 py-8 sm:py-12 md:py-16 w-full"
    >
      <div className="mt-20">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
          POLITICAL CONSULTING <span className="text-blue-500 relative inline-block animate-pulse">SERVICES</span>
        </h1>
      </div>
  
      <p className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg text-center md:text-left px-4 sm:px-0">
        Driving impactful campaigns through data-driven strategies and expert political insights.
      </p>
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
        <Link to='/join' className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md transition duration-300 font-semibold transform hover:scale-105 hover:shadow-lg">
            GET STARTED
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  );
};

export default HeroSection;