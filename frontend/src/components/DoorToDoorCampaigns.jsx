import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import doorCampaign from "../assets/DoorCampaign.jpeg";

const DoorToDoorCampaigns = () => {
  const [activeTab, setActiveTab] = useState("targeting");
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
      id: "targeting",
      title: "Targeted Voter Outreach",
      description: "Precision targeting to connect with the most relevant voters for your campaign, using advanced demographic and behavioral insights.",
      features: [
        "Micro-targeted voter segmentation",
        "Demographic & historical voting analysis",
        "Personalized engagement strategies",
        "Real-time voter mapping"
      ]
    },
    {
      id: "surveying",
      title: "Advanced Surveying",
      description: "Capture deep voter insights through professionally designed surveys that go beyond surface-level information.",
      features: [
        "Custom questionnaire design",
        "Mobile-first data collection",
        "Sentiment and trend analysis",
        "Comprehensive reporting tools"
      ]
    },
    {
      id: "training",
      title: "Canvasser Training",
      description: "Comprehensive training program to equip your team with the skills and knowledge to conduct effective door-to-door campaigns.",
      features: [
        "Communication skill workshops",
        "Voter interaction techniques",
        "Data collection best practices",
        "Conflict resolution training"
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
          <span className="text-white">Door-to-Door Campaigns</span>
        </div>

        {/* Hero Section */}
        <div ref={headingRef} className="mb-16 opacity-0 translate-y-10">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 p-12 rounded-lg shadow-2xl">
            {/* Text Content */}
            <div className="md:w-3/4 lg:w-1/2 text-center md:text-left bg-slate-900/70 p-8 rounded-xl border border-blue-900/30 shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Revolutionize Voter Engagement
              </h1>
              <div className="w-20 h-1.5 bg-blue-500 mb-6 mx-auto md:mx-0 rounded-full"></div>
              <p className="text-blue-100 text-lg mb-8 opacity-90">
                Unlock the power of personal connection with data-driven door-to-door campaign strategies that transform voter interactions.
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
                src={doorCampaign}
                alt="Door-to-Door Campaign"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div ref={contentRef} className="bg-white rounded-xl shadow-xl p-8 md:p-12 opacity-0 translate-y-10">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Strategic Door-to-Door Approach</h2>
              <p className="text-slate-600 mb-4">
                Our comprehensive methodology transforms traditional canvassing into a precise, data-driven engagement tool that maximizes voter connection and campaign impact.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Campaign Philosophy</h2>
              <p className="text-slate-600 mb-4">
                We believe in meaningful, personalized voter interactions that go beyond simple data collection—creating genuine connections that drive political engagement.
              </p>
            </div>
          </div>

          {/* Campaign Options Navigation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Our Campaign Strategies</h2>
            
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
                  src={doorCampaign}
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
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Campaign Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Strategic Planning</h3>
                <p className="text-slate-600">Develop targeted canvassing strategies based on comprehensive voter analysis.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Team Preparation</h3>
                <p className="text-slate-600">Comprehensive training to equip canvassers with essential skills and knowledge.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Field Execution</h3>
                <p className="text-slate-600">Professional management of canvassing activities with real-time monitoring.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Insights & Optimization</h3>
                <p className="text-slate-600">Comprehensive data analysis with strategic recommendations for continuous improvement.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Elevate Your Voter Outreach?</h2>
            <p className="text-blue-200 text-center mb-8 max-w-3xl mx-auto">
              Our expert team is ready to transform your door-to-door campaign with innovative strategies and cutting-edge technologies.
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

export default DoorToDoorCampaigns;