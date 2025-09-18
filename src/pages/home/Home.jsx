import React from 'react'
import HeroSection from './HeroSection'
import ToolSection from './ToolSection'
import CompanyLogos from './CompanyLogos'
import Services from './Services'
import Testimonials from './Testimonials'
import Blogs from './Blogs'

const Home = () => {
  return (
    <>
    <HeroSection></HeroSection>
    <ToolSection></ToolSection>
    <CompanyLogos></CompanyLogos>
    <Services></Services>
    <Testimonials></Testimonials>
    <Blogs></Blogs>
    </>
  )
}

export default Home