import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { ADMIN_API_ENDPOINT } from "../utils/constant";

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
        const response=await axios.post(`${ADMIN_API_ENDPOINT}/scheduleconsultation`,formdata,{
            headers: {
              "Content-Type": "application/json",
            },
    }   )
        toast.success(`Consultation scheduled at ${formdata.timeSlot}.We Will Reach You in Next few Days`);
        navigate("/");
    } catch (error) {
        console.log(error);
        
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition text-white font-bold"
      >
        <ArrowLeft size={20} />
        Home
      </button>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Schedule Consultation
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Age</label>
          <input
            type="number"
            name="age"
            value={formdata.age}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Constituency</label>
          <input
            type="text"
            name="constituency"
            value={formdata.constituency}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Village (Optional)</label>
          <input
            type="text"
            name="village"
            value={formdata.village}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Mobile Number</label>
          <input
            type="tel"
            name="mobilenum"
            value={formdata.mobilenum}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Email ID (Optional)</label>
          <input
            type="email"
            name="emailId"
            value={formdata.emailId}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Please enter a valid email address"
          />
        </div>

        <div className="mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            name="inPower"
            checked={formdata.inPower}
            onChange={handleChange}
            className="h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400"
          />
          <label className="text-sm font-semibold text-gray-600">Are You In Power?</label>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Select a Time Slot (9 AM - 5 PM)
          </label>
          <select
            name="timeSlot"
            value={formdata.timeSlot}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>Select a time</option>
            {generateTimeSlots().map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition font-semibold text-lg"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default ScheduleConsultation;
