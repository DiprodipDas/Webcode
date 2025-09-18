import React from 'react'
import HeroSection from './HeroSection'
import ToolSection from './ToolSection'
import CompanyLogos from './CompanyLogos'
import Services from './Services'
import Testimonials from './Testimonials'
import Blogs from './Blogs'
import TeamSection from './TeamSection'

const Home = () => {
  return (
    <>
    <HeroSection></HeroSection>
    <ToolSection></ToolSection>
    <CompanyLogos></CompanyLogos>
    <Services></Services>
    <Testimonials></Testimonials>
    <Blogs></Blogs>
    <TeamSection></TeamSection>
    </>
  )
}

export default Home