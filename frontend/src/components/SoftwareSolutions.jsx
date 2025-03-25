import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// import softwareHero from "../assets/SoftwareHero.jpeg"; // You'll need this hero image
import Software from "../assets/Software.jpeg"; // Reusing from your services component
import customSoftware from "../assets/analytics.jpeg"; // You'll need these additional images
import dataAnalytics from "../assets/analytics.jpeg";
import automationSoftware from "../assets/analytics.jpeg";
import votingSystem from "../assets/analytics.jpeg";

const SoftwareSolutions = () => {
  const [activeTab, setActiveTab] = useState("custom");
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

  const softwareOptions = [
    {
      id: "custom",
      title: "Custom Software Development",
      image: customSoftware,
      description: "Tailored software solutions built specifically for your campaign's unique needs. From donor management to voter outreach tracking, we create intuitive systems that optimize your operations.",
      features: [
        "Campaign-specific database solutions",
        "Custom CRM systems for donor and volunteer management",
        "Secure voting and polling applications",
        "Mobile apps for field operations"
      ]
    },
    {
      id: "analytics",
      title: "Data Analytics Platforms",
      image: dataAnalytics,
      description: "Transform raw data into actionable insights with our powerful analytics platforms. Understand voter behavior, track campaign performance, and make data-driven decisions with ease.",
      features: [
        "Voter behavior analysis dashboards",
        "Geographic information mapping",
        "Demographic targeting tools",
        "Campaign effectiveness metrics"
      ]
    },
    {
      id: "automation",
      title: "Workflow Automation",
      image: automationSoftware,
      description: "Streamline repetitive tasks and increase productivity with our automation solutions. Free up your team to focus on strategic activities while routine processes run seamlessly in the background.",
      features: [
        "Email and communication automation",
        "Donation processing systems",
        "Document generation and management",
        "Scheduling and calendar optimization"
      ]
    },
    {
      id: "voting",
      title: "Secure Voting Systems",
      image: votingSystem,
      description: "Implement transparent and secure voting processes with our certified digital voting solutions. Perfect for internal party elections, primaries, and polling operations.",
      features: [
        "End-to-end encrypted voting",
        "Verification and authentication protocols",
        "Real-time results tabulation",
        "Audit trails and reporting"
      ]
    }
  ];

  const activeOption = softwareOptions.find(option => option.id === activeTab);

  return (
    <div className="bg-gradient-to-b from-slate-900 to-blue-900 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 text-blue-200">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Software Solutions</span>
        </div>

        {/* Hero Section */}
        {/* Hero Section */}
        <div ref={headingRef} className="mb-16 opacity-0 translate-y-10">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 p-12 rounded-lg shadow-2xl">

            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Transform Your Campaign with Innovative Software Solutions
              </h1>
              <div className="w-24 h-1 bg-blue-400 mb-6 mx-auto md:mx-0"></div>
              <p className="text-blue-200 text-lg mb-8">
                Leverage our custom software services to streamline operations, analyze data, and maximize voter outreach with cutting-edge digital tools.
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
                src={Software}
                alt="Software Solutions"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>


        {/* Content Section */}
        <div ref={contentRef} className="bg-white rounded-xl shadow-xl p-8 md:p-12 opacity-0 translate-y-10">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Powerful Software For Political Success</h2>
              <p className="text-slate-600 mb-4">
                Our team of experienced developers creates custom software solutions
                specifically designed for political campaigns and organizations.
              </p>
              <p className="text-slate-600">
                From voter outreach to data analysis, we provide the tools you need
                to succeed in today's digital political landscape.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h2>
              <p className="text-slate-600 mb-4">
                We combine cutting-edge technology with deep political expertise to
                deliver software that addresses your unique campaign challenges.
              </p>
              <p className="text-slate-600">
                Every solution we develop is secure, scalable, and built with your
                specific requirements in mind.
              </p>
            </div>
          </div>

          {/* Software Options Navigation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Our Software Solutions</h2>

            <div className="flex flex-wrap border-b mb-8">
              {softwareOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveTab(option.id)}
                  className={`px-6 py-4 text-lg font-medium transition-colors duration-300 ${activeTab === option.id
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

          {/* What We Offer Section */}
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">What We Offer</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {softwareOptions.map((option, index) => (
              <div key={option.id} className="feature-item bg-blue-50 p-6 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700">
                <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                  <img src={option.image} alt={option.title} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{option.title}</h3>
                <p className="text-slate-600">{option.description}</p>
              </div>
            ))}
          </div>

          {/* Development Process Section */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Development Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Discovery</h3>
                <p className="text-slate-600">We analyze your campaign needs and goals to define the scope of your software solution.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Design</h3>
                <p className="text-slate-600">Our team creates intuitive user interfaces and robust system architecture tailored to your requirements.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Development</h3>
                <p className="text-slate-600">We build your custom solution using modern technologies and best practices in software development.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Deployment</h3>
                <p className="text-slate-600">We implement, test, and launch your software with comprehensive training and ongoing support.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Transform Your Campaign with Custom Software?</h2>
            <p className="text-blue-200 text-center mb-8 max-w-3xl mx-auto">
              Our development team is ready to help you create software solutions that give your campaign the technological edge it needs. Let's discuss your requirements today.
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

export default SoftwareSolutions;