import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar/>
      <main className="pt-14">
         <section className="bg-white text-gray-800 px-6 md:px-20 py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-[#5cbdb9] mb-6">
              About Saasfy
            </h1>
            <p className="text-lg leading-relaxed mb-8">
              Welcome to <span className="font-semibold">Saasfy</span> — your AI-powered
              platform to create, manage, and grow smarter than ever. We believe
              software should do the heavy lifting, so you can focus on what really
              matters: building your business.
            </p>

            <h2 className="text-2xl font-semibold text-[#5cbdb9] mb-4">🚀 Our Mission</h2>
            <p className="mb-6">
              Saasfy was built to empower startups, creators, and teams to launch and
              scale faster. From automation to analytics, we provide powerful tools
              wrapped in a simple, beautiful interface — backed by AI.
            </p>

            <h2 className="text-2xl font-semibold text-[#5cbdb9] mb-4">💡 Why Saasfy?</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>AI tools that generate content, designs, and strategies for you.</li>
              <li>Secure, scalable infrastructure that grows with your business.</li>
              <li>Simple, elegant user experience — no tech headaches.</li>
              <li>Made by developers, for developers & founders.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#5cbdb9] mb-4">🌍 Built With ❤️ for the Web</h2>
            <p className="mb-8">
              We’re passionate about building clean, modern software. Every line of
              code at Saasfy is written with performance, accessibility, and user joy
              in mind. Whether you’re a solopreneur or an enterprise, Saasfy adapts
              to you.
            </p>

            <div className="bg-[#f7fdfd] p-6 rounded-lg shadow-md">
              <p className="text-xl font-semibold text-[#5cbdb9] mb-2">
                Let’s build the future — together.
              </p>
              <p className="text-gray-700">
                Have questions, ideas, or want to collaborate? <br />
                <a href="/contact" className="text-[#5cbdb9] font-medium hover:underline">
                  Contact our team →
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
    
  );
};

export default About;
