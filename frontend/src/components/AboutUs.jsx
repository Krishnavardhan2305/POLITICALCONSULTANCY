import React, { useEffect, useRef } from "react";
import aboutus from "../assets/AboutUs.jpeg";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate image when section comes into view
          if (imageRef.current) {
            imageRef.current.classList.add('animate-in');
          }
          
          // Animate text with delay
          if (textRef.current) {
            setTimeout(() => {
              textRef.current.classList.add('animate-in');
            }, 200);
          }
          
          // Animate features with sequential delay
          if (featuresRef.current) {
            const features = featuresRef.current.children;
            Array.from(features).forEach((feature, index) => {
              setTimeout(() => {
                feature.classList.add('animate-in');
              }, 400 + (index * 150));
            });
          }
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-slate-800 text-center font-bold mb-4 relative animate-fadeIn">
          <span className="border-b-4 border-blue-600 pb-2 inline-block transition-all duration-500 hover:border-blue-800">
            ABOUT JKR CONSULTANCY
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center mt-12 w-full">
          <div ref={imageRef} className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 opacity-0 translate-x-[-50px] transition-all duration-1000">
            <img
              src={aboutus}
              className="w-3/4 md:w-4/5 rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
              alt="About JKR Consultancy"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center px-6">
            <div ref={textRef} className="opacity-0 translate-y-10 transition-all duration-700">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Expertise</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                JKR provides data-driven consulting for people-centered campaigns. We work with leaders,
                political parties, and causes to change people's minds and move them in the desired direction.
              </p>
            </div>
            
            <div ref={featuresRef} className="mt-8 space-y-4">
              {[
                {
                  title: "Strategic Planning",
                  desc: "Data-driven approaches to maximize campaign impact and engage voters."
                },
                {
                  title: "Campaign Management",
                  desc: "End-to-end solutions for successful political campaigns."
                },
                {
                  title: "Policy Development",
                  desc: "Research-backed policy recommendations that resonate with constituents."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start opacity-0 translate-y-10 transition-all duration-700">
                  <div className="flex-shrink-0 bg-blue-600 rounded-full p-2 mt-1 animate-pulse">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-800">{feature.title}</h4>
                    <p className="text-slate-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;