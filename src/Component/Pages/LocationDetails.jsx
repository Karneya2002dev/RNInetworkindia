import { useParams } from "react-router-dom";
import { projects } from "../Data/projectData"; 
import { motion } from "framer-motion";
import { MapPin, Home, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LocationDetails() {
  const { slug } = useParams();

  // Filter states
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");

  // ===== FILTER LOGIC ===== //
  const filteredProjects = projects
    .filter(p => p.location === slug)
    .filter(p => {
      if (propertyType && p.type !== propertyType) return false;

      // Budget filter
      const price = parseInt(p.price.replace(/[^0-9]/g, "")); // extract number

      if (budget === "below50" && price >= 5000000) return false;
      if (budget === "50to1" && (price < 5000000 || price > 10000000)) return false;
      if (budget === "1to2" && (price < 10000000 || price > 20000000)) return false;
      if (budget === "above2" && price <= 20000000) return false;

      return true;
    });

  return (
    <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
      
      {/* Filter Bar */}
      <div className="sticky top-20 z-50 bg-white/80 backdrop-blur-xl shadow-lg rounded-xl p-4 mb-10 border flex flex-wrap gap-4 justify-between">

        <select
          className="border rounded-lg p-2 bg-white shadow-sm"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">All Property Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Plot">Plot</option>
        </select>

        <select
          className="border rounded-lg p-2 bg-white shadow-sm"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="">All Budgets</option>
          <option value="below50">Below ₹50L</option>
          <option value="50to1">₹50L - ₹1 Cr</option>
          <option value="1to2">₹1 Cr - ₹2 Cr</option>
          <option value="above2">Above ₹2 Cr</option>
        </select>
      </div>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text capitalize">
          Properties in {slug}
        </h1>
        <p className="text-gray-600 mt-2 text-lg">Curated premium listings</p>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
          <Home size={60} className="mx-auto opacity-60 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">No matching properties found</h2>
        </motion.div>
      )}

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="group rounded-2xl bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl overflow-hidden border"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-60 object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <span className="absolute top-4 left-4 bg-white/90 text-gray-800 text-sm font-bold px-4 py-1 rounded-full shadow backdrop-blur-md">
                {p.price}
              </span>
            </div>

            {/* Details */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-1 group-hover:text-indigo-600 transition">
                {p.name}
              </h2>
              <p className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                <MapPin size={16} /> {p.location}
              </p>
              <p className="font-medium text-gray-800 mb-4">{p.type}</p>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-4">
                <Link to={`/project/${p.id}`}>
  <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition">
    View Details <ArrowRight size={16} />
  </button>
</Link>
                <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-indigo-50 transition font-semibold text-indigo-600">
                  <Phone size={16} /> Contact
                </button>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
