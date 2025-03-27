import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { ADMIN_API_ENDPOINT } from "../utils/constant";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Join = () => {
  const navigate = useNavigate();
  const[loading,setLoading]=useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    constituency: "",
    village: "",
    mobilenum: "",
    emailId: "",
    inPower: false,
    politicalparty: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata({ ...formdata, [name]: type === "checkbox" ? checked : value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formdata.emailId && !isValidEmail(formdata.emailId)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${ADMIN_API_ENDPOINT}/clients`, formdata, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        toast.success("Our Admin Will Soon Reach You. Thank You");
        navigate("/");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] px-4 py-6 overflow-hidden relative">
      {/* Background and overlay remain the same */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/images/constitution-background.jpg')`,
          backgroundSize: 'cover',
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/95 via-[#0f172a]/85 to-[#0f172a]/90 z-0"></div>

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

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center z-10 mb-4"
      >
        <h1 className="text-xl md:text-2xl font-bold text-white mb-2">JOIN WITH US</h1>
        <div className="h-1 w-24 md:w-32 bg-[#60a5fa] mx-auto mb-2"></div>
      </motion.div>

      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md shadow-2xl rounded-xl p-4 md:p-8 w-full max-w-lg border border-white/20 z-10 mb-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {/* Name Input */}
          <motion.div 
            className="mb-2 md:mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <label className="block text-xs md:text-sm font-medium text-gray-200 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleChange}
              className="border border-gray-600 bg-[#1e293b] p-2 md:p-2.5 rounded-lg w-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400"
              required
              placeholder="Your full name"
            />
          </motion.div>

          {/* Age Input */}
          <motion.div 
            className="mb-2 md:mb-3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <label className="block text-xs md:text-sm font-medium text-gray-200 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formdata.age}
              onChange={handleChange}
              className="border border-gray-600 bg-[#1e293b] p-2 md:p-2.5 rounded-lg w-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400"
              required
              placeholder="Your age"
            />
          </motion.div>
        </div>

        {/* Constituency and Village */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <motion.div 
            className="mb-2 md:mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <label className="block text-xs md:text-sm font-medium text-gray-200 mb-1">
              Constituency
            </label>
            <input
              type="text"
              name="constituency"
              value={formdata.constituency}
              onChange={handleChange}
              className="border border-gray-600 bg-[#1e293b] p-2 md:p-2.5 rounded-lg w-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400"
              required
              placeholder="Your constituency"
            />
          </motion.div>

          <motion.div 
            className="mb-2 md:mb-3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <label className="block text-xs md:text-sm font-medium text-gray-200 mb-1">
              Village (Optional)
            </label>
            <input
              type="text"
              name="village"
              value={formdata.village}
              onChange={handleChange}
              className="border border-gray-600 bg-[#1e293b] p-2 md:p-2.5 rounded-lg w-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400"
              placeholder="Your village"
            />
          </motion.div>
        </div>

        {/* Mobile and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <motion.div 
            className="mb-2 md:mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <label className="block text-xs md:text-sm font-medium text-gray-200 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobilenum"
              value={formdata.mobilenum}
              onChange={handleChange}
              className="border border-gray-600 bg-[#1e293b] p-2 md:p-2.5 rounded-lg w-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400"
              required
              placeholder="Your mobile number"
            />
          </motion.div>

          <motion.div 
            className="mb-2 md:mb-3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <label className="block text-xs md:text-sm font-medium text-gray-200 mb-1">
              Email ID (Optional)
            </label>
            <input
              type="email"
              name="emailId"
              value={formdata.emailId}
              onChange={handleChange}
              className="border border-gray-600 bg-[#1e293b] p-2 md:p-2.5 rounded-lg w-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email address"
              placeholder="Your email address"
            />
          </motion.div>
        </div>

        {/* Political Party */}
        <motion.div 
          className="mb-2 md:mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          <label className="block text-xs md:text-sm font-medium text-gray-200 mb-1">
            Political Party
          </label>
          <input
            type="text"
            name="politicalparty"
            value={formdata.politicalparty}
            onChange={handleChange}
            className="border border-gray-600 bg-[#1e293b] p-2 md:p-2.5 rounded-lg w-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400"
            required
            placeholder="Your political party"
          />
        </motion.div>

        {/* In Power Checkbox */}
        <motion.div 
          className="mb-3 flex items-center gap-2 bg-[#1e293b] p-2 md:p-3 rounded-lg border border-gray-600"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          whileHover={{ backgroundColor: "#263548" }}
        >
          <input
            type="checkbox"
            name="inPower"
            checked={formdata.inPower}
            onChange={handleChange}
            className="h-4 w-4 md:h-5 md:w-5 text-[#3b82f6] rounded focus:ring-2 focus:ring-[#3b82f6] bg-gray-700 border-gray-600"
          />
          <label className="text-xs md:text-sm font-medium text-gray-200">
            Currently In Power?
          </label>
        </motion.div>

        {/* Submit Button */}
        <motion.div 
          className="mt-4 md:mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.4 }}
        >
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            {
              loading?"Please Wait":"Join Now"
            }
          </motion.button>
        </motion.div>
      </motion.form>

      {/* Rest of the decorative elements remain the same */}
    </div>
  );
};

export default Join;