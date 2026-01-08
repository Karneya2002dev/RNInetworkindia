import React from "react";
import { Search, MapPin, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "../../assets/logoo.png";
import house from "../../assets/1.jpg";

export default function Homee() {
  return (
    <section className="relative min-h-screen w-full bg-[#8b1e2b] flex flex-col overflow-hidden font-sans">
      
      {/* 1. Background Layer: Grid & Glow */}
      <div className="absolute inset-0 z-0">
        {/* The Cyber Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }}
        />
        {/* Radial Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-black/20 blur-[100px] rounded-full" />
      </div>

      {/* 2. Navbar */}
      <nav className="relative z-30 px-6 md:px-12 py-6 flex items-center justify-between bg-transparent">
        <div className="flex items-center">
          <img src={logo} alt="redbri" className="h-10 object-contain" />
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-white/90 text-sm font-medium">
          <li className="hover:text-white cursor-pointer transition">Home</li>
          <li className="hover:text-white cursor-pointer transition">Properties</li>
          <li className="hover:text-white cursor-pointer transition flex items-center gap-1">
            Solutions <ChevronDown size={14} />
          </li>
          <li className="hover:text-white cursor-pointer transition">Services</li>
          <li className="hover:text-white cursor-pointer transition">Resources</li>
          <li className="hover:text-white cursor-pointer transition">About Us</li>
        </ul>

        <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-bold text-sm shadow-lg hover:bg-gray-100 transition">
          Sign in
        </button>
      </nav>

      {/* 3. Hero Body */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-20 py-10">
        
        {/* Navigation Arrows */}
        <button className="absolute left-4 p-2 text-white/30 hover:text-white transition hidden md:block">
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
        <button className="absolute right-4 p-2 text-white/30 hover:text-white transition hidden md:block">
          <ChevronRight size={48} strokeWidth={1} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Customize <span className="font-normal">to</span> <br /> your requirements.
            </h1>
            <p className="text-white/80 text-xl font-light">
              Quick and easy site builder.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-md font-bold text-md shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Discover more
            </button>
          </div>

          {/* 3D Visual */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-75" />
            <img
              src={house}
              alt="3D Sustainable House"
              className="relative z-10 w-full max-w-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transform hover:rotate-2 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* 4. Footer Search & Pagination */}
      <div className="relative z-20 w-full pb-12 flex flex-col items-center gap-10">
        
        {/* Pagination Dots */}
        <div className="flex gap-2">
          <span className="w-8 h-1 bg-white rounded-full" />
          <span className="w-8 h-1 bg-white/40 rounded-full" />
          <span className="w-8 h-1 bg-yellow-400 rounded-full" />
        </div>

        {/* Search Bar Container */}
        <div className="w-[90%] max-w-6xl bg-white rounded-full shadow-2xl flex flex-wrap md:flex-nowrap items-center p-2 pl-8 gap-2">
          
          <div className="flex items-center gap-3 flex-1 min-w-[150px]">
            <MapPin size={20} className="text-gray-400" />
            <div className="flex flex-col w-full">
                <select className="bg-transparent border-none outline-none text-gray-800 font-medium appearance-none">
                    <option>Bengaluru</option>
                </select>
            </div>
          </div>

          <div className="hidden md:block h-8 w-[1px] bg-gray-200" />

          <input
            type="text"
            placeholder="Keywords for search"
            className="flex-1 min-w-[150px] outline-none text-gray-600 px-4 py-2"
          />

          <div className="hidden md:block h-8 w-[1px] bg-gray-200" />

          <div className="flex-1 min-w-[150px] px-4">
            <select className="w-full bg-transparent outline-none text-gray-500 appearance-none cursor-pointer">
              <option>Property Type</option>
              <option>Villa</option>
              <option>Apartment</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
             <button className="text-gray-400 hover:text-gray-600 font-medium px-4">Clear</button>
             <button className="bg-[#c44536] text-white p-4 rounded-full hover:bg-[#a3392d] transition shadow-lg">
                <Search size={24} />
             </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button className="absolute bottom-6 right-6 z-50 bg-[#25D366] p-3 rounded-full shadow-lg hover:scale-110 transition">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8 invert" alt="whatsapp" />
      </button>

    </section>
  );
}