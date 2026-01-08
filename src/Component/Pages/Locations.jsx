import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  {
    name: "Chennai",
    projects: 6,
    slug: "chennai",
    img: "https://assetmonk.com/wp-content/uploads/shutterstock_683393986-min-min-1-1024x576.webp",
  },
  {
    name: "Kozhivakkam",
    projects: 1,
    slug: "kozhivakkam",
    img: "https://housing-images.n7net.in/89341d7a/a4902e3dda8c79c1a34ae92b50c75ccb/v0/medium.jpg",
  },
  {
    name: "Kancheepuram",
    projects: 2,
    slug: "kancheepuram",
    img: "https://media.istockphoto.com/id/467437354/photo/the-1300-year-old-kailasanathar-hindu-temple-built-by-the-pallava-king-narasimhavarman-ii.jpg?s=612x612&w=0&k=20&c=XvIhagnI1uQZSDDyKxflSIJMQFtrREjDwAXAMwF9aqg=",
  },
];

export default function OurLocations() {
  return (
    <div className="w-full py-20 bg-white flex flex-col items-center">
      
      {/* Title */}
      <motion.div className="flex items-center gap-2 text-pink-600 text-4xl font-bold mb-2">
        <MapPin size={40} className="text-pink-600" />
        Our Locations
      </motion.div>

      {/* Subtitle */}
      <motion.p className="text-gray-600 text-center max-w-2xl mb-14 text-lg">
        Explore the convenience and vibrant lifestyle offered by the locations we showcase!
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl px-4">
        {locations.map((loc, index) => (
          <Link to={`/locations/${loc.slug}`} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden cursor-pointer"
            >
              <img src={loc.img} alt={loc.name} className="h-60 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{loc.name}</h3>
                <p className="flex items-center text-gray-600 gap-2">
                  <ExternalLink size={18} />
                  {loc.projects} Projects
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
