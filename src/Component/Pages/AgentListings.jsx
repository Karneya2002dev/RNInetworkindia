import React from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, Home, ArrowRight, ExternalLink } from "lucide-react";

// Asset imports remain the same
import agent1 from "../../assets/greenpark.png";
import agent2 from "../../assets/keerthi-raja.png";
import agent3 from "../../assets/Divya.png";
import agent4 from "../../assets/Sai_Keerthi.png";

const agents = [
  {
    name: "Divya Promoters",
    company: "Green Park Avenue",
    listings: 357,
    image: agent1,
    location: "Chennai, TN",
    url: "https://realestatesnetworkindiapvtltd.com/projects/green-park-avenue/",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Keerthi Promoters",
    company: "Keerthi Raja Palace",
    listings: 9,
    image: agent2,
    location: "Madurai, TN",
    url: "https://realestatesnetworkindiapvtltd.com/projects/keerthi-raja-palace/",
    color: "from-purple-500 to-pink-400"
  },
  {
    name: "SD Promoters",
    company: "Divya Nagar",
    listings: 145,
    image: agent3,
    location: "Trichy, TN",
    url: "https://realestatesnetworkindiapvtltd.com/projects/divya-nagar/",
    color: "from-orange-500 to-amber-400"
  },
  {
    name: "Keerthi Promoters",
    company: "Sai Keerthi",
    listings: 12,
    image: agent4,
    location: "Coimbatore, TN",
    url: "https://realestatesnetworkindiapvtltd.com/projects/sai-keerthi/",
    color: "from-emerald-500 to-teal-400"
  },
];

const AgentListings = () => {
  return (
    <section id="agents" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-widest uppercase text-sm"
            >
              Our Partners
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black mt-2 leading-tight"
            >
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Developers</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground text-lg max-w-xs"
          >
            Direct access to the most prestigious property developers in Tamil Nadu.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card border border-border/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 backdrop-blur-md bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                  <Home className="w-3 h-3 text-accent" />
                  {agent.listings} Units
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 relative">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold tracking-tight mb-1 group-hover:text-primary transition-colors">
                    {agent.company}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    <Building2 className="w-4 h-4" />
                    {agent.name}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
                  <MapPin className="w-4 h-4 text-primary" />
                  {agent.location}
                </div>

                {/* Innovative Action Button */}
                <a
                  href={agent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full group/btn bg-secondary/50 hover:bg-primary hover:text-primary-foreground p-4 rounded-2xl transition-all duration-300 font-bold"
                >
                  <span>Explore Projects</span>
                  <div className="bg-primary group-hover/btn:bg-primary-foreground group-hover/btn:text-primary text-primary-foreground p-2 rounded-xl transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentListings;