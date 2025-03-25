import React, { useEffect, useRef } from "react";
import heroImage from "../assets/HeroSec.jpeg";
import {  Link } from "react-router-dom";
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
    <div className="relative flex flex-col md:flex-row items-center min-h-[80vh] bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 w-full h-full transition-all duration-1000"
      >
        <img 
          src={heroImage} 
          alt="Political Consulting" 
          className="w-full h-full object-cover object-top opacity-30 transform hover:scale-105 transition duration-700" 
        />
      </div>
      
      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl px-6 md:px-12 py-16 transition-all duration-1000"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          POLITICAL CONSULTING <span className="text-blue-400 relative inline-block animate-pulse">SERVICES</span>
        </h1>
        <p className="mt-6 text-gray-300 text-lg">
          Driving impactful campaigns through data-driven strategies and expert political insights.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to='/join'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition duration-300 font-semibold transform hover:scale-105 hover:shadow-lg">
              GET STARTED
            </button>
          </Link>
          <Link to='/schedule-a-consultation'>
          <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md transition duration-300 font-semibold transform hover:scale-105 hover:shadow-lg">
            LEARN MORE
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;