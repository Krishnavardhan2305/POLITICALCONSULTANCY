import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import volunteerHero from "../assets/analytics.jpeg"; // Replace with your actual image path
import registrationIcon from "../assets/analytics.jpeg"; // Replace with your actual icon path
import schedulingIcon from "../assets/analytics.jpeg";
import taskIcon from "../assets/analytics.jpeg";
import trainingIcon from "../assets/analytics.jpeg";

const VolunteerPlatforms = () => {
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
          <span className="text-white">Volunteer Platforms</span>
        </div>

        {/* Hero Section */}
        <div ref={headingRef} className="mb-16 opacity-0 translate-y-10">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 p-12 rounded-lg shadow-2xl">

            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Energize Your Volunteer Network with Powerful Tools
              </h1>
              <div className="w-24 h-1 bg-blue-400 mb-6 mx-auto md:mx-0"></div>
              <p className="text-blue-200 text-lg mb-8">
                Streamline volunteer recruitment, event coordination, and task management to drive maximum engagement and campaign success.
              </p>

              <Link to="/join">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-10 py-4 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src={volunteerHero}
                alt="Volunteer Platform Tools"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>



        {/* Content Section */}
        <div ref={contentRef} className="bg-white rounded-xl shadow-xl p-8 md:p-12 opacity-0 translate-y-10">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Empower Your Volunteer Network</h2>
              <p className="text-slate-600 mb-4">
                Volunteers are the lifeblood of any successful political campaign. Our custom volunteer platforms provide the digital infrastructure you need to recruit, organize, and engage your supporter base effectively.
              </p>
              <p className="text-slate-600">
                Transform your supporters into effective advocates with seamless coordination tools, engagement strategies, and data-driven insights.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h2>
              <p className="text-slate-600 mb-4">
                We believe in building intuitive, user-friendly platforms that minimize training time and maximize volunteer productivity from day one.
              </p>
              <p className="text-slate-600">
                Every feature is designed with both campaign managers and volunteers in mind, creating a seamless experience that drives engagement and results.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">What We Offer</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <img src={registrationIcon} alt="Registration" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Volunteer Registration & Onboarding</h3>
              <p className="text-slate-600">
                Streamlined sign-up forms with customizable fields to collect relevant information. Automated onboarding emails and resources for new volunteers.
              </p>
            </div>

            <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <img src={schedulingIcon} alt="Scheduling" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Event Scheduling & Sign-ups</h3>
              <p className="text-slate-600">
                Interactive calendars with event details, volunteer requirements, and easy registration. Automatic reminders and attendance tracking.
              </p>
            </div>

            <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <img src={taskIcon} alt="Tasks" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Task Management System</h3>
              <p className="text-slate-600">
                Assign tasks to individuals or teams based on skills and availability. Track completion status and set priorities.
              </p>
            </div>

            <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <img src={trainingIcon} alt="Training" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Training Resources Hub</h3>
              <p className="text-slate-600">
                Centralized repository for training materials, videos, scripts, and best practices. Progress tracking for volunteer training.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Development Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Discovery & Planning</h3>
                <p className="text-slate-600">Analysis of your campaign's volunteer needs and existing processes.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">UX Design & Prototyping</h3>
                <p className="text-slate-600">Creation of intuitive interfaces tailored to both staff and volunteers.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Development & Integration</h3>
                <p className="text-slate-600">Building the platform with secure, scalable technology.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Launch & Support</h3>
                <p className="text-slate-600">Comprehensive training, launch assistance, and ongoing optimization.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Energize Your Volunteer Base?</h2>
            <p className="text-blue-200 text-center mb-8 max-w-3xl mx-auto">
              Let's build a volunteer platform that transforms supporters into effective advocates for your campaign. Our team is ready to create a customized solution tailored to your specific needs.
            </p>
            <div className="flex justify-center">
              <Link className='/schedule-a-consultation'>
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

export default VolunteerPlatforms;