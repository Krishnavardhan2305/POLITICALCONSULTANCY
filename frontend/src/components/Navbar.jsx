import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ heroRef, aboutRef, servicesRef, clientsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); 
    }
  };

  return (
    <nav className={`bg-slate-900 shadow-lg fixed w-full z-20 top-0 left-0 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-white flex items-center">
          <span className="text-blue-500 transition-transform duration-500 hover:scale-110">JKR</span> 
          <span className="transition-transform duration-500 hover:scale-110 ml-2">CONSULTANCY</span>
        </Link>

        <div className="hidden md:flex space-x-8 font-medium tracking-wide">
          <button onClick={() => scrollToSection(heroRef)} className="text-gray-200 hover:text-blue-400 transition duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection(aboutRef)} className="text-gray-200 hover:text-blue-400 transition duration-300 relative group">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection(servicesRef)} className="text-gray-200 hover:text-blue-400 transition duration-300 relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection(contactRef)} className="text-gray-200 hover:text-blue-400 transition duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        <div className="hidden md:flex">
          <Link to="/join" className="bg-blue-600 text-white px-5 py-2 hover:bg-blue-700 rounded transition-all duration-300 font-semibold hover:scale-105 transform">
            JOIN NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden block text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 transition-transform duration-300 hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div className={`md:hidden flex flex-col items-center bg-slate-800 shadow-md space-y-4 p-4 transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <button onClick={() => scrollToSection(heroRef)} className="text-gray-200 hover:text-blue-400 transition duration-300 w-full text-center py-2">Home</button>
        <button onClick={() => scrollToSection(aboutRef)} className="text-gray-200 hover:text-blue-400 transition duration-300 w-full text-center py-2">About Us</button>
        <button onClick={() => scrollToSection(servicesRef)} className="text-gray-200 hover:text-blue-400 transition duration-300 w-full text-center py-2">Services</button>
        <button onClick={() => scrollToSection(contactRef)} className="text-gray-200 hover:text-blue-400 transition duration-300 w-full text-center py-2">Contact</button>
        <Link to="/join" className="bg-blue-600 text-white px-5 py-2 rounded transition duration-300 font-semibold w-full text-center">
          JOIN NOW
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;