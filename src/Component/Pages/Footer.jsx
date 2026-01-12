// import React from "react";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowUpRight,
//   ShieldCheck,
//   ChevronUp,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import logo from "../../assets/logoo.png";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } },
//   };

//   return (
//     <motion.footer
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       variants={staggerContainer}
//       className="relative bg-[#f8fafc] text-slate-600 pt-24 pb-12 overflow-hidden border-t border-slate-200"
//     >
//       {/* 1. BACKGROUND IMAGE LAYER */}
//       <div className="absolute inset-0 z-0">
//         <motion.div 
//           initial={{ scale: 1.1, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 0.08 }} // Subtle opacity to keep it light
//           transition={{ duration: 1.5 }}
//           className="w-full h-full bg-cover bg-center bg-no-repeat"
//           style={{ 
//             backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` 
//           }}
//         />
//       </div>

//       {/* 2. OVERLAY GRADIENTS & GRIDS */}
//       <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ffffff,transparent)]" />
//         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="light-grid" width="60" height="60" patternUnits="userSpaceOnUse">
//               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(15, 23, 42, 0.04)" strokeWidth="0.5" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#light-grid)" />
//         </svg>
//       </div>

//       <div className="container mx-auto px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

//           {/* BRAND ARCHITECTURE */}
//           <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-between">
//             <div className="space-y-8">
//               <div className="flex items-center gap-6 group cursor-pointer">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/30 transition-all duration-500" />
//                   <img src={logo} alt="Logo" className="h-16 w-16 object-contain relative z-10 drop-shadow-sm" />
//                 </div>
//                 <div>
//                   <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-none">
//                     RNI <span className="text-primary font-light tracking-widest">INDIA</span>
//                   </h3>
//                   <p className="text-[10px] uppercase tracking-[0.5em] text-slate-500 mt-2 font-bold group-hover:text-primary transition-colors">
//                     Reality Solutions Simplified
//                   </p>
//                 </div>
//               </div>

//               <p className="text-lg font-light leading-relaxed max-w-md text-slate-700">
//                 Bridging the gap between <span className="text-slate-900 font-semibold underline decoration-primary/30 underline-offset-4">visionary promoters</span> and 
//                 <span className="text-slate-900 font-semibold underline decoration-primary/30 underline-offset-4"> strategic investors</span>.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-[11px] font-bold text-slate-700 tracking-wider shadow-sm backdrop-blur-sm">
//                   <ShieldCheck size={14} className="text-primary" />
//                   GOVT. RERA AUTHORIZED
//                 </div>
//                 <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-[11px] font-bold text-slate-700 tracking-wider shadow-sm backdrop-blur-sm">
//                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//                   ISO 9001:2015
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* DYNAMIC NAV COLUMNS */}
//           <div className="lg:col-span-3 grid grid-cols-2 gap-8">
//             <motion.div variants={fadeInUp} className="space-y-8">
//               <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.2em] border-l-4 border-primary pl-4">Network</h4>
//               <ul className="space-y-5">
//                 {["Services", "Listings", "Investors", "Promoters"].map((link) => (
//                   <li key={link}>
//                     <motion.a
//                       href={`#${link.toLowerCase()}`}
//                       whileHover={{ x: 8, color: "#3b82f6" }}
//                       className="text-sm font-semibold flex items-center gap-2 transition-all duration-300 text-slate-500 hover:text-slate-900"
//                     >
//                       <ArrowUpRight size={12} className="text-primary" />
//                       {link}
//                     </motion.a>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             <motion.div variants={fadeInUp} className="space-y-8">
//               <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.2em] border-l-4 border-primary pl-4">Company</h4>
//               <ul className="space-y-5">
//                 {["About", "Privacy", "FAQ", "Contact"].map((link) => (
//                   <li key={link}>
//                     <motion.a
//                       href={`#${link.toLowerCase()}`}
//                       whileHover={{ x: 8, color: "#3b82f6" }}
//                       className="text-sm font-semibold flex items-center gap-2 transition-all duration-300 text-slate-500 hover:text-slate-900"
//                     >
//                       {link}
//                     </motion.a>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           </div>

//           {/* MODERN CONTACT CARD */}
//           <motion.div
//             variants={fadeInUp}
//             className="lg:col-span-4 bg-white/80 border border-slate-200 p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 backdrop-blur-xl flex flex-col justify-between"
//           >
//             <div className="space-y-6">
//               <h4 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
//                 <div className="w-8 h-[2px] bg-primary" /> Inquiry Hub
//               </h4>
//               <div className="space-y-5">
//                 {[
//                   { icon: Phone, val: "+91 98765 43210" },
//                   { icon: Mail, val: "connect@rniindia.com" },
//                   { icon: MapPin, val: "Chennai Business Center, TN" }
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center gap-4 group cursor-pointer">
//                     <div className="p-3 bg-white border border-slate-100 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-primary/40 group-hover:-translate-y-1">
//                       <item.icon size={18} />
//                     </div>
//                     <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors font-semibold">{item.val}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.02, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               className="mt-10 w-full py-4.5 bg-slate-900 text-white rounded-2xl font-bold tracking-widest text-xs uppercase shadow-xl shadow-slate-900/20 hover:bg-primary transition-all duration-500"
//             >
//               Schedule a Consultation
//             </motion.button>
//           </motion.div>
//         </div>

//         {/* REFINED BOTTOM BAR */}
//         <div className="pt-10 border-t border-slate-200/60 flex flex-col lg:flex-row justify-between items-center gap-8">
//           <div className="flex gap-4">
//             {[Facebook, Instagram, Linkedin].map((Icon, i) => (
//               <motion.a
//                 key={i}
//                 whileHover={{ y: -5, backgroundColor: "#3b82f6", color: "#fff", borderColor: "#3b82f6" }}
//                 className="w-12 h-12 border border-slate-200 rounded-2xl flex items-center justify-center text-slate-600 bg-white/50 backdrop-blur-sm shadow-sm transition-all duration-500"
//               >
//                 <Icon size={20} />
//               </motion.a>
//             ))}
//           </div>

//           <div className="flex flex-col items-center lg:items-end gap-1">
//             <p className="text-xs text-slate-500 font-medium">
//               © {currentYear} <span className="text-slate-900 font-bold tracking-tight">RNI Real Estate Network India Pvt Ltd.</span>
//             </p>
//             <div className="flex items-center gap-3">
//               <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Product of</span>
//               <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">Yaaraa Technologies</span>
//             </div>
//           </div>

//           <motion.button
//             onClick={scrollToTop}
//             whileHover={{ y: -5, backgroundColor: "#fff", borderColor: "#3b82f6" }}
//             className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 shadow-md transition-all group"
//           >
//             <ChevronUp size={22} className="group-hover:text-primary transition-colors" />
//           </motion.button>
//         </div>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;




import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/logoo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative bg-[#f8fafc] text-slate-600 pt-16 pb-8 overflow-hidden border-t border-slate-200"
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-[0.05] bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ffffff,transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 items-start">

          {/* BRAND SECTION: Reduced spacing */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4 group">
              <img src={logo} alt="Logo" className="h-12 w-12 object-contain drop-shadow-sm" />
              <div>
                <h3 className="text-4xl font-black text-slate-900 leading-none">
                  RNI <span className="text-primary font-light tracking-widest">INDIA</span>
                </h3>
                <p className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-bold">
                  Reality Solutions Simplified
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
              Connecting <span className="text-slate-900 font-medium">visionary promoters</span> with
              <span className="text-slate-900 font-medium"> strategic investors</span> through our secure ecosystem.
            </p>

            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 shadow-sm">
                <ShieldCheck size={12} className="text-primary" /> RERA
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> ISO 9001
              </div>
            </div>
          </motion.div>

          {/* NAV LINKS: Tightened spacing and alignment */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <motion.div variants={fadeInUp} className="space-y-4">
              <h4 className="text-slate-900 font-bold text-[15px] uppercase tracking-widest border-l-2 border-primary pl-3">Network</h4>
              <ul className="space-y-3">
                {["Services", "Listings", "Investors", "Promoters"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-lg font-semibold text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
                      <ArrowUpRight size={10} /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <h4 className="text-slate-900 font-bold text-[15px] uppercase tracking-widest border-l-2 border-primary pl-3">Company</h4>
              <ul className="space-y-3">
                {["About", "Privacy", "FAQ", "Contact"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-lg font-semibold text-slate-500 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CONTACT CARD: Compact Bento style */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-4 bg-white/60 border border-slate-200 p-6 rounded-[1.5rem] backdrop-blur-md shadow-sm"
          >
            <h4 className="text-slate-900 font-bold text-lg mb-4">Inquiry Hub</h4>
            <div className="space-y-3 mb-6">
              {[
                { icon: Phone, val: "+91 98765 43210" },
                { icon: Mail, val: "connect@rniindia.com" },
                { icon: MapPin, val: "Chennai, TN" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-white border border-slate-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <item.icon size={14} />
                  </div>
                  <span className="text-s text-slate-600 font-medium">{item.val}</span>
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ y: -2 }}
              className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold tracking-widest text-[15px] uppercase hover:bg-primary transition-colors shadow-lg shadow-slate-900/10"
            >
              Consult Now
            </motion.button>
          </motion.div>
        </div>

        {/* BOTTOM BAR: Aligned and slim */}
        {/* REFINED BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social Cluster - Left Aligned */}
          <div className="flex gap-3 flex-1">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -3, color: "#3b82f6", backgroundColor: "#fff" }}
                className="w-9 h-9 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 bg-white/50 backdrop-blur-sm transition-all shadow-sm"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Center Section: Copyright & Infinite Scroll Product Credits */}
          <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6">



            {/* Center Content: Copyright + Marquee */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 flex-[2] justify-center">
              <p className="text-[10px] text-slate-500 font-medium whitespace-nowrap">
                © {currentYear} <span className="text-slate-900 font-bold">RNI Real Estate Network India Pvt Ltd.</span>
              </p>

              <div className="hidden lg:block w-[1px] h-4 bg-slate-200" /> {/* Vertical Divider */}

              {/* INNOVATIVE HORIZONTAL SCROLL MARQUEE */}
              <div className="relative w-48 overflow-hidden">
                {/* Edge Fades for the "In and Out" look */}
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />

                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="flex whitespace-nowrap gap-8 items-center w-max"
                >
                  {[1, 2].map((_, idx) => (
                    <div key={idx} className="flex gap-8 items-center">
                      <span className="text-[9px] text-slate-400 uppercase tracking-[0.2em] font-bold">
                        Product of <span className="text-primary font-black">Yaaraa Technologies</span>
                      </span>
                      <span className="text-slate-300">•</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>


          </div>

          {/* Back to Top - Right Aligned */}
          <div className="flex justify-end flex-1">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, borderColor: "#3b82f6" }}
              className="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-primary shadow-sm transition-all group"
            >
              <ChevronUp size={18} className="group-hover:animate-bounce" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;