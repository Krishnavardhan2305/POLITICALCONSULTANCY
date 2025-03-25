import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../assets/SocialMedia.jpeg";
import campaign from "../assets/CampaignManage.jpeg";
import policies from "../assets/Policies.jpeg";
import volunteer from "../assets/Volunteer.jpeg";
import doorCampaign from "../assets/DoorCampaign.jpeg";
import software from "../assets/Software.jpeg";

const servicesData = [
  {
    img: SocialMedia,
    title: "Social Media Management",
    description: "Boost your online presence with expert social media strategies and content management.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    path: "/services/social-media-management"
  },
  {
    img: campaign,
    title: "Campaign Management",
    description: "Plan, execute, and track campaigns efficiently to maximize engagement and impact.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    path: "/services/campaign-management"
  },
  {
    img: policies,
    title: "Data-Driven Policies",
    description: "Leverage insights and analytics for informed decision-making and policy planning.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
      </svg>
    ),
    path: "/services/data-driven-policies"
  },
  {
    img: volunteer,
    title: "Volunteer Platforms",
    description: "Custom-built websites to streamline volunteer coordination and engagement.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
    path: "/services/volunteer-platforms"
  },
  {
    img: doorCampaign,
    title: "Door-to-Door Campaigns",
    description: "Targeted voter outreach with personalized surveys and data collection.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    path: "/services/door-to-door-campaigns"
  },
  {
    img: software,
    title: "Software Services",
    description: "Tailored software services to optimize workflow and enhance productivity.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
    path: "/services/software-services"
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate the heading
          if (entry.target === headingRef.current) {
            entry.target.classList.add('animate-fade-in');
          }
          
          // Animate cards with staggered delay
          if (entry.target === cardsRef.current) {
            const cards = entry.target.children;
            Array.from(cards).forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
              }, index * 100);
            });
          }
          
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }
    
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (cardsRef.current) observer.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-gradient-to-b from-slate-900 to-blue-900 py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="text-center mb-16 opacity-0 translate-y-10">
          <h2 className="text-center text-4xl font-bold text-white mb-4">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-12 transform transition-all duration-1000 hover:scale-x-150"></div>
          <p className="text-center text-blue-200 max-w-2xl mx-auto text-lg">
            We offer comprehensive political consulting services designed to help you achieve your campaign goals and connect with voters effectively.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute -top-8 left-6 bg-blue-600 text-white p-3 rounded-lg shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mt-4">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
                <Link 
                  to={service.path} 
                  className="mt-4 text-blue-600 font-semibold flex items-center transition duration-300 hover:text-blue-800 group"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s forwards;
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 1 !important;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Services;