import React, { useState, useEffect } from "react";
import clientsBg from "../assets/Clients.jpeg";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Commitment details replacing previous testimonials
  const commitmentDetails = [
    {
      title: "Holistic Campaign Ecosystem",
      description: "Integrated services spanning social media, campaign management, data-driven policies, ground-level outreach, and custom software solutions.",
      icon: "🌐"
    },
    {
      title: "Data-Driven Precision",
      description: "Meticulously crafted strategies informed by deep analytical insights, ensuring targeted and effective political campaigns.",
      icon: "📊"
    },
    {
      title: "Personalized Strategy",
      description: "Custom solutions that reflect your unique campaign identity, values, and specific political objectives.",
      icon: "🎯"
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
          WHAT WE COMMIT TO OFFER
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
          {commitmentDetails.map((detail, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-700 transition-all duration-700 hover:shadow-blue-500/20 hover:shadow-xl hover:border-blue-400/30 hover:-translate-y-1"
              style={{ 
                animation: isVisible ? `fadeInUp 0.6s ease-out forwards ${0.2 + (index * 0.2)}s` : 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="text-5xl mb-4 text-blue-400">{detail.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{detail.title}</h3>
              <p className="text-gray-200 line-clamp-4 hover:line-clamp-none transition-all duration-300">
                {detail.description}
              </p>
            </div>
          ))}
        </div>

        <div 
          className={`text-center mt-12 ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0'
          }`}
          style={{ 
            animation: isVisible ? 'fadeInDown 0.6s ease-out forwards' : 'none',
            transitionDelay: '0.8s'
          }}
        >
         
        </div>
      </div>
      
      {/* Previous CSS Animations remain the same */}
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
