import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ADMIN_API_ENDPOINT } from '../utils/constant';

const Reviews = () => {
  const testimonials = [
    { id: 1, quote: "JKR Consultancy transformed our campaign strategy completely.", author: "Coming Soon", position: "Campaign Manager", color: "bg-blue-600" },
    { id: 2, quote: "Working with JKR has been a game-changer for our political movement.", author: "Coming Soon", position: "Party Leader", color: "bg-indigo-600" },
    { id: 3, quote: "The team at JKR provided us with expert guidance throughout our campaign.", author: "Coming Soon", position: "Elected Official", color: "bg-purple-600" },
    { id: 4, quote: "JKR's consultancy services were crucial in organizing our grassroots movement.", author: "Coming Soon", position: "Activist", color: "bg-green-600" }
  ];

  const [selectedReviews, setSelectedReviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelectReview = (reviewId) => {
    if (selectedReviews.includes(reviewId)) {
      setSelectedReviews(selectedReviews.filter((id) => id !== reviewId));
    } else {
      if (selectedReviews.length < 3) {
        setSelectedReviews([...selectedReviews, reviewId]);
      }
    }
  };

  const isSelected = (reviewId) => selectedReviews.includes(reviewId);

  const submitHandler = async () => {
    console.log(selectedReviews);
  };
  
  

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 w-full bg-gray-800 py-4 px-8 flex justify-between items-center shadow-md">
        <Link className="text-3xl font-bold flex items-center">
          <span className="text-blue-500 hover:text-blue-400 hover:scale-110 transition-transform">JKR</span>
          <span className="ml-2 hover:text-blue-400 hover:scale-110 transition-transform">CONSULTANCY</span>
        </Link>
        <div className="flex gap-6">
          <Link to="/admin-dashboard" className="hover:text-blue-400 transition text-white font-bold">
            See Clients
          </Link>
        </div>
      </div>
      <div className="py-10 px-4">
        <h1 className="text-4xl text-white font-extrabold text-center mb-8">Manage Reviews</h1>
        <p className="text-gray-300 text-center mb-6 text-lg">
          Select up to 3 reviews to display on the home page.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className={`p-6 rounded-lg shadow-lg ${review.color} text-white relative 
                hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl`}
            >
              <p className="mb-4 italic">"{review.quote}"</p>
              <p className="font-semibold">{review.author}</p>
              <p className="text-sm">{review.position}</p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleSelectReview(review.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full 
                    ${isSelected(review.id) ? "bg-red-500 hover:bg-red-700" : "bg-gray-800 hover:bg-gray-700"}
                    hover:scale-105 transition-transform duration-300 ease-in-out
                  `}
                >
                  {isSelected(review.id) ? "Deselect" : "Select"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-white font-bold mb-4">Selected Reviews</h2>
          {selectedReviews.length > 0 ? (
            <ul className="space-y-3">
              {selectedReviews.map((id) => {
                const review = testimonials.find((r) => r.id === id);
                return (
                  <li key={review.id} className="bg-gray-700 p-4 rounded-md shadow-md">
                    <p className="text-white">{review.quote}</p>
                    <p className="text-sm text-gray-300">
                      {review.author} - {review.position}
                    </p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-gray-400 text-center">No reviews selected yet.</p>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={submitHandler}
            className={`px-6 py-3 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 
            transition-transform duration-300 ease-in-out ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Display Selected Reviews on Home Page"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
