import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { ADMIN_API_ENDPOINT } from "../utils/constant";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ScheduleConsultation = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    constituency: "",
    village: "",
    mobilenum: "",
    emailId: "",
    inPower: false,
    timeSlot: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata({ ...formdata, [name]: type === "checkbox" ? checked : value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (formdata.emailId && !isValidEmail(formdata.emailId)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!formdata.timeSlot) {
      toast.error("Please select a time slot.");
      return;
    }
    try {
      const response = await axios.post(`${ADMIN_API_ENDPOINT}/scheduleconsultation`, formdata, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success(`Consultation scheduled at ${formdata.timeSlot}. We Will Reach You in Next few Days`);
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 16; hour++) {
      if (hour < 12) {
        slots.push(`${hour}:00 AM`);
        slots.push(`${hour}:30 AM`);
      } else {
        const pmHour = hour === 12 ? 12 : hour - 12; 
        slots.push(`${pmHour}:00 PM`);
        slots.push(`${pmHour}:30 PM`);
      }
    }
    return slots;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] px-4 py-10 overflow-hidden relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/images/constitution-background.jpg')`,
          backgroundSize: 'cover',
        }}
      ></div>
      
      {/* Enhanced gradient overlay with more depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/95 via-[#0f172a]/85 to-[#0f172a]/90 z-0"></div>

      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] px-4 py-2 rounded-lg z-10 text-white font-bold shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={20} />
        Home
      </motion.button>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center z-10 mb-6"
      >
        <h1 className="text-3xl font-bold text-white mb-2">SCHEDULE CONSULTATION</h1>
        <div className="h-1 w-48 bg-[#60a5fa] mx-auto mb-2"></div>
      </motion.div>

      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md shadow-2xl rounded-xl p-8 w-full max-w-lg border border-white/20 z-10 overflow-y-auto mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            className="mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleChange}
              className="border border-gray-600 bg-[#1e293b] p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400 transition-all duration-300"
              required
              placeholder="Your full name"
            />
          </motion.div>

          <motion.div 
            className="mb-3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <label className="block text-sm font-medium text-gray-200 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formdata.age}
              onChange={handleChange}
              className="border border-gray-600 bg-[#1e293b] p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400 transition-all duration-300"
              required
              placeholder="Your age"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            className="mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Constituency
            </label>
            <input
              type="text"
              name="constituency"
              value={formdata.constituency}
              onChange={handleChange}
              className="border border-gray-600 bg-[#1e293b] p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400 transition-all duration-300"
              required
              placeholder="Your constituency"
            />
          </motion.div>

          <motion.div 
            className="mb-3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Village (Optional)
            </label>
            <input
              type="text"
              name="village"
              value={formdata.village}
              onChange={handleChange}
              className="border border-gray-600 bg-[#1e293b] p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400 transition-all duration-300"
              placeholder="Your village"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            className="mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobilenum"
              value={formdata.mobilenum}
              onChange={handleChange}
              className="border border-gray-600 bg-[#1e293b] p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400 transition-all duration-300"
              required
              placeholder="Your mobile number"
            />
          </motion.div>

          <motion.div 
            className="mb-3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Email ID (Optional)
            </label>
            <input
              type="email"
              name="emailId"
              value={formdata.emailId}
              onChange={handleChange}
              className="border border-gray-600 bg-[#1e293b] p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400 transition-all duration-300"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email address"
              placeholder="Your email address"
            />
          </motion.div>
        </div>

        <motion.div 
          className="mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Select a Time Slot (9 AM - 5 PM)
          </label>
          <select
            name="timeSlot"
            value={formdata.timeSlot}
            onChange={handleChange}
            className="border border-gray-600 bg-[#1e293b] p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-white placeholder-gray-400 transition-all duration-300"
            required
          >
            <option value="" disabled>Select a time</option>
            {generateTimeSlots().map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </motion.div>

        <motion.div 
          className="mb-4 flex items-center gap-3 bg-[#1e293b] p-3 rounded-lg border border-gray-600"
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
            className="h-5 w-5 text-[#3b82f6] rounded focus:ring-2 focus:ring-[#3b82f6] bg-gray-700 border-gray-600"
          />
          <label className="text-sm font-medium text-gray-200">
            Currently In Power?
          </label>
        </motion.div>

        <motion.div 
          className="mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.4 }}
        >
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            CONFIRM APPOINTMENT
          </motion.button>
        </motion.div>
      </motion.form>

      {/* Enhanced animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#60a5fa" : "#93c5fd",
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
            }}
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              opacity: 0
            }}
            animate={{
              y: [0, -Math.random() * 200 - 100],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Constitutional symbols decorative elements */}
      <div className="absolute top-10 right-10 opacity-10 z-0">
        <svg width="150" height="150" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#60a5fa" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="#60a5fa" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};

export default ScheduleConsultation;
