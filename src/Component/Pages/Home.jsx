import { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Service";  // Fixed: Correct name & path
import EnquiryForm from "../Components/Contact"; // Fixed: Correct name & path
import Footer from "../Components/Footer";
import { defaultData } from "../data/Data"; // Fixed: Correct path & name
const STORAGE_KEY = "microsite_data";

export default function Home() {
  const [siteData, setSiteData] = useState(defaultData);

  // Load saved data on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setSiteData(JSON.parse(saved));
      } catch (error) {
        console.error("Failed to load saved data:", error);
      }
    }
  }, []);

  return (
    <>
      <Hero  />
      <About  />
      <Services  />
    
      {/* Enquiry Form Section */}
      <EnquiryForm />

      {/* Footer */}
      <Footer  />
    </>
  );
}