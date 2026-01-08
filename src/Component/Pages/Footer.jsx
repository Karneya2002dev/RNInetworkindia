import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import logo from "../../assets/logoo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Gallery", href: "#gallery" },
      { name: "Listings", href: "#listings" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#faq" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", color: "hover:bg-sky-700" },
  ];

  return (
    <footer className="relative bg-[#020617] text-slate-400 pt-24 pb-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column - 4/12 width */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-xl">
                <img src={logo} alt="RNI Logo" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight leading-none">
                  RNI INDIA
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-1">
                  Reality Solutions Simplified
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Empowering the real estate ecosystem through a verified network of 
              promoters and investors. Built on trust, driven by innovation.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-white bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
              <ShieldCheck size={14} className="text-primary" />
              Government RERA Authorized Partner
            </div>
          </div>

          {/* Quick Links - 2/12 width */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-primary transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links - 2/12 width */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-primary transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Hub - 4/12 width (Visual Highlight) */}
          <div className="lg:col-span-4 bg-slate-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-[2rem] space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Contact Hub</h4>
            <div className="space-y-4">
              <a href="tel:+15551234567" className="flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-500 font-bold">Call Support</p>
                  <p className="text-sm text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </a>
              <a href="mailto:info@rniestateindia.com" className="flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-500 font-bold">Email Inquiry</p>
                  <p className="text-sm text-white font-medium">info@rniestateindia.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 rounded-xl transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-500 font-bold">Headquarters</p>
                  <p className="text-sm text-white font-medium leading-tight">
                    123 Real Estate Blvd, Suite 400 <br /> Chennai, TN 600001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Social Cluster */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className={`w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 ${social.color}`}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-xs font-medium text-slate-500">
              © {currentYear} <span className="text-white">RNI Real Estate Network India Pvt Ltd.</span>
            </p>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest">
              Reality Solutions Simplified • ISO 9001:2015 Certified
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;