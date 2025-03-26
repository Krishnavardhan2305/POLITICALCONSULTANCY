import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../assets/SocialMedia.jpeg";
import campaign from "../assets/CampaignManage.jpeg";
import policies from "../assets/Policies.jpeg";
import volunteer from "../assets/Volunteer.jpeg";
import doorCampaign from "../assets/DoorCampaign.jpeg";
import software from "../assets/Software.jpeg";

const servicesData = [
  { img: software, title: "Software Services", description: "Tailored software services to optimize workflow and enhance productivity.", path: "/services/software-services" },
  { img: doorCampaign, title: "Door-to-Door Campaigns", description: "Targeted voter outreach with personalized surveys and data collection.", path: "/services/door-to-door-campaigns" },
  { img: policies, title: "Data-Driven Policies", description: "Leverage insights and analytics for informed decision-making and policy planning.", path: "/services/data-driven-policies" },
  { img: campaign, title: "Campaign Management", description: "Plan, execute, and track campaigns efficiently to maximize engagement and impact.", path: "/services/campaign-management" },
  { img: volunteer, title: "Volunteer Platforms", description: "Custom-built websites to streamline volunteer coordination and engagement.", path: "/services/volunteer-platforms" },
  { img: SocialMedia, title: "Social Media Management", description: "Boost your online presence with expert social media strategies and content management.", path: "/services/social-media-management" },
  
];

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Reset services view when switching between mobile and desktop
      if (window.innerWidth > 768) {
        setShowAllServices(false);
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some(entry => entry.isIntersecting)) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine which services to display
  const displayServices = isMobile && !showAllServices 
    ? servicesData.slice(0, 3) 
    : servicesData;

  const handleKnowMoreClick = () => {
    setShowAllServices(true);
  };

  const handleShowLessClick = () => {
    setShowAllServices(false);
  };

  return (
    <div ref={sectionRef} className="bg-gradient-to-b from-slate-900 to-blue-900 py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className={`text-center mb-16 transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl font-bold text-white mb-4">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-12"></div>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            We offer comprehensive political consulting services designed to help you achieve your campaign goals and connect with voters effectively.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-500 transform ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="h-48 overflow-hidden relative">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mt-4">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
                <Link to={service.path} className="mt-4 text-blue-600 font-semibold flex items-center transition duration-300 hover:text-blue-800">
                  Learn More
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View Toggle Buttons */}
        {isMobile && (
          <div className="text-center mt-8 space-x-4">
            {!showAllServices ? (
              <button 
                onClick={handleKnowMoreClick}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Know More Services
              </button>
            ) : (
              <button 
                onClick={handleShowLessClick}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Show Less Services
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;