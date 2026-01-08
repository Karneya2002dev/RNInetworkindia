import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Twitter, Linkedin, MapPin, Clock } from "lucide-react";

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
};

export default function Footer({ data }) {
  // Safely access leads count (from EnquiryForm submissions)
  const leadsCount = data.leads?.length || 0;

  return (
    <footer className="bg-linear-to-t from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Your Real Estate
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Turning dreams into addresses. Premium land plots and modern flats tailored for you.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Mumbai | Delhi | Bangalore</span>
            </div>
            {leadsCount > 0 && (
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>{leadsCount} enquiries today!</span>
              </div>
            )}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#hero" className="hover:text-indigo-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition">Services</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            
            <div className="space-y-3">
              <a href={`mailto:${data.email}`} className="flex items-center gap-3 hover:text-indigo-400 transition">
                <Mail className="w-5 h-5" />
                <span className="text-sm">{data.email}</span>
              </a>
              <a href={`tel:${data.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-indigo-400 transition">
                <Phone className="w-5 h-5" />
                <span className="text-sm">{data.phone}</span>
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              {Object.entries(data.social).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                if (!Icon) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-indigo-500 transition transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-sm text-gray-400">
            {data.footerText} • Built with ❤️ using React + Tailwind
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Powered by xAI • {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}