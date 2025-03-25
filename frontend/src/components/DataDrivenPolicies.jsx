import React, { useState, useEffect, useRef } from "react";
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

  const stats = [
    { value: "87%", label: "Policy Adoption Rate" },
    { value: "56%", label: "Average Voter Approval Increase" },
    { value: "2.5x", label: "Higher Effectiveness Rate" },
    { value: "93%", label: "Client Satisfaction" },
  ];

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
        {/* Data-Driven Policies Section */}
        <div ref={headingRef} className="mb-16 opacity-0 translate-y-10">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 p-12 rounded-lg shadow-2xl">

            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Data-Driven Policies
              </h1>
              <div className="w-24 h-1 bg-blue-400 mb-6 mx-auto md:mx-0"></div>
              <p className="text-blue-200 text-lg mb-8">
                Transform insights into effective policy initiatives that resonate with your constituents.
              </p>

              <Link to="/join">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-10 py-4 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
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
                Our team of policy experts and data analysts work together to create
                evidence-based policy recommendations that address real constituent needs
                and deliver measurable results.
              </p>
              <p className="text-slate-600">
                We take a data-driven approach to policy development, focusing on
                measurable outcomes and continuous improvement.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h2>
              <p className="text-slate-600 mb-4">
                We believe in integrated policy strategies that leverage data insights
                to effectively address constituent needs and concerns.
              </p>
              <p className="text-slate-600">
                Every aspect of your policy development is carefully researched and planned
                to align with your platform, values, and objectives.
              </p>
            </div>
          </div>

          {/* Stats */}
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Results That Speak</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700"
              >
                <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4 text-xl font-bold">
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{stat.label}</h3>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Our Data-Driven Policy Process</h2>

          <div className="flex flex-wrap justify-center mb-8">
            <button
              className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === "research"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              onClick={() => setActiveTab("research")}
            >
              Research
            </button>
            <button
              className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === "analysis"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              onClick={() => setActiveTab("analysis")}
            >
              Analysis
            </button>
            <button
              className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === "development"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              onClick={() => setActiveTab("development")}
            >
              Development
            </button>
            <button
              className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === "implementation"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              onClick={() => setActiveTab("implementation")}
            >
              Implementation
            </button>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg shadow-md feature-item opacity-0 transform translate-y-8 transition-all duration-700 mb-12">
            {activeTab === "research" && (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                    <img src={researchIcon} alt="Research" className="w-6 h-6" />
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Comprehensive Research</h3>
                  <p className="text-slate-600 mb-4">
                    We begin by gathering robust data on your constituency, including demographics,
                    economic indicators, public opinion, and historical voting patterns.
                  </p>
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>Demographic analysis and voter segmentation</li>
                    <li>Economic and social indicators assessment</li>
                    <li>Public opinion polling and focus groups</li>
                    <li>Historical voting pattern analysis</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "analysis" && (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                    <img src={analyticsIcon} alt="Analysis" className="w-6 h-6" />
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Data Analysis & Insights</h3>
                  <p className="text-slate-600 mb-4">
                    Our team of data scientists and policy analysts examine the data to identify
                    patterns, needs, and opportunities that inform effective policy creation.
                  </p>
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>Advanced statistical analysis</li>
                    <li>Predictive modeling and scenario planning</li>
                    <li>Comparative analysis with similar jurisdictions</li>
                    <li>Cost-benefit analysis of potential initiatives</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "development" && (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                    <img src={strategyIcon} alt="Development" className="w-6 h-6" />
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Policy Development</h3>
                  <p className="text-slate-600 mb-4">
                    Based on our research and analysis, we develop comprehensive policy
                    recommendations tailored to your specific goals and constituent needs.
                  </p>
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>Evidence-based policy frameworks</li>
                    <li>Stakeholder impact assessment</li>
                    <li>Implementation roadmaps with clear milestones</li>
                    <li>Messaging and communication strategies</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "implementation" && (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                    <img src={implementationIcon} alt="Implementation" className="w-6 h-6" />
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Implementation & Monitoring</h3>
                  <p className="text-slate-600 mb-4">
                    We provide ongoing support throughout the implementation process,
                    tracking key metrics to ensure your policies deliver the intended results.
                  </p>
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>Implementation strategy and timeline</li>
                    <li>Performance tracking and KPI dashboards</li>
                    <li>Continuous feedback assessment</li>
                    <li>Adaptive strategy refinement</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Case Studies */}
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Case Studies</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <div className="text-xl font-bold">01</div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Rural Economic Development</h3>
              <p className="text-slate-600">
                Data-driven policy recommendations that led to a 28% increase in small business
                formation and a 15% rise in employment in rural counties.
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
                Evidence-based policy framework that improved graduation rates by 23% and
                college enrollment by 18% in targeted school districts.
              </p>
              <a href="#" className="text-blue-600 font-semibold flex items-center group mt-4">
                Read Case Study
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* CTA */}
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

export default DataDrivenPolicies;