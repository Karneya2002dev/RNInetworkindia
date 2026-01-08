import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function Services({ services }) {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.HelpCircle;
            return (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}