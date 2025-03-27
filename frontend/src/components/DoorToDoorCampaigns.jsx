import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import dataHero from "../assets/analytics.jpeg"; // Replace with your actual image path
import researchIcon from "../assets/analytics.jpeg"; // Replace with your actual icon paths
import analyticsIcon from "../assets/analytics.jpeg";
import strategyIcon from "../assets/analytics.jpeg";
import implementationIcon from "../assets/analytics.jpeg";

const DataDrivenPolicies = () => {
  const [activeTab, setActiveTab] = useState("research");
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

  const policyProcessOptions = [
    {
      id: "research",
      title: "Comprehensive Research",
      description: "We begin by gathering robust data on your constituency, including demographics, economic indicators, public opinion, and historical voting patterns.",
      features: [
        "Demographic analysis and voter segmentation",
        "Economic and social indicators assessment",
        "Public opinion polling and focus groups",
        "Historical voting pattern analysis"
      ],
      icon: researchIcon
    },
    {
      id: "analysis",
      title: "Data Analysis & Insights",
      description: "Our team of data scientists and policy analysts examine the data to identify patterns, needs, and opportunities that inform effective policy creation.",
      features: [
        "Advanced statistical analysis",
        "Predictive modeling and scenario planning",
        "Comparative analysis with similar jurisdictions",
        "Cost-benefit analysis of potential initiatives"
      ],
      icon: analyticsIcon
    },
    {
      id: "development",
      title: "Policy Development",
      description: "Based on our research and analysis, we develop comprehensive policy recommendations tailored to your specific goals and constituent needs.",
      features: [
        "Evidence-based policy frameworks",
        "Stakeholder impact assessment",
        "Implementation roadmaps with clear milestones",
        "Messaging and communication strategies"
      ],
      icon: strategyIcon
    }
  ];

  const activeOption = policyProcessOptions.find(option => option.id === activeTab);

  return (
    <div className="bg-gradient-to-b from-slate-900 to-blue-900 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 text-blue-200">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Data-Driven Policies</span>
        </div>

        {/* Hero Section */}
        <div ref={headingRef} className="mb-16 opacity-0 translate-y-10">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 p-12 rounded-lg shadow-2xl">
            {/* Text Content */}
            <div className="md:w-3/4 lg:w-1/2 text-center md:text-left bg-slate-900/70 p-8 rounded-xl border border-blue-900/30 shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight background-clip-text">
                Transform Insights into Effective Policies
              </h1>
              <div className="w-20 h-1.5 bg-blue-500 mb-6 mx-auto md:mx-0 rounded-full"></div>
              <p className="text-blue-100 text-lg mb-8 opacity-90">
                Leverage data-driven strategies to create policies that truly address your constituents' needs and drive meaningful change.
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
                src={dataHero}
                alt="Data-Driven Policies"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div ref={contentRef} className="bg-white rounded-xl shadow-xl p-8 md:p-12 opacity-0 translate-y-10">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Data-Informed Policy Development</h2>
              <p className="text-slate-600 mb-4">
                Our policy experts and data analysts work together to craft practical solutions that truly address people's needs.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h2>
              <p className="text-slate-600 mb-4">
                We use data-driven strategies to create policies that align with your vision and deliver real results.
              </p>
            </div>
          </div>

          {/* Policy Process Navigation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Our Policy Development Process</h2>
            
            <div className="flex justify-center border-b mb-8">
              {policyProcessOptions.map((option) => (
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
                  src={activeOption.icon}
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

          {/* Case Studies */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <div className="text-xl font-bold">01</div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Rural Economic Development</h3>
              <p className="text-slate-600">
                Data-driven policy recommendations that led to a 28% increase in small business formation and a 15% rise in employment in rural counties.
              </p>
              <a href="#" className="text-blue-600 font-semibold flex items-center group mt-4">
                Read Case Study
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <div className="text-xl font-bold">02</div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Education Reform Initiative</h3>
              <p className="text-slate-600">
                Evidence-based policy framework that improved graduation rates by 23% and college enrollment by 18% in targeted school districts.
              </p>
              <a href="#" className="text-blue-600 font-semibold flex items-center group mt-4">
                Read Case Study
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Transform Your Policy Approach?</h2>
            <p className="text-blue-200 text-center mb-8 max-w-3xl mx-auto">
              Let our team of experts help you develop data-driven policies that address your constituents' needs and drive measurable results.
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

        .tab-transition {
          transition: all 0.3s ease-in-out;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .background-animate {
          background-size: 400% 400%;
          animation: gradientFlow 15s ease infinite;
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default DataDrivenPolicies;
