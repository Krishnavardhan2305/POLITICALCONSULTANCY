import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import doorCampaign from "../assets/DoorCampaign.jpeg";

const DoorToDoorCampaigns = () => {
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

  const features = [
    {
      title: "Targeted Voter Outreach",
      description: "Identify and engage with high-value voters in specific districts using demographic data and voting history.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      )
    },
    {
      title: "Custom Survey Creation",
      description: "Design personalized questionnaires to gather valuable insights on voter preferences and concerns.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      )
    },
    {
      title: "Real-time Data Collection",
      description: "Capture responses instantly with our mobile app, allowing for immediate data analysis and campaign adjustments.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
        </svg>
      )
    },
    {
      title: "Volunteer Training",
      description: "Comprehensive training materials and sessions to prepare your canvassing team for effective voter engagement.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      )
    }
  ];

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
        {/* Hero Section */}
        <div ref={headingRef} className="mb-16 opacity-0 translate-y-10">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 p-12 rounded-lg shadow-2xl">

            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Door-to-Door Campaigns
              </h1>
              <div className="w-24 h-1 bg-blue-400 mb-6 mx-auto md:mx-0"></div>
              <p className="text-blue-200 text-lg mb-8">
                Connect with voters personally through targeted outreach and data-driven canvassing strategies.
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
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Comprehensive Door-to-Door Strategy</h2>
              <p className="text-slate-600 mb-4">
                Our team of experienced campaign specialists will help you develop and
                implement effective door-to-door strategies tailored to your specific goals and target
                voters.
              </p>
              <p className="text-slate-600">
                We take a data-driven approach to canvassing, focusing on
                measurable results and continuous optimization throughout your campaign.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h2>
              <p className="text-slate-600 mb-4">
                We believe in personalized voter engagement that creates lasting connections
                and effectively communicates your message at the doorstep.
              </p>
              <p className="text-slate-600">
                Every aspect of your door-to-door campaign is carefully planned and executed to align with
                your platform, values, and campaign objectives.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">What We Offer</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
                <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Door-to-Door Campaign Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Planning & Strategy</h3>
                <p className="text-slate-600">Development of targeted canvassing strategies based on voter demographics and history.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Training & Preparation</h3>
                <p className="text-slate-600">Comprehensive training and materials for all canvassing team members.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Implementation</h3>
                <p className="text-slate-600">Professional management of all canvassing activities with real-time monitoring.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Data Analysis</h3>
                <p className="text-slate-600">Comprehensive analysis of collected data with strategic recommendations.</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Data-Driven Decisions</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Custom Survey Design</h3>
                <p className="text-slate-600">
                  Professionally designed surveys based on your campaign goals and tailored to extract the most valuable information from each voter interaction.
                </p>
              </div>

              <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Real-time Collection</h3>
                <p className="text-slate-600">
                  Capture voter responses instantly with our mobile application, allowing for immediate data analysis and campaign strategy adjustments.
                </p>
              </div>

              <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Interactive Analytics</h3>
                <p className="text-slate-600">
                  Access comprehensive analytics dashboards that visualize voter data, identify trends, and highlight areas requiring attention.
                </p>
              </div>

              <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Strategic Recommendations</h3>
                <p className="text-slate-600">
                  Receive data-backed strategic recommendations to refine your messaging, resource allocation, and campaign focus.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Proven Results</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md text-center opacity-0 transform translate-y-8 transition-all duration-700">
                <div className="text-4xl font-bold text-blue-600 mb-2">24%</div>
                <p className="text-slate-700">Average increase in voter engagement</p>
              </div>
              <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md text-center opacity-0 transform translate-y-8 transition-all duration-700">
                <div className="text-4xl font-bold text-blue-600 mb-2">15k+</div>
                <p className="text-slate-700">Doors knocked in the average campaign</p>
              </div>
              <div className="feature-item bg-blue-50 p-6 rounded-lg shadow-md text-center opacity-0 transform translate-y-8 transition-all duration-700">
                <div className="text-4xl font-bold text-blue-600 mb-2">82%</div>
                <p className="text-slate-700">Client campaigns achieved their goals</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Connect with Voters?</h2>
            <p className="text-blue-200 text-center mb-8 max-w-3xl mx-auto">
              Let our expert team help you design and implement an effective door-to-door campaign strategy tailored to your specific goals.
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

export default DoorToDoorCampaigns;