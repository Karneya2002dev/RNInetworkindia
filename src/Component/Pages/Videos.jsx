import { Play, ArrowUpRight } from "lucide-react";
import React from "react";
import FAIRA from "../../assets/faira-logo.png";
import CREDAI from "../../assets/credai_logo.png";
import CMDA from "../../assets/cmda.jpg";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "FAIRA Insights: Tamil Nadu Real Estate",
      description:
        "Explore FAIRA sessions on the RNI Real Estate Forum, featuring industry trends, strategic outlooks, and expert perspectives shaping real estate development in Tamil Nadu.",
      thumbnail: FAIRA,
      videoUrl: "https://forum.rnirealestate.com/faira/",
      tag: "Industry Insights",
      accent: "bg-blue-600",
      lightAccent: "bg-blue-100",
    },
    {
      id: 2,
      title: "CREDAI Highlights: Real Estate Events",
      description:
        "Watch exclusive CREDAI event highlights showcasing leadership talks, networking sessions, and future-focused discussions from India’s leading real estate developers.",
      thumbnail: CREDAI,
      videoUrl: "https://forum.rnirealestate.com/credai/",
      tag: "Events & Leadership",
      accent: "bg-purple-600",
      lightAccent: "bg-purple-100",
    },
    {
      id: 3,
      title: "CMDA Price Trend Analysis",
      description:
        "Analyze CMDA-backed real estate price trends, urban planning insights, and regulatory impacts essential for investors, developers, and homebuyers.",
      thumbnail: CMDA,
      videoUrl: "https://forum.rnirealestate.com/cmda-videos/",
      tag: "Market Analysis",
      accent: "bg-emerald-600",
      lightAccent: "bg-emerald-100",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-slate-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/40 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/40 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase">
              Curated Content
            </span>
            <h2 className="text-5xl font-black text-slate-900 mt-2">
              Video{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
                Library
              </span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm font-medium leading-relaxed border-l-2 border-slate-200 pl-4">
            Access exclusive industry insights and real-time market analysis.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)]">

                {/* Image */}
                <div className="relative aspect-[16/10] m-3 rounded-[1.5rem] overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

                  {/* Play */}
                  <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
                    <div className={`${video.accent} p-4 rounded-2xl shadow-lg`}>
                      <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>

                  {/* Tag */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold uppercase px-3 py-1 rounded-lg border">
                    {video.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {video.title}
                    </h3>
                    <div className={`${video.lightAccent} p-2 rounded-full group-hover:rotate-45 transition`}>
                      <ArrowUpRight className="w-4 h-4 text-slate-700" />
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">
                    {video.description}
                  </p>

                  {/* Indicator */}
                  <div className="flex items-center gap-2">
                    <div className={`h-1 w-8 rounded-full ${video.accent} group-hover:w-16 transition-all`} />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition">
                      Play Video
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
