import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { ADMIN_API_ENDPOINT } from "../utils/constant";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Join = () => {
  const navigate = useNavigate();

  // State for form data and loading indicator
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    constituency: "",
    village: "",
    mobilenum: "",
    emailId: "",
    inPower: false,
    politicalparty: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input change for all form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata({ ...formdata, [name]: type === "checkbox" ? checked : value });
  };

  // Validate email format using a regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    if (formdata.emailId && !isValidEmail(formdata.emailId)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true); // Show loading indicator

    try {
      const response = await axios.post(`${ADMIN_API_ENDPOINT}/clients`, formdata, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        toast.success("Our Admin Will Soon Reach You. Thank You");
        navigate("/");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] px-4 py-6 overflow-hidden relative">
      {/* Background image and gradient */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('/images/constitution-background.jpg')` }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/95 via-[#0f172a]/85 to-[#0f172a]/90 z-0"></div>

      {/* Home button with animation */}
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] px-3 py-1.5 rounded-lg z-10 text-white text-sm font-semibold shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={16} />
        Home
      </motion.button>

      {/* Form with animation */}
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md shadow-2xl rounded-xl p-4 md:p-8 w-full max-w-lg border border-white/20 z-10 mb-4"
      >
        <div className="grid gap-4">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full bg-transparent border border-gray-300 rounded-lg p-2 text-white focus:ring focus:ring-blue-500"
            required
          />

          {/* Age Input */}
          <input
            type="number"
            name="age"
            value={formdata.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full bg-transparent border border-gray-300 rounded-lg p-2 text-white"
            required
          />

          {/* Constituency Input */}
          <input
            type="text"
            name="constituency"
            value={formdata.constituency}
            onChange={handleChange}
            placeholder="Constituency"
            className="w-full bg-transparent border border-gray-300 rounded-lg p-2 text-white"
          />

          {/* Village Input */}
          <input
            type="text"
            name="village"
            value={formdata.village}
            onChange={handleChange}
            placeholder="Village"
            className="w-full bg-transparent border border-gray-300 rounded-lg p-2 text-white"
          />

          {/* Mobile Number Input */}
          <input
            type="tel"
            name="mobilenum"
            value={formdata.mobilenum}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="w-full bg-transparent border border-gray-300 rounded-lg p-2 text-white"
          />

          {/* Email ID Input */}
          <input
            type="email"
            name="emailId"
            value={formdata.emailId}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full bg-transparent border border-gray-300 rounded-lg p-2 text-white"
          />

          {/* Checkbox for "In Power" */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="inPower"
              checked={formdata.inPower}
              onChange={handleChange}
              className="h-4 w-4 text-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="inPower" className="text-white">
              Are you in power?
            </label>
          </div>

          {/* Political Party Input */}
          <input
            type="text"
            name="politicalparty"
            value={formdata.politicalparty}
            onChange={handleChange}
            placeholder="Political Party"
            className="w-full bg-transparent border border-gray-300 rounded-lg p-2 text-white"
          />
        </div>

        {/* Submit Button with loading state */}
        <motion.div className="mt-4 md:mt-6" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.3, duration: 0.4 }}>
          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 shadow-lg ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-[#3b82f6] to-[#2563eb]"
            }`}
            whileHover={!loading && { scale: 1.02, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
            whileTap={!loading && { scale: 0.98 }}
          >
            {loading ? "Submitting..." : "JOIN NOW"}
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Join;
