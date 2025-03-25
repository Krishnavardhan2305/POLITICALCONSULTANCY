import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import campaignHero from "../assets/analytics.jpeg"; // Replace with your actual image path
import strategyIcon from "../assets/analytics.jpeg"; // Replace with your actual icon path
import analyticsIcon from "../assets/analytics.jpeg";
import communicationIcon from "../assets/analytics.jpeg";
import eventIcon from "../assets/analytics.jpeg";

const CampaignManagement = () => {
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
        {/* Hero Section */}
        <div ref={headingRef} className="mb-16 opacity-0 translate-y-10">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 p-12 rounded-lg shadow-2xl">

            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Campaign Management for Maximum Impact
              </h1>
              <div className="w-24 h-1 bg-blue-400 mb-6 mx-auto md:mx-0"></div>
              <p className="text-blue-200 text-lg mb-8">
                Strategic planning and execution to enhance your campaign’s reach, efficiency, and success.
              </p>

              <Link to="/join">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-10 py-4 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Image Content */}
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
                Our team of experienced campaign managers will help you develop and
                implement a winning strategy tailored to your specific goals and target
                audience.
              </p>
              <p className="text-slate-600">
                We take a data-driven approach to campaign management, focusing on
                measurable results and continuous optimization throughout your campaign.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h2>
              <p className="text-slate-600 mb-4">
                We believe in integrated campaign strategies that leverage multiple channels
                to effectively reach voters and communicate your message.
              </p>
              <p className="text-slate-600">
                Every aspect of your campaign is carefully planned and executed to align with
                your platform, values, and campaign objectives.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">What We Offer</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <img src={strategyIcon} alt="Strategy" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Strategic Planning</h3>
              <p className="text-slate-600">
                Development of comprehensive campaign strategies based on thorough
                research and analysis of your target demographics and political landscape.
              </p>
            </div>

            <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <img src={analyticsIcon} alt="Analytics" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Performance Tracking</h3>
              <p className="text-slate-600">
                Robust analytics and reporting systems to monitor campaign progress,
                measure impact, and make data-driven adjustments in real-time.
              </p>
            </div>

            <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <img src={communicationIcon} alt="Communication" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Message Development</h3>
              <p className="text-slate-600">
                Crafting compelling narratives and messaging frameworks that resonate
                with voters and effectively communicate your platform and values.
              </p>
            </div>

            <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <img src={eventIcon} alt="Events" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Event Coordination</h3>
              <p className="text-slate-600">
                Planning and execution of campaign events, town halls, debates,
                and fundraisers to maximize visibility and voter engagement.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Campaign Management Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Research & Analysis</h3>
                <p className="text-slate-600">Thorough analysis of political landscape, competitor strategies, and voter demographics.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Strategy Development</h3>
                <p className="text-slate-600">Creation of a comprehensive campaign strategy tailored to your specific goals.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Implementation</h3>
                <p className="text-slate-600">Professional management of all campaign elements and execution of strategies.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Monitoring & Optimization</h3>
                <p className="text-slate-600">Continuous tracking of campaign performance with regular analysis and adjustments.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Launch Your Campaign?</h2>
            <p className="text-blue-200 text-center mb-8 max-w-3xl mx-auto">
              Our team of experienced campaign managers is ready to help you develop and implement a winning strategy. Let's work together to achieve your campaign goals.
            </p>
            <div className="flex justify-center">
              <Link className="'/schedule-a-consultation">
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
          animation: fadeIn 1s forwards;
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default CampaignManagement;