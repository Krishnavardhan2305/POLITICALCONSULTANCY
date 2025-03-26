import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ heroRef, aboutRef, servicesRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      // Ensure mobile menu closes and section scrolls smoothly
      setIsOpen(false);
      
      // Add a small delay to ensure menu closes before scrolling
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  };

  return (
    <nav className={`bg-slate-900 shadow-lg fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-white flex items-center">
          <span className="text-blue-500 transition-transform duration-500 hover:scale-110">JKR</span>
          <span className="transition-transform duration-500 hover:scale-110 ml-2">CONSULTANCY</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium tracking-wide">
          <button 
            onClick={() => scrollToSection(heroRef)} 
            className="text-gray-200 hover:text-blue-400"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection(aboutRef)} 
            className="text-gray-200 hover:text-blue-400"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection(servicesRef)} 
            className="text-gray-200 hover:text-blue-400"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection(contactRef)} 
            className="text-gray-200 hover:text-blue-400"
          >
            Contact
          </button>
        </div>

        <div className="hidden md:flex">
          <Link 
            to="/join" 
            className="bg-blue-600 text-white px-5 py-2 rounded transition-all duration-300 hover:scale-105"
          >
            JOIN NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden block text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            className="w-6 h-6 transition-transform duration-300 hover:rotate-90" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16m-7 6h7" 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div 
        className={`
          fixed top-0 left-0 h-full w-64 bg-slate-900 shadow-lg 
          transform transition-transform duration-500 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col items-start space-y-6 p-6">
          <button 
            className="self-end text-white text-xl" 
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          <button 
            onClick={() => scrollToSection(heroRef)} 
            className="text-gray-200 hover:text-blue-400 w-full text-left"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection(aboutRef)} 
            className="text-gray-200 hover:text-blue-400 w-full text-left"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection(servicesRef)} 
            className="text-gray-200 hover:text-blue-400 w-full text-left"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection(contactRef)} 
            className="text-gray-200 hover:text-blue-400 w-full text-left"
          >
            Contact
          </button>
          <Link 
            to="/join" 
            className="bg-blue-600 text-white px-4 py-2 rounded w-full text-center"
          >
            JOIN NOW
          </Link>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
