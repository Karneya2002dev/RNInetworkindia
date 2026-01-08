import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PROPERTIES } from "../Data/Properties";
import {
  ArrowLeft,
  MapPin,
  Building2,
  BedDouble,
  IndianRupee,
  Home,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = useMemo(
    () => PROPERTIES.find((p) => String(p.id) === id),
    [id]
  );

  if (!property) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Property not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* ================= HEADER ================= */}
      <header className="bg-white border-b sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-slate-100"
          >
            <ArrowLeft />
          </button>
          <div>
            <h1 className="text-xl font-bold">{property.propertyType}</h1>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              <MapPin size={12} />
              {property.locality}, {property.city}
            </p>
          </div>
        </div>
      </header>

      {/* ================= HERO IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-6 mt-6"
      >
        <img
          src={
            property.image ||
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          }
          alt=""
          className="w-full h-[420px] object-cover rounded-3xl shadow"
        />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-8">

          {/* OVERVIEW */}
          <section className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Overview</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Info icon={Home} label="Type" value={property.propertyType} />
              {property.bhk && (
                <Info icon={BedDouble} label="BHK" value={property.bhk} />
              )}
              <Info
                icon={IndianRupee}
                label="Price"
                value={property.price ? `₹ ${property.price}` : "On Request"}
              />
              <Info
                icon={Calendar}
                label="Status"
                value={property.constructionStatus}
              />
            </div>
          </section>

          {/* DESCRIPTION */}
          <section className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-3">Description</h2>
            <p className="text-slate-600 leading-relaxed">
              {property.description ||
                "This premium property offers modern design, excellent connectivity, and a comfortable living experience. Ideal for families and investors."}
            </p>
          </section>

          {/* DEVELOPER */}
          <section className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-3">Developer</h2>
            <p className="flex items-center gap-2 text-slate-600">
              <Building2 size={18} />
              {property.developer}
            </p>
          </section>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">

          {/* CONTACT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-28">
            <h3 className="font-bold text-lg mb-2">
              Interested in this property?
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Get complete details & best price
            </p>

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
              Request Callback
            </button>

            <button className="w-full mt-3 border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= INFO COMPONENT ================= */
const Info = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
    <Icon className="text-blue-600" size={18} />
    <div>
      <p className="text-xs text-slate-400">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);
