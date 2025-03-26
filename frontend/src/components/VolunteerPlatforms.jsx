import React, { useEffect, useRef, useState } from 'react';
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
            <div className="md:w-3/4 lg:w-1/2 text-center md:text-left bg-slate-900/70 p-8 rounded-xl border border-blue-900/30 shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight background-clip-text">
                Energize Your Volunteer Network with Powerful Tools
              </h1>
              <div className="w-20 h-1.5 bg-blue-500 mb-6 mx-auto md:mx-0 rounded-full"></div>
              <p className="text-blue-100 text-lg mb-8 opacity-90">
                Streamline volunteer recruitment, event coordination, and task management to drive maximum engagement and campaign success.
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
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h2>
              <p className="text-slate-600 mb-4">
                We believe in building intuitive, user-friendly platforms that minimize training time and maximize volunteer productivity from day one.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">What We Offer</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: registrationIcon,
                title: "Volunteer Registration & Onboarding",
                description: "Streamlined sign-up forms with customizable fields to collect relevant information. Automated onboarding emails and resources for new volunteers."
              },
              {
                icon: schedulingIcon,
                title: "Event Scheduling & Sign-ups",
                description: "Interactive calendars with event details, volunteer requirements, and easy registration. Automatic reminders and attendance tracking."
              },
              {
                icon: taskIcon,
                title: "Task Management System",
                description: "Assign tasks to individuals or teams based on skills and availability. Track completion status and set priorities."
              },
              {
                icon: trainingIcon,
                title: "Training Resources Hub",
                description: "Centralized repository for training materials, videos, scripts, and best practices. Progress tracking for volunteer training."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700 hover-lift"
              >
                <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                  <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Development Process Section */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Development Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: "1", title: "Discovery & Planning", description: "Analysis of your campaign's volunteer needs and existing processes." },
                { number: "2", title: "UX Design & Prototyping", description: "Creation of intuitive interfaces tailored to both staff and volunteers." },
                { number: "3", title: "Development & Integration", description: "Building the platform with secure, scalable technology." },
                { number: "4", title: "Launch & Support", description: "Comprehensive training, launch assistance, and ongoing optimization." }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Energize Your Volunteer Base?</h2>
            <p className="text-blue-200 text-center mb-8 max-w-3xl mx-auto">
              Let's build a volunteer platform that transforms supporters into effective advocates for your campaign. Our team is ready to create a customized solution tailored to your specific needs.
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

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default VolunteerPlatforms;