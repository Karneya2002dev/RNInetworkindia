import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, MapPin, Home, IndianRupee, Key, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Assets (Keep your current imports)
import heroImage1 from "../../assets/bgggg.jpg";
import heroImage2 from "../../assets/2.jpg";
import heroImage3 from "../../assets/1.jpg";

const TAMIL_NADU_LOCATIONS = [
  "Chennai", "Coimbatore", "Madurai", "Trichy", "Salem", "Erode",
  "Tiruppur", "Vellore", "Thoothukudi", "Tirunelveli", "Kanchipuram"
];

const SearchFilterBar = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("buy"); // buy, rent, sell
  const [location, setLocation] = useState("Bengaluru");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams({ mode, location, type: propertyType, budget });
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="mt-10 w-full max-w-5xl mx-auto px-4">
      {/* 1. CENTER ALIGNED TAB SWITCHER */}
      <div className="flex justify-center gap-2 mb-[-1px] relative z-10">
        {["buy", "rent", "sell"].map((tab) => (
          <button
            key={tab}
            onClick={() => setMode(tab)}
            className={`relative px-10 py-3 rounded-t-2xl text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 overflow-hidden ${
              mode === tab 
                ? "bg-white text-red-600 shadow-[0_-10px_25px_rgba(0,0,0,0.1)] translate-y-[-2px]" 
                : "bg-black/40 text-white/50 hover:text-white backdrop-blur-md"
            }`}
          >
            {/* Active Indicator Line */}
            {mode === tab && (
              <motion.div 
                layoutId="activeTab" 
                className="absolute top-0 left-0 right-0 h-[3px] bg-red-600" 
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab === 'rent' && <Key size={12} />}
              {tab === 'sell' && <Tag size={12} />}
              {tab}
            </span>
          </button>
        ))}
      </div>

      {/* 2. MAIN FILTER PANEL (Glassmorphism) */}
      <div className="bg-white/95 backdrop-blur-2xl rounded-3xl md:rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.4)] p-2 md:pl-10 border border-white/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Location Group */}
          <div className="flex flex-1 items-center gap-4 w-full md:w-auto px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
            <MapPin className="text-red-500 shrink-0" size={20} />
            <div className="flex flex-col flex-1 items-start">
              <span className="text-[9px] font-thin uppercase tracking-widest text-gray-400">Search Area</span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent text-gray-900 font-black text-sm outline-none cursor-pointer w-full"
              >
                {["Bengaluru", ...TAMIL_NADU_LOCATIONS].map(loc => <option key={loc}>{loc}</option>)}
              </select>
            </div>
          </div>

          {/* Type Group */}
          <div className="flex flex-1 items-center gap-4 w-full md:w-auto px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
            <Home className="text-gray-400 shrink-0" size={20} />
            <div className="flex flex-col flex-1 items-start">
              <span className="text-[9px] font-thin uppercase tracking-widest text-gray-400">Property Category</span>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="bg-transparent text-gray-900 font-black text-sm outline-none w-full"
              >
                <option value="">All Properties</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Commercial</option>
              </select>
            </div>
          </div>

          {/* Budget Group */}
          <div className="flex flex-1 items-center gap-4 w-full md:w-auto px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
            <IndianRupee className="text-gray-400 shrink-0" size={20} />
            <div className="flex flex-col flex-1 items-start">
              <span className="text-[9px] font-thin uppercase tracking-widest text-gray-400">
                {mode === 'rent' ? 'Monthly Lease' : 'Purchase Budget'}
              </span>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="bg-transparent text-gray-900 font-black text-sm outline-none w-full"
              >
                <option value="">Any Range</option>
                {mode === 'rent' ? (
                  <>
                    <option>Under 20k</option>
                    <option>20k - 50k</option>
                    <option>Above 50k</option>
                  </>
                ) : (
                  <>
                    <option>Under 50L</option>
                    <option>50L - 2Cr</option>
                    <option>Above 2Cr</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full md:w-auto p-1">
            <button
              onClick={handleSearch}
              className="bg-red-600 hover:bg-black text-white px-12 py-5 rounded-full flex items-center justify-center gap-3 transition-all duration-700 group shadow-xl hover:shadow-red-500/20"
            >
              <span className="font-black uppercase text-[11px] tracking-[0.3em]">Search</span>
              <div className="bg-white/20 p-1.5 rounded-full">
                <Search size={16} className="group-hover:scale-125 transition-transform" />
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  const images = [heroImage1, heroImage2, heroImage3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((i) => (i + 1) % images.length), 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Cinematic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />

      {/* Hero Content */}
      <div ref={ref} className="relative z-10 text-center px-4 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="leading-[0.85] flex flex-col items-center select-none">
            <span className="text-2xl sm:text-3xl md:text-4xl font-thin text-white tracking-[0.5em] uppercase mb-4 opacity-70">
              Discover Your
            </span>
            <span className="text-6xl sm:text-8xl md:text-[10rem] font-black text-white tracking-tighter drop-shadow-2xl">
              LEGACY <span className="text-red-600">HOME</span>
            </span>
          </h1>

          <div className="flex items-center justify-center gap-6 mt-10">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: 60 }} 
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[1px] bg-red-600" 
            />
            <p className="text-xs md:text-sm text-gray-400 font-bold tracking-[0.4em] uppercase">
              Premier Real Estate <span className="text-white">Network India</span>
            </p>
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: 60 }} 
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[1px] bg-red-600" 
            />
          </div>
        </motion.div>

        <SearchFilterBar />
      </div>

      {/* Geometric Decoration */}
      <div className="absolute bottom-0 right-0 p-10 hidden md:block opacity-20">
        <div className="border-[1px] border-white w-32 h-32 rounded-full flex items-center justify-center">
            <div className="border-[1px] border-red-600 w-20 h-20 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;