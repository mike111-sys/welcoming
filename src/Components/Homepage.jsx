import React, { useState } from 'react';
import logo from "../assets/ujuzi-logo.png";

const Homepage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    websiteType: '',
    reason: '',
    targetAudience: '',
    competitors: '',
    budget: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 text-gray-800">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full text-center">
        <img src={logo} alt="Ujuzi Digital Creations" className="w-24 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-blue-600">Ujuzi Digital Creations</h1>
        <p className="text-lg font-semibold mt-2">Website Development Offer at Ksh 5000</p>
        <p className="text-red-500 font-bold mt-1">Limited to only 10 individuals or businesses! Don't miss out.</p>
        <p className="mt-4">Fill in the form below and stand a chance to grab this exclusive offer!</p>

        {/* FORM START */}
        <form action="https://getform.io/f/bdrnqeeb" method="POST">
          <label className="block font-medium">Your Name:</label>
          <input 
            type="text" name="name" required 
            value={formData.name} onChange={handleChange} 
            className="w-full border p-2 rounded-md mt-1" 
            placeholder="Enter your full name" 
          />

          <label className="block font-medium mt-4">Email Address:</label>
          <input 
            type="email" name="email" required 
            value={formData.email} onChange={handleChange} 
            className="w-full border p-2 rounded-md mt-1" 
            placeholder="Enter your email" 
          />

          <label className="block font-medium mt-4">WhatsApp Number:</label>
          <input 
            type="text" name="whatsapp" required 
            value={formData.whatsapp} onChange={handleChange} 
            className="w-full border p-2 rounded-md mt-1" 
            placeholder="Enter your WhatsApp number" 
          />

          <label className="block font-medium mt-4">Type of Website:</label>
          <select 
            name="websiteType" required 
            value={formData.websiteType} onChange={handleChange} 
            className="w-full border p-2 rounded-md mt-1">
            <option value="">Select website type</option>
            <option value="Business Website">Business Website</option>
            <option value="E-commerce Store">E-commerce Store</option>
            <option value="Portfolio Website">Portfolio Website</option>
            <option value="Blog">Blog</option>
          </select>

          <label className="block font-medium mt-4">Why do you need a website?</label>
          <textarea 
            name="reason" required 
            value={formData.reason} onChange={handleChange} 
            className="w-full border p-2 rounded-md mt-1" 
            placeholder="Explain why you need a website"
          ></textarea>

          <label className="block font-medium mt-4">Who is your target audience?</label>
          <textarea 
            name="targetAudience" required 
            value={formData.targetAudience} onChange={handleChange} 
            className="w-full border p-2 rounded-md mt-1" 
            placeholder="Describe your ideal audience or customers"
          ></textarea>

          <label className="block font-medium mt-4">Do you have competitors? If yes, list a few:</label>
          <textarea 
            name="competitors" 
            value={formData.competitors} onChange={handleChange} 
            className="w-full border p-2 rounded-md mt-1" 
            placeholder="List some competitors (if any)"
          ></textarea>

         
          <label className="block font-medium mt-4">Additional Information:</label>
          <textarea 
            name="additionalInfo" 
            value={formData.additionalInfo} onChange={handleChange} 
            className="w-full border p-2 rounded-md mt-1" 
            placeholder="Anything else we should know? (Optional)"
          ></textarea>

          <button 
            type="submit" 
            className="w-full mt-6 bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700">
            Submit Application
          </button>
        </form>
        {/* FORM END */}
      </div>
    </div>
  );
};

export default Homepage;
