
import React from "react";
import { MapPin } from "lucide-react";
import { lifetimeMembers } from "./Lifetime";

const LifetimeMembers = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-slate-50 to-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Lifetime Members
        </h2>
        <p className="text-slate-500 mt-2 max-w-xl mx-auto">
          Honoring our distinguished lifetime members who shape the industry
        </p>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-16">
        <div
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {lifetimeMembers.map((member) => (
            <div
              key={member.id}
              className="
                group relative rounded-3xl p-6
                bg-white/70 backdrop-blur-xl
                shadow-xl border border-slate-200
                hover:-translate-y-2 hover:shadow-2xl
                transition-all duration-300
              "
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                from-sky-400/20 to-indigo-400/20 opacity-0 
                group-hover:opacity-100 transition"
              />

              {/* Avatar */}
              <div className="relative mt-2 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl font-bold text-slate-700">
                    {member.name.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative text-center mt-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sky-600 text-sm font-medium mt-1">
                  {member.designation}
                </p>
                <p className="text-slate-600 text-sm mt-1">
                  {member.company}
                </p>

                <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mt-2">
                  <MapPin size={14} />
                  <span>{member.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifetimeMembers;
