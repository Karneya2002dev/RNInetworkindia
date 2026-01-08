import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaCity,
  FaHome,
  FaBuilding,
  FaBusinessTime,
  FaHotel,
  FaMapMarkedAlt,
  FaFilter,
  FaMicrophone,
  FaCrosshairs
} from "react-icons/fa";

const tabs = [
  { label: "BUY", icon: <FaHome /> },
  { label: "RENT", icon: <FaBuilding /> },
  { label: "COMMERCIAL", icon: <FaBusinessTime /> },
  { label: "PG/CO-LIVING", icon: <FaHotel /> },
  { label: "PLOTS", icon: <FaMapMarkedAlt /> },
];

const popularSearches = [
  "2BHK in Bengaluru",
  "Commercial Space in Chennai",
  "Luxury Villa in Mumbai",
  "Plot near Delhi",
  "Fully Furnished PG in Kolkata",
];

const bgImages = {
  BUY: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1080",
  RENT: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080",
  COMMERCIAL: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1080",
  "PG/CO-LIVING": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1080",
  PLOTS: "https://images.unsplash.com/photo-1518600506278-4e8ef466b810?w=1080",
};

const cities = ["Delhi", "Mumbai", "Bengaluru", "Chennai", "Kolkata"];

export default function PropertySearchBanner() {
  const [activeTab, setActiveTab] = useState("RENT");
  const [cityInput, setCityInput] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(cityInput.toLowerCase())
  );

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition(() =>
      alert("Detected your location!")
    );
  };

  return (
    <motion.div
      key={activeTab}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      style={{
        backgroundImage: `url(${bgImages[activeTab]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="p-8 md:p-12 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden"
    >
      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-br from-black/80 via-black/40 to-transparent backdrop-blur-sm rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <motion.h2
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-center drop-shadow-xl"
        >
          Discover Your Dream{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Property
          </span>
        </motion.h2>

        <p className="text-center text-gray-200 pt-1">
          Trusted by <strong>50L+</strong> users • <strong>63K+</strong> verified listings
        </p>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 pt-5">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(tab.label)}
              className="px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold cursor-pointer shadow-md"
              animate={{
                backgroundColor: activeTab === tab.label ? "#2563EB" : "rgba(255,255,255,0.85)",
                color: activeTab === tab.label ? "white" : "#1F2937",
                scale: activeTab === tab.label ? 1.08 : 1,
              }}
              whileHover={{ scale: 1.05 }}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Search Box */}
        <div className="backdrop-blur-xl bg-white/15 border border-white/20 shadow-xl rounded-2xl px-6 py-5 mt-6 flex flex-wrap md:flex-nowrap justify-center gap-4">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Enter your city"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              className="w-full bg-white px-4 py-3 pr-10 rounded-xl text-black shadow-md"
            />
            <FaCity className="absolute right-3 top-3.5 text-gray-500" />

            <AnimatePresence>
              {cityInput && filteredCities.length > 0 && (
                <motion.ul
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-20 w-full bg-white rounded-xl shadow-2xl mt-1 max-h-44 overflow-auto"
                >
                  {filteredCities.map((city, i) => (
                    <li
                      key={i}
                      onClick={() => setCityInput(city)}
                      className="px-4 py-2 cursor-pointer hover:bg-blue-200 text-black"
                    >
                      {city}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={detectLocation}
            className="px-4 py-3 bg-white rounded-xl shadow-md text-black flex items-center gap-2 hover:bg-gray-200"
          >
            <FaCrosshairs /> Near Me
          </button>

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-7 py-3 rounded-xl shadow-xl flex items-center gap-3 font-semibold hover:bg-blue-700 active:scale-95"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin rounded-full" />
            ) : (
              <FaSearch />
            )}
            Search
          </button>

          <button className="px-6 py-3 rounded-xl bg-white text-black flex items-center gap-2 hover:bg-blue-100 shadow-md">
            <FaFilter /> Filters
          </button>

          <button className="px-4 py-3 bg-white rounded-xl shadow-md hover:bg-blue-100">
            <FaMicrophone className="text-black" />
          </button>
        </div>

        {/* Popular tags */}
        <div className="flex gap-2 flex-wrap justify-center pt-5">
          {popularSearches.map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.08 }}
              className="bg-white/25 text-white px-4 py-1.5 rounded-full text-sm border border-white/40 cursor-pointer"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
