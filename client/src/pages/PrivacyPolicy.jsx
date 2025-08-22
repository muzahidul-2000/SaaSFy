import React from "react";
import Navbar from '../components/Navbar'
const PrivacyPolicy = () => {
  return (
    <>
      <Navbar/>
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-[#5cbdb9] text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-4">
          At <span className="font-semibold">Saasfy</span>, we value your
          privacy and are committed to protecting your personal data. This
          Privacy Policy explains how we collect, use, and safeguard the
          information you provide while using our platform.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#5cbdb9]">
          Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Account details such as email address and login information.</li>
          <li>Uploaded files (resumes, images) for processing.</li>
          <li>Usage data to improve performance and features.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#5cbdb9]">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>To provide AI-powered services like resume review and image editing.</li>
          <li>To personalize and enhance user experience.</li>
          <li>To ensure data security and prevent misuse.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#5cbdb9]">
          Data Protection
        </h2>
        <p className="text-gray-700 mb-4">
          We use secure storage (Cloudinary, Neon, Clerk) and follow strict
          access controls to keep your data safe. Your data is never sold to
          third parties.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#5cbdb9]">
          Your Rights
        </h2>
        <p className="text-gray-700 mb-4">
          You may request data deletion, correction, or export at any time by
          contacting us through the Contact page.
        </p>

        <p className="text-gray-500 text-sm mt-8 text-center">
          Last updated: August 2025
        </p>
      </div>
    </div>
    </>
    
  );
};

export default PrivacyPolicy;
