import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'

const Home = ({ showForm, setShowForm }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <AiTools/>
      <Testimonial showForm={showForm} setShowForm={setShowForm} />
      <Plan/>
      <Footer/>
    </>
  )
}

export default Home
