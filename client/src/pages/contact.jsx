import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-center text-[#5cbdb9] mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Get in touch with us through the details below.
        </p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="text-[#5cbdb9]" />
            <span className="text-gray-700">support@saasfy.com</span>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="text-[#5cbdb9]" />
            <span className="text-gray-700">+91 XXXXXXXXXX</span>
          </div>

          <div className="flex items-center space-x-4">
            <MapPin className="text-[#5cbdb9]" />
            <span className="text-gray-700">Noida, Uttar Pradesh, India</span>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}
