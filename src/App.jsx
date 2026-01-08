

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Header from './Component/Pages/Header'
import SplashScreen from './Component/Pages/Splash'
import Login from './Component/Auth/Login'
import Register from './Component/Pages/Register'
import Locations from './Component/Pages/Locations'
import LocationDetails from './Component/Pages/LocationDetails'
import ProjectDetailPage from './Component/Pages/ProjectDetails'
import AvailabilityPage from './Component/Availability'
import AgentRegister from './Component/AgentRegister'
import BuilderRegister from './Component/BuilderRegister'
import PropertyPage from './Component/Pages/PropertyPages'
import PropertyListing from './Component/Pages/PropertyCategorySlider'
import PropertyDetails from "./Component/Pages/PropertiesPage";
import RegisterForm from './Component/Auth/RegisterForm'
import Contact from './Component/Pages/Contact'
import About from './Component/Pages/About'
import Forum from './Component/Pages/Forum'
import Gallery from './Component/Pages/Gallery'
import Services from './Component/Pages/Service'
import Videos from './Component/Pages/Videos'
import FAQ from './Component/Pages/FAQ'
import Members from './Component/Pages/OurMembers'
// import OwnersPage from './Component/Pages/Members/OwnersPage' 
import Patronmembers from './Component/Pages/Members/Patronmembers'
import LifetimeMembers from './Component/Pages/Members/LifetimeMembers'
import PropertyView from './Component/PropertyView'
const App = () => {
  return (
   <>
   <Header />
   <Routes>
    <Route path='/' element={<SplashScreen />} />
    <Route path='/home' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path="/register/agent" element={<AgentRegister />} />
    <Route path="/register/builder" element={<BuilderRegister />} />
    <Route path="properties" element={<PropertyListing />} />
    <Route path='/location' element={<Locations/>} />
    <Route path="/locations/:slug" element={<LocationDetails />} />
    <Route path="/project/:id" element={<ProjectDetailPage />} />
    <Route path="/property/:id" element={<PropertyDetails />} />  
    <Route path="/availability/:id" element={<AvailabilityPage />} />
    <Route path="/Registerform" element={<RegisterForm />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/forum" element={<Forum />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/services" element={<Services />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/youtube" element={<Videos />} />
    <Route path="/properties/:propertyType" element={<PropertyPage />} />
    <Route path="/Members" element={<Members />} />
    <Route path='/patron' element={<Patronmembers />} />
{/* <Route path="/Promoters" element={<OwnersPage />} /> */}
    <Route path='/lifetime' element={<LifetimeMembers />} />
    <Route path='/proper/:id' element={<PropertyView />} />
    



   </Routes>
   </>
  )
}

export default App

