import { motion } from "framer-motion";

export default function About({ data }) {
  const img = data.image || "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80";

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div>
          <h2 className="text-4xl font-bold mb-6">{data.heading}</h2>
          <p className="text-lg text-gray-600">{data.description}</p>
        </motion.div>
        <motion.img
          src={img}
          alt="About"
          className="rounded-xl shadow-lg w-full object-cover h-96"
        />
      </div>
    </section>
  );
}