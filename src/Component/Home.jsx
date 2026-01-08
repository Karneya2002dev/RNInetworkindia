import React from 'react'
import Header from './Pages/Header'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Services from './Pages/Service'
// import Platforms from './Pages/Platform'
import Gallery from './Pages/Gallery'
import Testimonials from './Pages/Testimonal'
import FAQ from './Pages/FAQ'
import Footer from './Pages/Footer'
import AgentListings from './Pages/AgentListings'
import OurLocations from './Pages/Locations'
import RedbriqBlenderseoExplain from './RedbriqBlenderseoExplain'
import PropertyListing from './Pages/PropertyCategorySlider'
import OurMembers from './Pages/OurMembers'
// import PropertySearchBanner from './Pages/PropertySearchBanner'

const Home = () => {
  return (
    <>
    
    <Hero />
    <PropertyListing />
 
    <OurLocations />
       {/* <PropertySearchBanner /> */}
    <About />
    <Services />
    <OurMembers />
    <RedbriqBlenderseoExplain />
    {/* <Platforms /> */}
    <Gallery />
    <Testimonials />
    <AgentListings />
    <FAQ />
    <Footer />



    </>
  )
}

export default Home