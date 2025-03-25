import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../assets/SocialMedia.jpeg";

const SocialMediaManagement = () => {
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

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 to-blue-900 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 text-blue-200">
          <Link to="/" className="hover:text-white transition">Home</Link>

          <span className="mx-2">/</span>
          <span className="text-white">Social Media Management</span>
        </div>

        {/* Hero Section */}
        {/* Hero Section */}
        <div ref={headingRef} className="mb-16 opacity-0 translate-y-10">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 p-12 rounded-lg shadow-lg">

            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Elevate Your Social Media Game
              </h1>
              <div className="w-20 h-1 bg-blue-400 mb-6 mx-auto md:mx-0"></div>
              <p className="text-blue-200 text-lg mb-8">
                Leverage expert social media strategies designed to maximize your campaign's online visibility and engagement.
              </p>

              <Link to='/join'>
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-10 py-4 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <img
                src={SocialMedia}
                alt="Social Media Management"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>


        {/* Content Section */}
        <div ref={contentRef} className="bg-white rounded-xl shadow-xl p-8 md:p-12 opacity-0 translate-y-10">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Why Social Media Matters</h2>
              <p className="text-slate-600 mb-4">
                In today's digital age, a strong social media presence is crucial for political campaigns. It allows you to connect directly with voters, share your message, and build a community of supporters.
              </p>
              <p className="text-slate-600">
                Our team of social media experts specializes in political campaigns and understands the unique challenges and opportunities in this space.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h2>
              <p className="text-slate-600 mb-4">
                We take a data-driven approach to social media management, analyzing audience demographics, engagement patterns, and content performance to continuously optimize your strategy.
              </p>
              <p className="text-slate-600">
                Every post, tweet, and update is carefully crafted to align with your campaign message and resonate with your target audience.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">What We Offer</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Strategy Development</h3>
              <p className="text-slate-600">
                Custom social media strategies tailored to your campaign goals, target audience, and political landscape.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Content Creation</h3>
              <p className="text-slate-600">
                Professional content creation including graphics, videos, infographics, and engaging text that resonates with voters.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Analytics & Reporting</h3>
              <p className="text-slate-600">
                Regular detailed reports on performance metrics, audience growth, engagement rates, and strategic recommendations.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Community Management</h3>
              <p className="text-slate-600">
                Engagement with followers, responding to messages, and building a vibrant online community around your campaign.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Paid Advertising</h3>
              <p className="text-slate-600">
                Strategic paid social media campaigns to expand your reach, target specific demographics, and drive voter engagement.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg inline-block mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Crisis Management</h3>
              <p className="text-slate-600">
                Rapid response to media challenges, negative publicity, and unforeseen social media crises that could impact your campaign.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Discovery</h3>
                <p className="text-slate-600">Understanding your campaign goals, values, and target audience.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Strategy</h3>
                <p className="text-slate-600">Developing a tailored social media strategy aligned with your campaign objectives.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Implementation</h3>
                <p className="text-slate-600">Executing the strategy across all relevant social media platforms.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Analysis</h3>
                <p className="text-slate-600">Monitoring performance, making data-driven adjustments, and reporting results.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Transform Your Social Media Presence?</h2>
            <p className="text-blue-200 text-center mb-8 max-w-3xl mx-auto">
              Our team of social media experts is ready to help your campaign connect with voters and build a strong online community. Let's work together to craft a compelling social media strategy.
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

export default SocialMediaManagement;