import React, { useState, useEffect } from "react";
import clientsBg from "../assets/Clients.jpeg";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Testimonial data (enhanced with avatar placeholders)
  const testimonials = [
    {
      quote: "JKR Consultancy transformed our campaign strategy completely. Their data-driven approach and strategic insights were invaluable for our success.",
      author: "Coming Soon",
      position: "Campaign Manager",
      color: "bg-blue-600"
    },
    {
      quote: "Working with JKR has been a game-changer for our political movement. They understand the nuances of voter behavior and helped us craft messages that truly resonated.",
      author: "Coming Soon",
      position: "Party Leader",
      color: "bg-indigo-600"
    },
    {
      quote: "The team at JKR provided us with expert guidance throughout our campaign. Their dedication and professionalism made all the difference in our victory.",
      author: "Coming Soon",
      position: "Elected Official",
      color: "bg-purple-600"
    }
  ];

  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials-section');
      if (element) {
        const position = element.getBoundingClientRect();
        const isElementVisible = position.top < window.innerHeight - 100;
        if (isElementVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="testimonials-section" className="relative w-full py-20 bg-slate-900 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${clientsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      ></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 
          className={`text-4xl font-bold text-white text-center mb-4 ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0'
          }`}
          style={{ 
            animation: isVisible ? 'fadeInDown 0.6s ease-out forwards' : 'none',
            transitionDelay: '0.2s'
          }}
        >
          WHAT OUR CLIENTS SAY
        </h2>
        <div 
          className={`w-24 h-1 bg-blue-400 mx-auto mb-16 ${
            isVisible ? 'animate-scale-in' : 'scale-0'
          }`}
          style={{ 
            animation: isVisible ? 'scaleIn 0.6s ease-out forwards' : 'none',
            transitionDelay: '0.4s'
          }}
        ></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-700 transition-all duration-700 hover:shadow-blue-500/20 hover:shadow-xl hover:border-blue-400/30 hover:-translate-y-1"
              style={{ 
                animation: isVisible ? `fadeInUp 0.6s ease-out forwards ${0.2 + (index * 0.2)}s` : 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <svg className="w-10 h-10 text-blue-400 mb-4 transform hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-gray-200 italic mb-6 line-clamp-4 hover:line-clamp-none transition-all duration-300">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-xl transition-transform duration-300 hover:scale-110`}>
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-blue-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Clients;