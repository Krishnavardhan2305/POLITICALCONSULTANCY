import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const mapRef = useRef(null);
  const faqRef = useRef(null);
  const popupRef = useRef(null);

  const faqData = [
    {
      question: "What makes JKR different from other consultancies?",
      answer: "We combine digital expertise with on-the-ground campaign strategies. Our integrated approach covers social media management, data-driven policies, and campaign management, delivering measurable results through tailored solutions that create consistent messaging across all platforms."
    },
    {
      question: "How soon can you start working on my campaign?",
      answer: "We can begin immediately after our initial consultation. Our streamlined process allows rapid deployment of social media management, campaign strategies, and software solutions tailored to your timeline and goals. We understand political campaigns are time-sensitive and respond accordingly."
    },
    {
      question: "Do you work with candidates from all political parties?",
      answer: "Yes, we work with candidates across the political spectrum. Our services—from social media management to door-to-door campaigns and volunteer platforms—can be customized to align with your specific values, constituent needs, and campaign objectives."
    },
    {
      question: "What kind of results can I expect?",
      answer: "Our clients see improved voter engagement across multiple channels. You'll gain increased social media presence, better constituent connections through door-to-door campaigns, more resonant messaging with data-driven policies, and streamlined operations via our software services and volunteer platforms."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We track specific metrics for each service: engagement rates for social media, voter response for campaign management, constituent feedback for policy work, conversion metrics for door-to-door efforts, and efficiency improvements for software services and volunteer platforms."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          
          // Animate header
          if (headerRef.current) {
            headerRef.current.classList.add('animate-in');
          }
          
          // Animate cards with sequential delay
          if (cardsRef.current) {
            const cards = cardsRef.current.children;
            Array.from(cards).forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, 200 + (index * 150));
            });
          }
          
          // Animate map section
          if (mapRef.current) {
            setTimeout(() => {
              mapRef.current.classList.add('animate-in');
            }, 600);
          }
          
          // Animate FAQ section
          if (faqRef.current) {
            setTimeout(() => {
              faqRef.current.classList.add('animate-in');
            }, 800);
          }
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Close popup when clicking outside
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActiveQuestion(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle FAQ answer visibility
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div ref={sectionRef} className="bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Contact Header with Animation */}
        <div ref={headerRef} className="text-center opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl text-slate-800 text-center font-bold mb-4 relative">
            <span className="border-b-4 border-blue-600 pb-2 inline-block transition-all duration-500 hover:border-blue-800">
              CONTACT US
            </span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            Ready to transform your campaign strategy? Our team of experts is here to help you achieve your political goals.
          </p>
        </div>

        {/* Contact Cards with Animation Similar to AboutUs */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>,
              title: "Phone",
              content: "+91 630 156 7773"
            },
            {
              icon: <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>,
              title: "Email",
              content: "jkrconsultancyinfo@gmail.com"
            },
            {
              icon: <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>,
              title: "Office Hours",
              content: <>
                <p className="text-slate-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                <p className="text-slate-600">Sat - Sun: Closed</p>
              </>
            }
          ].map((card, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-500 border-t-4 border-blue-600 opacity-0 translate-y-10 hover:shadow-xl">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6 hover:bg-blue-200 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
              {typeof card.content === 'string' ? (
                <p className="text-blue-600 text-lg">{card.content}</p>
              ) : (
                card.content
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch mt-16">
          {/* Map Section with Animation */}
          <div ref={mapRef} className="flex-1 opacity-0 translate-x-[-50px] transition-all duration-1000">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <div className="bg-slate-200 h-64 md:h-96 rounded-t-lg overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15140.930068066422!2d82.21901876977536!3d17.23129572939147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39d5e3b103ff51%3A0x758e8340d1d50c90!2sDharmavaram%2C%20Andhra%20Pradesh%20533430!5e0!3m2!1sen!2sin!4v1711133795761!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dharmavaram, Andhra Pradesh, India"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Visit Our Office</h3>
                <p className="text-slate-600">
                  JKR Consultancy 
                  <br />
                  Dharmavaram
                  <br />
                  Prathipadu Mandal, Kakinada District<br />
                  Andhra Pradesh, 533004<br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section with Animation */}
          <div ref={faqRef} className="flex-1 opacity-0 translate-y-10 transition-all duration-700">
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-lg shadow-xl h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqData.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between p-4 bg-white bg-opacity-10 rounded-lg cursor-pointer hover:bg-opacity-20 transition-all duration-300"
                    onClick={() => toggleQuestion(idx)}
                  >
                    <p className="font-medium">{faq.question}</p>
                    <svg className={`h-5 w-5 transform transition-transform duration-300 ${activeQuestion === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-white font-medium flex items-center group">
                View all FAQs
                <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Answer Popup */}
      {activeQuestion !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div 
            ref={popupRef}
            className="bg-white rounded-lg shadow-2xl p-6 max-w-lg w-full animate-fadeIn"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-800 pr-6">{faqData[activeQuestion].question}</h3>
              <button 
                onClick={() => setActiveQuestion(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-slate-600">
              <p className="leading-relaxed">{faqData[activeQuestion].answer}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setActiveQuestion(null)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* CSS Animations */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;