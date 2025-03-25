import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ADMIN_API_ENDPOINT } from '../utils/constant';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { setUser } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  });
  const dispatch=useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${ADMIN_API_ENDPOINT}/login`, formdata, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      });

      if (response.data.success) {
        toast.success("Login Success");

        // Dispatching user data to Redux store after login
        dispatch(setUser(response.data.user)); 

        navigate('/admin-dashboard');
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-4'>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Admin Login
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Email
          </label>
          <div className="flex items-center border p-3 rounded-lg w-full focus-within:ring-2 focus-within:ring-blue-400">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              className="w-full focus:outline-none"
              required
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Password
          </label>
          <div className="flex items-center border p-3 rounded-lg w-full focus-within:ring-2 focus-within:ring-blue-400">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              className="w-full focus:outline-none"
              required
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
