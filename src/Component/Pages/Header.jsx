import { useState, useEffect } from "react";
import {
  Menu, X, LogIn, LogOut, ChevronDown,
  Home, Building2, Landmark, Warehouse,
  Rocket, Star, Wrench, Users, Briefcase
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logoo.png";

const propertyItems = [
  { label: "New Flats", icon: <Home size={18} />, path: "new-flats" },
  { label: "Old Used Flats", icon: <Building2 size={18} />, path: "old-flats" },
  { label: "Residential Plots", icon: <Landmark size={18} />, path: "plot-residential" },
  { label: "Commercial Plots", icon: <Landmark size={18} />, path: "plot-commercial" },
  { label: "New Villas", icon: <Home size={18} />, path: "new-villas" },
  { label: "Old Buildings", icon: <Warehouse size={18} />, path: "old-buildings" },
  { label: "Joint Venture", icon: <Rocket size={18} />, path: "joint-venture" },
  { label: "Rental / Lease", icon: <Building2 size={18} />, path: "rental-lease" },
];

const serviceItems = [
  { 
    label: "Service Providers", 
    icon: <Users size={18} />, 
    path: "https://directory.rnirealestate.com/", 
    desc: "Expert help for your needs",
    external: true 
  },
  { 
    label: "Joint Ventures & Contractors", 
    icon: <Wrench size={18} />, 
    path: "https://directory.rnirealestate.com/?listing=sushi-kashiba", 
    desc: "Build together",
    external: true 
  },
  { 
    label: "Make My House", 
    icon: <Home size={18} />, 
    path: "https://www.makemyhouse.com/", 
    desc: "Custom construction",
    external: true 
  },
  { 
    label: "Real Estate Chennai Home", 
    icon: <Building2 size={18} />, 
    path: "https://realestateschennai.homes/", 
    desc: "Local expertise",
    external: true 
  },
];

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Jobs", href: "https://jobs.rnirealestate.com/", external: true, highlight: true },
  { name: "Forum", href: "https://forum.rnirealestate.com/", external: true },
  { name: "YouTube", href: "/youtube" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleNavigation = (path, isExternal) => {
    if (isExternal) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };

  // Theme Logic
  const headerBg = isScrolled ? "bg-white shadow-md" : "bg-black";
  const textColor = isScrolled ? "text-gray-900" : "text-white";
  const logoFilter = isScrolled ? "brightness-100 invert-0" : "brightness-0 invert";

  const NavItem = ({ label, children, id }) => (
    <div 
      className="relative py-4 group"
      onMouseEnter={() => setActiveDropdown(id)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className={`flex items-center gap-1.5 font-bold text-[15px] transition-colors hover:text-red-500 ${activeDropdown === id ? 'text-red-500' : textColor}`}>
        {label}
        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === id ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {activeDropdown === id && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="absolute left-1/2 -translate-x-1/2 top-[100%] pt-2 w-max min-w-[240px]"
          >
            <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-3 overflow-hidden">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${headerBg} ${isScrolled ? "py-2" : "py-5"}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          onClick={() => navigate("/")}
          className="relative cursor-pointer"
        >
          <img 
            src={logo} 
            alt="Logo" 
            className={`h-10 md:h-12 object-contain transition-all duration-500 ${logoFilter}`} 
          />
        </motion.div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-8">
          <NavItem label="Properties" id="prop">
            <div className="grid grid-cols-2 gap-2 p-2 w-[500px]">
              {propertyItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(`/properties/${item.path}`, false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 transition-all group text-left"
                >
                  <div className="p-2 bg-gray-100 group-hover:bg-white text-gray-600 group-hover:text-red-600 rounded-lg shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700">{item.label}</span>
                </button>
              ))}
            </div>
          </NavItem>

          <NavItem label="Services" id="serv">
            <div className="flex flex-col gap-1 w-[320px]">
              {serviceItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path, item.external)}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-red-50 transition-all group text-left"
                >
                  <div className="text-red-500">{item.icon}</div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">{item.label}</div>
                    <div className="text-[11px] text-gray-500">{item.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </NavItem>

          <NavItem label="Members" id="mem">
            <div className="flex flex-col w-48">
              {['Patron Members', 'Lifetime Members'].map((m) => (
                <button key={m} className="px-4 py-3 text-left text-sm font-semibold text-gray-800 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                  {m}
                </button>
              ))}
            </div>
          </NavItem>

          {navLinks.map(link => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.href, link.external)}
              className={`relative text-[15px] font-bold transition-all py-2 group ${textColor} hover:text-red-500 flex items-center gap-1`}
            >
              {link.highlight && <Briefcase size={14} className="text-red-500" />}
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full`} />
            </button>
          ))}
        </div>

        {/* AUTH & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <button onClick={handleLogout} className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all ${isScrolled ? 'bg-gray-100 text-gray-700 hover:bg-red-50' : 'bg-white/10 text-white hover:bg-white/20'}`}>
              <LogOut size={16} /> Logout
            </button>
          ) : (
            <button 
              onClick={() => navigate("/login")}
              className="group relative flex items-center gap-2 px-7 py-2.5 bg-red-600 text-white rounded-full font-bold shadow-lg hover:bg-red-700 transition-all overflow-hidden"
            >
              <LogIn size={18} className="relative z-10" />
              <span className="relative z-10">Join RNI</span>
            </button>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button className={`lg:hidden p-2 rounded-full transition-colors ${isScrolled ? "bg-gray-100 text-gray-900" : "bg-white/10 text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen bg-white z-50 p-6 flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <img src={logo} alt="Logo" className="h-10" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full text-gray-900"><X /></button>
            </div>
            
            <div className="flex flex-col gap-6 overflow-y-auto">
              <div className="text-[11px] font-black uppercase tracking-widest text-red-700 mb-2">Navigation</div>
              
              {/* Added Jobs to Mobile Link specifically for visibility */}
              {navLinks.map(link => (
                <button 
                  key={link.name} 
                  onClick={() => {
                    handleNavigation(link.href, link.external);
                    setIsMobileMenuOpen(false);
                  }} 
                  className={`text-2xl font-bold text-left flex items-center gap-3 ${link.highlight ? 'text-red-600' : 'text-gray-900'}`}
                >
                   {link.highlight && <Briefcase size={22} />}
                  {link.name}
                </button>
              ))}
            </div>

            <div className="mt-auto pb-10">
              <button onClick={() => { navigate("/login"); setIsMobileMenuOpen(false); }} className="w-full py-4 bg-red-600 text-white rounded-2xl font-bold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}