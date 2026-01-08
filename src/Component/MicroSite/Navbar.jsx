import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Edit, Home, Info, Layers, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "#hero", icon: <Home className="w-5 h-5" /> },
    { name: "About", href: "#about", icon: <Info className="w-5 h-5" /> },
    { name: "Services", href: "#services", icon: <Layers className="w-5 h-5" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-5 h-5" /> },
  ];

  const scrollTo = (href) => {
    if (location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
        >
          <Link to="/">RealEstate Pro</Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              {link.icon}
              {link.name}
            </button>
          ))}
          <Link
            to="/form"
            className="ml-6 bg-linear-to-r from-indigo-600 to-pink-600 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition"
          >
            <Edit className="w-5 h-5" />
            Edit Site
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 font-medium w-full text-left py-2"
                >
                  {link.icon}
                  {link.name}
                </button>
              ))}
              <Link
                to="/form"
                onClick={() => setMobileOpen(false)}
                className="block w-full bg-linear-to-r from-indigo-600 to-pink-600 text-white px-5 py-3 rounded-full text-center font-semibold shadow-lg"
              >
                <Edit className="inline w-5 h-5 mr-2" />
                Edit Site
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}