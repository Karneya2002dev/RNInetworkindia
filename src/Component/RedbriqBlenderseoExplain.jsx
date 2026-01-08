import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import {
  FileText,
  TrendingUp,
  BarChart3,
  Phone,
  Target,
  Users,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

const features = [
  {
    title: "Property & Project Management",
    description: "Complete portfolio management with real-time analytics and project oversight from concept to completion.",
    icon: FileText,
    color: "from-blue-600 to-indigo-400",
    gridClass: "md:col-span-2 md:row-span-1",
    tag: "Scale"
  },
  {
    title: "Marketing Automation",
    description: "Lead generation and nurturing with AI-driven campaign tools.",
    icon: TrendingUp,
    color: "from-rose-500 to-orange-400",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Prospect Intelligence",
    description: "Track prospects through the sales pipeline with automated follow-ups and smart call scheduling.",
    icon: Target,
    color: "from-amber-500 to-yellow-400",
    gridClass: "md:col-span-1 md:row-span-2",
    highlight: true,
  },
  {
    title: "Real-time Analytics",
    description: "Flexible reporting processes with automated distribution and deep-dive insights.",
    icon: BarChart3,
    color: "from-emerald-600 to-teal-400",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    title: "AI Lead Scoring",
    description: "Prioritize high-intent property inquiries automatically.",
    icon: Users,
    color: "from-purple-600 to-fuchsia-400",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Contact Hub",
    description: "Unified interface for tasks, deals, and history.",
    icon: Phone,
    color: "from-sky-500 to-cyan-400",
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

const FeatureCard = ({ item }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 1. Spotlight Effect
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);

    // 2. Parallax Icon Movement
    const moveX = (x - rect.width / 2) / 10;
    const moveY = (y - rect.height / 2) / 10;
    gsap.to(iconRef.current, { x: moveX, y: moveY, duration: 0.6, ease: "power2.out" });

    // 3. Magnetic Button
    const btnRect = buttonRef.current.getBoundingClientRect();
    const btnX = e.clientX - (btnRect.left + btnRect.width / 2);
    const btnY = e.clientY - (btnRect.top + btnRect.height / 2);
    if (Math.abs(btnX) < 50 && Math.abs(btnY) < 50) {
      gsap.to(buttonRef.current, { x: btnX * 0.4, y: btnY * 0.4, duration: 0.3 });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(iconRef.current, { x: 0, y: 0, duration: 0.6 });
    gsap.to(buttonRef.current, { x: 0, y: 0, duration: 0.3 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-[3rem] p-10 transition-all duration-700 bg-white border border-gray-100 flex flex-col justify-between hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] ${item.gridClass}`}
      style={{
        "--x": "0px",
        "--y": "0px",
      }}
    >
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ background: `radial-gradient(circle at var(--x) var(--y), rgba(var(--primary-rgb), 0.05) 0%, transparent 50%)` }} />

      {/* AI Processing Scan Line */}
      <div className="absolute top-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:animate-scan z-0" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div 
            ref={iconRef}
            className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white bg-gradient-to-br shadow-xl transition-transform duration-500 ${item.color}`}
          >
            <item.icon size={32} strokeWidth={1.5} />
          </div>
          {item.tag && (
            <span className="px-3 py-1 rounded-full bg-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-500">
              {item.tag}
            </span>
          )}
        </div>

        <h3 className={`text-2xl font-bold mb-4 tracking-tight ${item.highlight ? "text-primary" : "text-gray-900"}`}>
          {item.title}
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity">
          {item.description}
        </p>
      </div>

      <div 
        ref={buttonRef}
        className="relative z-10 w-fit mt-8 flex items-center gap-3 text-gray-900 group-hover:text-primary transition-colors cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <ArrowUpRight size={18} />
        </div>
        <span className="text-xs font-black uppercase tracking-tighter">Explore Solution</span>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 md:py-40 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end mb-20 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Sparkles size={20} />
              </div>
              <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
                Next-Gen Infrastructure
              </h2>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter">
              The OS for <br />
              <span className="text-gray-300">Property Empires.</span>
            </h2>
          </div>
          <div className="lg:pl-20 border-l border-gray-200">
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              We've re-engineered real estate management from the ground up. Modular, automated, and hyper-intuitive.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-2xl font-bold text-gray-900">99%</p>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Efficiency</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">24/7</p>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Automation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Masonry Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[320px] gap-8">
          {features.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

// Add this to your globals.css or Tailwind config
// @keyframes scan {
//   0% { left: -100%; }
//   100% { left: 100%; }
// }
// .animate-scan { animation: scan 3s linear infinite; }