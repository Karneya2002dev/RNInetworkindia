import { useParams, Link } from "react-router-dom";
import { projects } from "../Data/projectData";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowLeft, Bath, BedDouble, Square, DollarSign, Camera, Play } from "lucide-react";
import { useEffect, useState } from "react";


export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const data = projects.find((p) => p.id === Number(id));
    setProject(data);
  }, [id]);

  if (!project) return <div className="pt-28 text-center text-xl">Project not found</div>;

  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">

      {/* Back */}
      <Link to={-1} className="inline-flex items-center gap-2 text-blue-600 font-medium mb-6">
        <ArrowLeft size={18} /> Back
      </Link>

      {/* Title Row */}
      <div className="flex justify-between items-start flex-col md:flex-row mb-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
          <p className="text-gray-500 flex items-center gap-2 mt-2">
            <MapPin size={18} /> {project.location}
          </p>
        </div>
        <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mt-4 md:mt-0">
          {project.price}
        </div>
      </div>

      {/* Image + Right Contact Card */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Images */}
        <div className="md:col-span-2">
          <motion.div className="rounded-2xl overflow-hidden shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img src={project.image} className="w-full h-[450px] object-cover" />
          </motion.div>

         <div className="space-y-4">
  {/* Button */}
  <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-xl font-medium hover:bg-gray-50 shadow">
    <Play size={20} className="text-blue-600" /> Watch Video
  </button>

  {/* YouTube Video Embed */}
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      className="w-full h-full rounded-xl shadow-lg"
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

        </div>

        {/* Contact Agent */}
        <div className="bg-white shadow-xl p-6 rounded-2xl sticky top-32 h-fit border">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://cdn.vectorstock.com/i/1000v/32/85/male-person-icon-man-design-graphic-vector-9473285.jpg" className="w-14 h-14 rounded-full" />
            <div>
              <h4 className="font-semibold text-lg">Agent</h4>
              <p className="text-sm text-gray-500">Property Consultant</p>
            </div>
          </div>

          <p className="font-bold text-lg mb-4">+91 **** ****</p>

          <input type="text" placeholder="Your name" className="border p-3 rounded-lg w-full mb-3" />
          <input type="text" placeholder="Phone number" className="border p-3 rounded-lg w-full mb-3" />
          <textarea placeholder="Message" className="border p-3 rounded-lg w-full mb-3 h-24" />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            <Phone className="inline-block mr-2" size={18} /> Contact Agent
          </button>
        </div>
      </div>

      {/* Property Stats */}
      <div className="mt-10 p-6 bg-gray-50 rounded-2xl border">
        <h2 className="text-2xl font-bold mb-5">Home Details</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg font-medium">
          <p className="flex items-center gap-2"><BedDouble /> {project.bedrooms || 3} Beds</p>
          <p className="flex items-center gap-2"><Bath /> {project.bathrooms || 2} Baths</p>
          <p className="flex items-center gap-2"><Square /> {project.area || "1250 sqft"}</p>
          <p className="flex items-center gap-2"><DollarSign /> EMI Available</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-3">About this Property</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          {project.description || "A premium luxurious property with world-class amenities and great location."}
        </p>
      </div>

      {/* Sample Units Table */}
    {/* Availability Button Instead of Units Table */}
<div className="mt-10 p-6 border rounded-2xl bg-white shadow-sm text-center">
  <h2 className="text-2xl font-bold mb-4">Availability</h2>
  <p className="text-gray-600 mb-5">
    Check available plots or building units for this project.
  </p>

  <Link
  to={`/availability/${project.id}`}
  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg inline-block"
>
  Check Availability
</Link>

</div>

    

    </div>
  );
}
