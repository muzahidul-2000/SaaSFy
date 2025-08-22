import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'


const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className="relative w-full bg-[#ebf6f5] min-h-screen flex items-center justify-center px-6 sm:px-20 xl:px-32">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl">
        
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold leading-[1.2] text-[#5cbdb9]">
            Create amazing content <br />
            with <span className="text-[#2d2d2d]">AI tools</span>
          </h1>
          <p className="mt-4 max-w-md md:max-w-lg 2xl:max-w-xl text-gray-600 text-sm sm:text-base mx-auto md:mx-0">
            Transform your content creation with our suite of premium AI tools.
            Write articles, generate images, and enhance your workflow effortlessly.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 text-sm sm:text-base">
            <button
              onClick={() => navigate('/ai')}
              className="px-8 sm:px-10 py-3 rounded-xl bg-[#f7cdd1] text-[#2d2d2d] font-medium hover:scale-105 active:scale-95 transition cursor-pointer shadow-md"
            >
              Start creating now
            </button>
            <button className="bg-white px-8 sm:px-10 py-3 rounded-xl border border-gray-300 hover:scale-105 active:scale-95 transition cursor-pointer shadow-sm">
              Watch demo
            </button>
          </div>

          <div className="flex items-center gap-3 mt-8 text-gray-600 justify-center md:justify-start">
            <img src={assets.user_group} alt="user group" className="h-8" />
            <span className="text-sm sm:text-base">
              Trusted by <strong>10k+</strong> creators
            </span>
          </div>
        </div>

        

      </div>
    </div>
  )
}

export default Hero
