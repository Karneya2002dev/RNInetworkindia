import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero({ data }) {
  const bg = data.bgImage || "https://images.unsplash.com/photo-1506905925346-5006c2dccd27?auto=format&fit=crop&w=1600&q=80";

  return (
    <motion.section id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl px-4">
        <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          {data.title}
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-gray-200 mb-8">
          {data.subtitle}
        </motion.p>
        <motion.button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full flex items-center gap-2 mx-auto">
          {data.buttonText} <ArrowRight />
        </motion.button>
      </div>
    </motion.section>
  );
}