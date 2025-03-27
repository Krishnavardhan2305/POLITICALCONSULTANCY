import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = ({
  heroRef,
  aboutRef,
  servicesRef,
  clientsRef,
  contactRef
}) => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // State for mobile dropdowns
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed email:", email);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Social media links
  const socialLinks = [
    {
      name: "twitter",
      url: "https://x.com/JkrConsultancy",
      icon: <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    },
    {
      name: "facebook",
      url: "https://www.facebook.com/share/1TCBjTY1uu/",
      icon: <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/jkr_consultancy",
      icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/apparao-siddapureddi-689343253/",
      icon: <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    }
  ];

  // Quick Links data
  const quickLinks = [
    { label: "Home", ref: heroRef },
    { label: "About Us", ref: aboutRef },
    { label: "Services", ref: servicesRef },
    { label: "Contact", ref: contactRef }
  ];

  // Services links data
  const serviceLinks = [
    {
      label: "Social Media Management",
      to: "/services/social-media-management"
    },
    {
      label: "Campaign Management",
      to: "/services/campaign-management"
    },
    {
      label: "Data-Driven Policies",
      to: "/services/data-driven-policies"
    },
    {
      label: "Volunteer Platforms",
      to: "/services/volunteer-platforms"
    },
    {
      label: "Door-to-Door Campaigns",
      to: "/services/door-to-door-campaigns"
    },
    {
      label: "Software-Solutions",
      to: "/services/software-solutions"
    }
  ];

  // Dropdown Toggle Component
  const DropdownToggle = ({ isOpen, onClick, title }) => (
    <div 
      className="flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <svg 
        className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );

  return (
    <footer className="bg-slate-900 text-white">
      {/* Wave separator */}
      <div className="w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="transform transition duration-500 hover:translate-y-[-8px]">
            <h3 className="text-2xl font-bold mb-6 group">
              <span className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">JKR</span> CONSULTANCY
            </h3>
            <p className="text-gray-400 mb-6">
              Data-driven consulting for people-centered political campaigns. Transforming strategies with innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 group"
                >
                  <svg
                    className="h-5 w-5 transform transition-transform duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Mobile Responsive */}
          <div className="transform transition duration-500 hover:translate-y-[-8px] md:block">
            <DropdownToggle 
              isOpen={isQuickLinksOpen} 
              onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
              title="Quick Links"
            />
            <ul className={`space-y-3 ${isQuickLinksOpen ? 'block' : 'hidden md:block'}`}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.ref ? (
                    <button
                      onClick={() => scrollToSection(link.ref)}
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group w-full text-left"
                    >
                      <svg
                        className="w-4 h-4 mr-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group"
                    >
                      <svg
                        className="w-4 h-4 mr-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Mobile Responsive */}
          <div className="transform transition duration-500 hover:translate-y-[-8px] md:block">
            <DropdownToggle 
              isOpen={isServicesOpen} 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              title="Our Services"
            />
            <ul className={`space-y-3 ${isServicesOpen ? 'block' : 'hidden md:block'}`}>
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.to}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <svg
                      className="w-4 h-4 mr-2 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="transform transition duration-500 hover:translate-y-[-8px]">
            <h3 className="text-xl font-semibold mb-6 relative">
              Stay Updated
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-blue-500 transform transition-all duration-300 group-hover:w-24"></span>
            </h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest insights on political strategies.</p>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div className="flex flex-col space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Your email address"
                    className="bg-slate-800 w-full text-white px-4 py-3 rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                  {isSubscribed && (
                    <div className="absolute -top-10 left-0 right-0 bg-green-500 text-white py-2 px-4 rounded text-sm animate-fade-in-down">
                      Thanks for subscribing!
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded transition-all duration-300 font-medium relative overflow-hidden group"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-64 ease"></span>
                  <span className="relative">SUBSCRIBE</span>
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            Copyright © {currentYear} JKR Consultancy - All Rights Reserved.
          </p>
          
        </div>
      </div>

      {/* Style for animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.5s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
