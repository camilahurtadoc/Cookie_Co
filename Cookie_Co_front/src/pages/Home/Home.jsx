import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Highlights from '../../components/Highlights/Highlights'
import Testimonials from '../../components/Testimonials/Testimonials'
import AboutUs from '../../components/AboutUs/AboutUs'
import Newsletter from '../../components/Newsletter/Newsletter'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <AboutUs />
      <Newsletter />
    </>
  )
}

export default Home