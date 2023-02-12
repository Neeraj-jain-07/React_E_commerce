import React from 'react'
import FeaturedProjucts from './components/FeaturedProjucts'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import TrustedSection from './components/TrustedSection'

const Home = () => {
  const data ={
    title:"Thapa Store"
  }
  return (
    <div>
      <HeroSection data={data}/>
      <FeaturedProjucts/>
      <Services/>
      <TrustedSection/>
      
    </div>
  )
}

export default Home
