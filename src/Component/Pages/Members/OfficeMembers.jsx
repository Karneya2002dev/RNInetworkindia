import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import OwnersData from "./OwnersPage"; // ✅ correct import

const MemberCard = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Office Members
          </h1>
          <p className="text-slate-500 mt-2">
            Meet our executive office members
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {OwnersData.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group rounded-3xl p-6 bg-white/70 backdrop-blur-xl
                         border border-slate-200 shadow-lg hover:shadow-2xl
                         flex flex-col justify-between"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                              from-sky-400/20 to-indigo-400/20 
                              opacity-0 group-hover:opacity-100 transition" />

              {/* Content */}
              <div className="relative text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r 
                                from-sky-500 to-indigo-500 p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-white flex items-center 
                                  justify-center text-xl font-bold text-slate-700">
                    {member.name.charAt(0)}
                  </div>
                </div>

                <h2 className="text-lg font-bold text-slate-900">
                  {member.name}
                </h2>

                <p className="text-sky-600 text-sm font-semibold mt-1">
                  {member.designation}
                </p>

                <p className="text-slate-600 text-sm mt-1">
                  {member.company}
                </p>

                <div className="flex justify-center items-center gap-1 text-xs text-slate-500 mt-2">
                  <MapPin size={14} />
                  <span>{member.location}</span>
                </div>
              </div>

              {/* Button */}
              <Link
                to={member.link}
                className="relative mt-6 inline-block text-center px-4 py-2 rounded-xl
                           bg-sky-500 text-white text-sm font-semibold
                           hover:bg-sky-600 transition"
              >
                View Profile
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberCard;
