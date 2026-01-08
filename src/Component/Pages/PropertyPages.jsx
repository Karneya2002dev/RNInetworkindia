import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const propertyLabels = {
  "new-flats": "New Flats",
  "old-flats": "Old Used Flats",
  "plot-residential": "Plot - Residential",
  "plot-commercial": "Plot - Commercial",
  "new-villas": "Residential - New Villas",
  "old-buildings": "Residential - Old Buildings",
  "joint-venture": "Joint Venture",
  "old-villas": "Old Villas",
  "rental-lease": "Rental / Lease",
};

export default function PropertyPage() {
  const { propertyType } = useParams();
  const label = propertyLabels[propertyType] || "Properties";
  const [showModal, setShowModal] = useState(false);

  /* ------------------ DATA (UNTOUCHED) ---------------------- */
  const [properties] = useState([
    { id: 6, propertyType: "ANGELS KEERTHI", description: "", address: "Ongoing project", locality: "Ongoing project", city: "Chennai", state: "", lat: 0, lng: 0, image: "https://realestatesnetworkindiapvtltd.com/storage/2025/05/16/559859ccbc9df05f0f404600d470081cb921e7b2.png", developer: "Developer", status: "Ongoing", type: "buy" },
    { id: 9, propertyType: "Divyanagar", description: "", address: "Chitterimedu", locality: "Chitterimedu", city: "Kancheepuram", state: "Tamilnadu", lat: 12.87, lng: 79.68, image: "https://realestatesnetworkindiapvtltd.com/storage/2025/09/04/3b146dde850fa576f0382f85f9ecddeb35176aa4.jpeg", developer: "Developer", status: "Ongoing", type: "buy" },
    { id: 8, propertyType: "Green Park Avenue", description: "", address: "", locality: "Kancheepuram", city: "Kancheepuram", state: "Tamilnadu", lat: 0, lng: 0, image: "https://realestatesnetworkindiapvtltd.com/storage/2025/09/03/67d96a82e1a3402fdae282b9f4d8a426bfa2c100.jpg", developer: "Developer", status: "Ongoing", type: "buy" },
    { id: 1, propertyType: "Keerthi Raja Palace", description: "Keerthi Raja Palace is a premium residential project by Keerthi Promoters, located in the thriving suburb of Pallikaranai, Chennai. This development offers spacious 2 and 3 BHK apartments, with built-up areas ranging from 951 to 1624 sq.ft.,", address: "", locality: "Chennai", city: "Chennai", state: "", lat: 0, lng: 0, image: "https://realestatesnetworkindiapvtltd.com/storage/2025/05/02/e0af77d4ca464448fb382ad064c9baa70c9b9a92.jpeg", developer: "Developer", status: "Ongoing", type: "buy" },
    { id: 2, propertyType: "Keerthi Rani Palace", description: "Keerthi Rani Palace is a residential apartment project located in Pallikaranai, Chennai, developed by Keerthi Promoters. This boutique project is designed to offer spacious and private living, featuring 3 BHK flats with a built-up area of 1,624 sq.ft., priced at ₹1.31 crore. Each floor houses only one apartment, ensuring enhanced privacy and exclusivity for residents.", address: "", locality: "Chennai", city: "Chennai", state: "", lat: 0, lng: 0, image: "https://realestatesnetworkindiapvtltd.com/storage/2025/05/07/467bb66258aced407e176185fe765aa4e077e97d.jpeg", developer: "Developer", status: "Ongoing", type: "buy" },
    { id: 3, propertyType: "KEERTHI Subham", description: "Keerthi Subham is a completed residential apartment project developed by Keerthi Promoters, located in Pallikaranai, Chennai. This boutique development offers a limited number of units, providing a more private and community-focused living experience.", address: "", locality: "Chennai", city: "Chennai", state: "", lat: 0, lng: 0, image: "https://realestatesnetworkindiapvtltd.com/storage/2025/05/07/9bd49f20545430f580579880ac6911bd169d9dfd.jpeg", developer: "Developer", status: "Ongoing", type: "buy" },
    { id: 4, propertyType: "Keerthi Wings", description: "Keerthi Wings is a completed residential apartment project developed by Keerthi Promoters, located in Pallikaranai, Chennai. This boutique development offers a limited number of units, providing a more private and community-focused living experience.", address: "", locality: "Chennai", city: "Chennai", state: "", lat: 0, lng: 0, image: "https://realestatesnetworkindiapvtltd.com/storage/2025/05/07/35d6fcd7461ca6260a76758d52daa6d7ecc01b8a.jpeg", developer: "Developer", status: "Ongoing", type: "buy" },
    { id: 5, propertyType: "Sai Keerthi", description: "Keerthi Sai", address: "", locality: "Chennai", city: "Chennai", state: "", lat: 0, lng: 0, image: "https://realestatesnetworkindiapvtltd.com/storage/2025/05/07/9bd49f20545430f580579880ac6911bd169d9dfd.jpeg", developer: "Developer", status: "Ongoing", type: "buy" },
    { id: 10, propertyType: "veyil Prometers", description: "It is a form of real property and includes both natural resources and man-made structures", address: "Pallikaranai", locality: "Pallikaranai", city: "Kozhivakkam", state: "Tamilnadu", lat: 44.968046, lng: -94.420307, image: "https://realestatesnetworkindiapvtltd.com/storage/2025/09/27/bd787e3ae9ed31f6b5b164eab0a34c5727bdc798.jfif", developer: "Developer", status: "Ongoing", type: "buy" },
  ]);

  /* ------------------ LOGIC (UNTOUCHED) ---------------------- */
  useEffect(() => {
    const modalCategories = ["new-flats", "old-flats", "rental-lease", "plot-commercial", "plot-residential", "old-villas", "new-villas", "old-buildings", "joint-venture"];
    setShowModal(modalCategories.includes(propertyType));
  }, [propertyType]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.funnelworkz.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const getFormDetails = () => {
    switch (propertyType) {
      case "rental-lease": return { src: "https://link.funnelworkz.com/widget/form/3BRs6fSpWlYaNR9fY6SG", id: "inline-3BRs6fSpWlYaNR9fY6SG", title: "Rental/Lease" };
      case "plot-commercial": return { src: "https://link.funnelworkz.com/widget/form/HYTka2gakHTYPfybMkA5", id: "inline-HYTka2gakHTYPfybMkA5", title: "Commercial Plot" };
      case "plot-residential": return { src: "https://link.funnelworkz.com/widget/form/Q9iYhuXsfPMAEbVEZeCr", id: "inline-Q9iYhuXsfPMAEbVEZeCr", title: "Residential Plot" };
      case "old-villas": return { src: "https://link.funnelworkz.com/widget/form/63BoxZrMonglLPzpI4AX", id: "inline-63BoxZrMonglLPzpI4AX", title: "Old Villa" };
      case "new-villas": return { src: "https://link.funnelworkz.com/widget/form/GZhpFwVpuqgwcUgow4Mj", id: "inline-GZhpFwVpuqgwcUgow4Mj", title: "New Villa" };
      case "old-buildings": return { src: "https://link.funnelworkz.com/widget/form/Ow5SSgYj0wkLYDAV8s0x", id: "inline-Ow5SSgYj0wkLYDAV8s0x", title: "Old Building" };
      case "joint-venture": return { src: "https://link.funnelworkz.com/widget/form/10YUR7NPqM9Hv6haPXA1", id: "inline-10YUR7NPqM9Hv6haPXA1", title: "Joint Venture" };
      default: return { src: "https://link.funnelworkz.com/widget/form/jtE806a6Iqf8NNc9uKE3", id: "inline-jtE806a6Iqf8NNc9uKE3", title: "Flat Old" };
    }
  };

  const formDetails = getFormDetails();

  return (
    <div className="min-h-screen bg-[#fcfcfd] pb-20">
      {/* 1. Hero Header */}
      <div className="relative bg-white pt-32 pb-16 border-b border-gray-100 mb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              Real Estate Premium Network
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Exclusive {label}
            </h1>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* 2. Grid Design */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((p) => (
            <div 
              key={p.id} 
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.propertyType} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-blue-700 text-xs font-bold rounded-full shadow-sm">
                    {p.status}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-3">
                  {p.propertyType}
                </h3>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <svg className="w-4 h-4 mr-1.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {p.locality}, {p.city}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {p.description || "Discover premium living spaces designed with modern architecture and top-tier amenities."}
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="mt-auto w-full bg-slate-900 text-white py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-blue-600 flex items-center justify-center group/btn"
                >
                  View Details
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Innovative Glassmorphic Modal with Scrollable Form */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowModal(false)}
          ></div>
          
          <div className="bg-white w-full max-w-5xl rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-[700px] animate-in zoom-in-95 duration-300">
            
            {/* Modal Left Sidebar */}
            <div className="hidden md:flex md:w-1/3 bg-blue-600 p-12 flex-col justify-between text-white">
              <div>
                <h2 className="text-3xl font-bold mb-4">Interested in {label}?</h2>
                <p className="text-blue-100 leading-relaxed">Submit your inquiry and our specialist will reach out to you shortly.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span><span className="text-sm font-medium">Verified Listings</span></div>
                <div className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span><span className="text-sm font-medium">Expert Consultancy</span></div>
              </div>
            </div>

            {/* Modal Right Area - Scrollable Form Container */}
            <div className="flex-1 flex flex-col p-6 md:p-10 relative h-full">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-slate-900 hover:bg-gray-100 rounded-full z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-slate-900">Get Quotation</h3>
                <p className="text-gray-500 text-sm">Scroll down to complete all fields.</p>
              </div>

              {/* THIS SECTION IS NOW SCROLLABLE */}
              <div className="flex-grow rounded-2xl border border-gray-100 overflow-y-auto bg-gray-50 custom-scrollbar shadow-inner">
                <div className="min-h-[800px] w-full"> {/* Min-height ensures the iframe has space to expand */}
                  <iframe
                    src={formDetails.src}
                    className="w-full h-full border-none"
                    style={{ minHeight: '800px' }}
                    id={formDetails.id}
                    title={formDetails.title}
                    scrolling="yes" // Explicitly allow iframe scrolling
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}