import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'

const Navbar = () => {

    const navigate = useNavigate()
    const {user} = useUser()
    const { openSignIn } = useClerk()


  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
      <img src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer' onClick={()=> navigate('/about')}/>
      <ul className="hidden sm:flex gap-8 font-medium text-gray-700">
        <li>
          <Link to="/" className="hover:text-[#5cbdb9] transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#5cbdb9] transition">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-[#5cbdb9] transition">Contact</Link>
        </li>
      </ul>
      {
        user ? <UserButton /> 
        : 
        (
          <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-[#f7cdd1] text-[#2d2d2d] px-10 py-2.5'>Get started <ArrowRight className='w-4 h-4'/> </button>
        )
      }

      
    </div>
  )
}

export default Navbar
