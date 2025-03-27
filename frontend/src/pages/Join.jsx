import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { ADMIN_API_ENDPOINT } from "../utils/constant";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Join = () => {
  const navigate = useNavigate();
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

  const [loading, setLoading] = useState(false); // Loading state

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

    setLoading(true); // Start loading when form is submitted

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
    } finally {
      setLoading(false); // Stop loading when request completes
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] px-4 py-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('/images/constitution-background.jpg')` }}></div>
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

      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md shadow-2xl rounded-xl p-4 md:p-8 w-full max-w-lg border border-white/20 z-10 mb-4"
      >
        {/* Input fields remain the same */}
        {/* Submit Button with Loading State */}
        <motion.div
          className="mt-4 md:mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.4 }}
        >
          <motion.button
            type="submit"
            disabled={loading} // Disable button when loading
            className={`w-full text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 shadow-lg ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-[#3b82f6] to-[#2563eb]"
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
