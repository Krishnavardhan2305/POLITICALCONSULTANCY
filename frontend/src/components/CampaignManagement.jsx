import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import campaignHero from "../assets/analytics.jpeg"; // Replace with your actual image path
import strategyIcon from "../assets/analytics.jpeg"; // Replace with your actual icon path
import analyticsIcon from "../assets/analytics.jpeg";
import communicationIcon from "../assets/analytics.jpeg";
import eventIcon from "../assets/analytics.jpeg";

const CampaignManagement = () => {
  const [activeTab, setActiveTab] = useState("strategy");
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    const featureElements = document.querySelectorAll(".feature-item");
    featureElements.forEach((el) => observer.observe(el));

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      featureElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const campaignOptions = [
    {
      id: "strategy",
      title: "Strategic Planning",
      image: strategyIcon,
      description: "Development of comprehensive campaign strategies based on thorough research and analysis of your target demographics and political landscape.",
      features: [
        "In-depth demographic research",
        "Competitive landscape analysis",
        "Targeted messaging development",
        "Strategic positioning framework"
      ]
    },
    {
      id: "analytics",
      title: "Performance Tracking",
      image: analyticsIcon,
      description: "Robust analytics and reporting systems to monitor campaign progress, measure impact, and make data-driven adjustments in real-time.",
      features: [
        "Real-time campaign performance monitoring",
        "Voter engagement metrics",
        "ROI tracking for campaign activities",
        "Predictive analytics tools"
      ]
    },
    {
      id: "messaging",
      title: "Message Development",
      image: communicationIcon,
      description: "Crafting compelling narratives and messaging frameworks that resonate with voters and effectively communicate your platform and values.",
      features: [
        "Narrative strategy creation",
        "Audience-focused messaging",
        "Multi-channel communication planning",
        "Brand and platform alignment"
      ]
    }
  ];

  const activeOption = campaignOptions.find(option => option.id === activeTab);

  return (
    <div className="bg-gradient-to-b from-slate-900 to-blue-900 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 text-blue-200">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Campaign Management</span>
        </div>

        {/* Hero Section */}
        <div ref={headingRef} className="mb-16 opacity-0 translate-y-10">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 p-12 rounded-lg shadow-2xl">
            {/* Text Content */}
            <div className="md:w-3/4 lg:w-1/2 text-center md:text-left bg-slate-900/70 p-8 rounded-xl border border-blue-900/30 shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight background-clip-text">
                Elevate Your Campaign with Strategic Management
              </h1>
              <div className="w-20 h-1.5 bg-blue-500 mb-6 mx-auto md:mx-0 rounded-full"></div>
              <p className="text-blue-100 text-lg mb-8 opacity-90">
                Comprehensive campaign management solutions designed to maximize your political impact, optimize voter engagement, and drive strategic success.
              </p>
              <Link to="/join">
                <button className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold 
                  hover:bg-blue-700 transition-all duration-300 ease-in-out 
                  transform hover:translate-y-[-5px] hover:shadow-xl 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Get Started
                </button>
              </Link>
            </div>
            {/* Image Content */}
            <div className="md:w-1/2 h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src={campaignHero}
                alt="Campaign Management"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div ref={contentRef} className="bg-white rounded-xl shadow-xl p-8 md:p-12 opacity-0 translate-y-10">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Comprehensive Campaign Management</h2>
              <p className="text-slate-600 mb-4">
                Our team of experienced campaign managers develops and implements winning strategies tailored to your specific goals and target audience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h2>
              <p className="text-slate-600 mb-4">
                We leverage data-driven insights, strategic communication, and innovative technologies to create impactful campaign management solutions.
              </p>
            </div>
          </div>

          {/* Campaign Options Navigation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Our Campaign Management Services</h2>
            
            <div className="flex justify-center border-b mb-8">
              {campaignOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveTab(option.id)}
                  className={`px-6 py-4 text-lg font-medium transition-colors duration-300 ${
                    activeTab === option.id
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-blue-100"
                  }`}
                >
                  {option.title}
                </button>
              ))}
            </div>

            {/* Active Option Content */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={activeOption.image}
                  alt={activeOption.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{activeOption.title}</h3>
                <p className="text-slate-600 mb-6">{activeOption.description}</p>
                <h4 className="font-semibold text-lg text-slate-800 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {activeOption.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Campaign Process Section */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Campaign Management Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Research</h3>
                <p className="text-slate-600">Comprehensive analysis of political landscape and voter demographics.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Strategy</h3>
                <p className="text-slate-600">Develop tailored campaign strategy aligned with your goals.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Execution</h3>
                <p className="text-slate-600">Implement comprehensive campaign management and communication.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Optimization</h3>
                <p className="text-slate-600">Continuous monitoring and data-driven campaign adjustments.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Elevate Your Campaign?</h2>
            <p className="text-blue-200 text-center mb-8 max-w-3xl mx-auto">
              Our expert campaign management team is ready to help you develop a winning strategy, maximize voter engagement, and achieve your political objectives.
            </p>
            <div className="flex justify-center">
              <Link to='/schedule-a-consultation'>
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-100 transition">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        
        @keyframes fadeIn {
          0% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
};

export default CampaignManagement;
