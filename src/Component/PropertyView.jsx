import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { 
  ArrowLeft, Share2, Heart, Compass, 
  PhoneCall, MessageSquare, ShieldCheck, 
  Zap, Trees, PlayCircle, X, Download, Maximize
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import "leaflet/dist/leaflet.css";

// Fix Leaflet Icons
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
L.Marker.prototype.options.icon = L.icon({
    iconUrl: icon, shadowUrl: iconShadow, iconSize: [25, 41], iconAnchor: [12, 41]
});

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); 

  const { scrollY } = useScroll();
  const galleryScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const galleryOpacity = useTransform(scrollY, [0, 400], [1, 0.9]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/properties/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setProperty(data.data);
        setLoading(false);
      }).catch(() => setLoading(false));
  }, [id]);

  const handleVirtualTour = () => {
    const tourUrl = property?.virtualTourUrl || "https://www.realestatechennai.co/webinar-funnel-107535";
    window.open(tourUrl, "_blank", "noopener,noreferrer");
  };

  // --- NEW SHARE FUNCTIONALITY ---
  const handleShare = async () => {
    const shareData = {
      title: property?.developer || "Property Details",
      text: `Check out this property in ${property?.locality}, ${property?.city}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };
  // -------------------------------

  if (loading) return <LoadingScreen />;
  if (!property) return <div className="h-screen grid place-items-center font-bold text-slate-400">Listing Unavailable</div>;

  return (
    <div className="min-h-screen  bg-[#FDFDFD] text-slate-900 selection:bg-blue-100">
      
      {/* 1. MODAL: DIGITAL LAYOUT EMBED (FULL PLAN) */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full h-full flex flex-col"
            >
              <div className="flex justify-between items-center p-6 bg-white/5 backdrop-blur-md border-b border-white/10">
                <div>
                    <h4 className="text-white font-black uppercase tracking-tighter italic text-xl">Interactive Plot Availability</h4>
                    <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">{property.developer} • Live Status</p>
                </div>
                <button 
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-4 bg-white text-slate-900 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2 font-black uppercase text-[10px]"
                >
                  <X size={18} /> Close Map
                </button>
              </div>

              <div className="flex-1 bg-slate-100 overflow-hidden flex items-center justify-center">
                <div className="digital-layout-embed-container w-full h-full">
                    <iframe 
                        title="Interactive Plan"
                        style={{ width: "100%", height: "100%", border: "none" }} 
                        src={`https://realestatesnetworkindiapvtltd.com/projects/plot-availability/${id}?embed=1`}
                    ></iframe>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. NAVIGATION */}
      <nav className="fixed top-20 inset-x-0 z-[100] p-6 flex justify-between items-center">
        <motion.button 
          whileHover={{ x: -5 }}
          onClick={() => navigate(-1)} 
          className="flex items-center gap-3 bg-white/80 backdrop-blur-xl p-3 px-6 rounded-2xl border border-slate-200 shadow-sm"
        >
          <ArrowLeft size={18} />
          <span className="text-xs font-black uppercase tracking-widest text-slate-600">Back</span>
        </motion.button>

        <div className="flex items-center gap-3">
          {/* UPDATED SHARE BUTTON */}
          <button 
            onClick={handleShare}
            className="p-4 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-sm hover:bg-slate-50 transition-all"
          >
            <Share2 size={18} />
          </button>
          
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="p-4 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-sm transition-all"
          >
            <Heart size={18} className={isLiked ? "fill-rose-500 text-rose-500" : "text-slate-400"} />
          </button>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-slate-100">
        <motion.div style={{ scale: galleryScale, opacity: galleryOpacity }} className="h-full w-full  pt-22">
          <img src={property.image} className="w-full h-full object-cover" alt="Architectural" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-transparent to-black/5" />
        <div className="absolute bottom-16 left-10 md:left-20">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <span className="bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-[9px] px-3 py-1.5 rounded-md mb-6 block w-fit">
              Estate No. {id.slice(-4)}
            </span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-4 text-slate-900 italic">
              {property.developer}
            </h1>
            <p className="text-xl text-slate-500 font-bold tracking-widest uppercase flex items-center gap-4">
              <span className="h-px w-12 bg-blue-500" /> {property.locality}, {property.city}
            </p>
          </motion.div>
        </div>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 py-24">
        <div className="lg:col-span-8 space-y-24">
          <section>
            <div className="flex gap-10 border-b border-slate-100 mb-12">
              {["overview", "amenities", "master plan"].map((tab) => (
                <button 
                  key={tab} onClick={() => setActiveTab(tab)}
                  className={`pb-6 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === tab ? "text-blue-600" : "text-slate-400"}`}
                >
                  {tab}
                  {activeTab === tab && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="text-slate-500 leading-relaxed text-lg"
              >
                {activeTab === "overview" && (
                  <div className="grid md:grid-cols-5 gap-12">
                    <div className="md:col-span-3 space-y-6">
                       <p className="font-medium italic text-slate-700">A curation of excellence and modern geometry.</p>
                       <p className="text-base text-slate-500">This project redefines urban living with low-density planning and high-efficiency spatial design.</p>
                       <button 
                        onClick={handleVirtualTour}
                        className="group flex items-center gap-4 bg-slate-900 text-white p-2 pr-8 rounded-full transition-all hover:bg-blue-600"
                       >
                         <div className="bg-white/10 p-3 rounded-full group-hover:bg-white group-hover:text-blue-600 transition-all">
                           <PlayCircle size={24} />
                         </div>
                         <span className="text-[10px] font-black uppercase tracking-widest">Experience Virtual Site Tour</span>
                       </button>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 gap-8 border-l border-slate-100 pl-10">
                       <Metric label="Plan" value={property.bedrooms + " BHK"} />
                       <Metric label="Facing" value="East" />
                       <Metric label="Status" value="Approved" />
                       <Metric label="Area" value="1,450" />
                    </div>
                  </div>
                )}
                {activeTab === "amenities" && <AmenitiesGrid />}
              </motion.div>
            </AnimatePresence>
          </section>

          <section className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black tracking-tighter uppercase italic">The Blueprint</h2>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">RERA Registered</span>
            </div>
            
            <div className="relative group overflow-hidden rounded-[2rem] bg-white shadow-sm border border-slate-200 cursor-zoom-in" onClick={() => setIsPreviewOpen(true)}>
               <img src={property.image} className="w-full h-80 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" alt="Layout Preview" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-slate-900/40 backdrop-blur-[4px]">
                 <button className="bg-white text-slate-900 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest shadow-2xl flex items-center gap-2">
                   <Maximize size={14} /> Open Digital Plot Map
                 </button>
               </div>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-32 space-y-6">
            <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 text-center">Current Valuation</p>
              <h3 className="text-5xl font-black text-center tracking-tighter mb-10 text-slate-900">₹{property.price?.toLocaleString()}</h3>
              <div className="space-y-5 mb-10 border-y border-slate-50 py-8">
                 <SidebarMetric label="Rate / SqFt" value="₹5,400" />
                 <SidebarMetric label="Plot No." value="14 - A" />
                 <SidebarMetric label="Taxes" value="Inclusive" />
              </div>
              <div className="space-y-3">
                <button 
                  onClick={handleVirtualTour}
                  className="w-full bg-slate-900 text-white h-16 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all flex items-center justify-center gap-3 shadow-lg shadow-slate-200"
                >
                  <PlayCircle size={18} className="text-blue-400" /> Virtual Site Tour
                </button>
                <button className="w-full border-2 border-slate-100 text-slate-900 h-16 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all">
                  Request Callback
                </button>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button className="bg-blue-600 text-white h-14 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"><PhoneCall size={16} /></button>
                  <button className="bg-emerald-500 text-white h-14 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all"><MessageSquare size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

const Metric = ({ label, value }) => (
  <div className="group">
    <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">{label}</p>
    <p className="text-slate-900 text-xl font-black italic tracking-tighter group-hover:text-blue-600 transition-colors">{value}</p>
  </div>
);

const SidebarMetric = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{label}</span>
    <span className="text-sm font-black text-slate-900 uppercase italic tracking-tighter">{value}</span>
  </div>
);

const AmenitiesGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { icon: <ShieldCheck />, label: "Security" },
      { icon: <Trees />, label: "Gardens" },
      { icon: <Zap />, label: "EV Power" },
      { icon: <Compass />, label: "Vastu" },
    ].map((item, idx) => (
      <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] text-center border border-transparent hover:border-blue-200 hover:bg-white transition-all group shadow-sm">
        <div className="mb-4 text-slate-400 group-hover:text-blue-600 transition-colors flex justify-center">{item.icon}</div>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">{item.label}</p>
      </div>
    ))}
  </div>
);

const LoadingScreen = () => (
  <div className="h-screen bg-white flex items-center justify-center">
    <div className="flex gap-2">
      {[0, 1, 2].map(i => (
        <motion.div key={i} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }} className="h-2 w-2 rounded-full bg-slate-200" />
      ))}
    </div>
  </div>
);