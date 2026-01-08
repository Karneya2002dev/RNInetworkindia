import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSend,
  FiUser,
  FiHome,
  FiMessageSquare,
  FiArrowRight,
  FiCheckCircle,
  FiChevronLeft,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const InnovativeForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    propertyId: "",
    location: "",
    budget: "",
    message: "",
    contactMethod: "WhatsApp",
  });
  
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => navigate('/home'), 3000);
  };

  // Reusable Input Class to avoid repetition and ensure consistency
  const inputClass = "w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white font-medium outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/30 placeholder:text-slate-600";

  return (
    <div className="min-h-screen bg-[#050506] text-white px-4 py-20 md:px-8 font-sans selection:bg-cyan-500/30">
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/[0.08] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-500/[0.08] blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-4 relative">
          <div className="bg-[#0f0f12] border border-white/10 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] h-full flex flex-col shadow-2xl">
            <div className="w-14 h-14 bg-cyan-400 rounded-2xl flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              <FiHome className="text-2xl text-black" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              Find your <br />
              <span className="text-cyan-400">perfect space</span>
            </h1>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Connect with the right experts in seconds through our intelligent routing system.
            </p>

            {/* Progress Stepper */}
            <div className="space-y-8 flex-1 ">
              {[
                { id: 1, label: "Identification" },
                { id: 2, label: "Inquiry Type" },
                { id: 3, label: "Project Details" },
                { id: 4, label: "Submit Message" },
              ].map((s) => (
                <div key={s.id} className="flex items-center gap-5 group">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 border ${
                    step === s.id ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]" : 
                    step > s.id ? "bg-transparent text-cyan-400 border-cyan-400/50" : "bg-white/5 text-slate-600 border-white/10"
                  }`}>
                    {step > s.id ? <FiCheckCircle className="text-xl" /> : s.id}
                  </div>
                  <span className={`text-base font-semibold transition-colors ${step >= s.id ? "text-white" : "text-slate-600"}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Completion Bar */}
            <div className="mt-12 p-6 bg-white/[0.03] rounded-3xl border border-white/5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black">Completion</span>
                <span className="text-cyan-400 text-xs font-black">{Math.round((step / 4) * 100)}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM AREA */}
        <div className="lg:col-span-8">
          <form
            onSubmit={handleSubmit}
            className="bg-[#0f0f12] border border-white/10 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-16 min-h-[650px] shadow-2xl flex flex-col relative"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex-1 flex flex-col"
                >
                  <div className="mb-10">
                    {step > 1 && (
                      <button type="button" onClick={prev} className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors mb-6 text-sm font-bold uppercase tracking-widest">
                        <FiChevronLeft /> Back
                      </button>
                    )}
                    <div className="space-y-2">
                      <span className="text-cyan-400 font-black tracking-[0.3em] text-[10px] uppercase">Step 0{step}</span>
                      <h3 className="text-4xl font-bold tracking-tight">
                        {step === 1 ? "Identification" : 
                         step === 2 ? "What are you looking for?" : 
                         step === 3 ? "Property Details" : "Finalize Message"}
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1">
                    {step === 1 && (
                      <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <FormGroup label="Full Name">
                            <input name="name" placeholder="John Doe" onChange={handleChange} className={inputClass} required />
                          </FormGroup>
                          <FormGroup label="Email Address">
                            <input name="email" type="email" placeholder="john@example.com" onChange={handleChange} className={inputClass} required />
                          </FormGroup>
                        </div>
                        <FormGroup label="Mobile Number">
                          <input name="phone" placeholder="+1 (555) 000-0000" onChange={handleChange} className={inputClass} required />
                        </FormGroup>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                        {["Buy", "Rent", "Sell", "Agent", "Build", "Other"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => { setFormData({ ...formData, inquiryType: opt }); next(); }}
                            className="group h-36 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400 transition-all duration-300 flex flex-col justify-center items-center gap-3"
                          >
                            <span className="text-xl font-bold group-hover:text-black transition-colors">{opt}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <FormGroup label="Property ID (Optional)">
                            <input name="propertyId" placeholder="#REF-9902" onChange={handleChange} className={inputClass} />
                          </FormGroup>
                          <FormGroup label="Preferred Location">
                            <input name="location" placeholder="e.g. Manhattan, NY" onChange={handleChange} className={inputClass} />
                          </FormGroup>
                        </div>
                        <FormGroup label="Expected Budget">
                          <div className="relative">
                            <input name="budget" placeholder="Budget range" onChange={handleChange} className={`${inputClass} pl-12`} />
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400 font-bold">₹</span>
                          </div>
                        </FormGroup>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-8">
                        <FormGroup label="Additional Requirements">
                          <textarea name="message" rows="5" placeholder="Tell us more about your dream space..." onChange={handleChange} className={`${inputClass} resize-none`} />
                        </FormGroup>

                        <div className="space-y-4">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Preferred Contact Method</label>
                          <div className="flex gap-4">
                            {["WhatsApp", "Email", "Phone"].map((m) => (
                              <label key={m} className="flex-1 cursor-pointer group">
                                <input type="radio" name="contactMethod" value={m} onChange={handleChange} checked={formData.contactMethod === m} className="peer hidden" />
                                <div className="py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all font-bold text-sm">
                                  {m}
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-12">
                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={next}
                        className="w-full md:w-auto px-12 py-5 rounded-2xl bg-cyan-400 text-black font-black flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all active:scale-95 uppercase tracking-wider text-sm"
                      >
                        Continue <FiArrowRight className="text-lg" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black text-lg shadow-xl hover:shadow-cyan-500/30 active:scale-[0.98] transition-all uppercase tracking-widest"
                      >
                        Submit Enquiry
                      </button>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-20 m-auto"
                >
                  <div className="w-28 h-28 mx-auto rounded-[2.5rem] bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-6xl mb-10 border border-cyan-400/20">
                    <FiCheckCircle />
                  </div>
                  <h2 className="text-5xl font-bold mb-6">Request Received</h2>
                  <p className="text-slate-400 text-xl max-w-md mx-auto leading-relaxed">
                    Our team is already on it. We'll reach out via <span className="text-white font-bold">{formData.contactMethod}</span> within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
};

const FormGroup = ({ label, children }) => (
  <div className="space-y-3 w-full">
    <label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">{label}</label>
    {children}
  </div>
);

export default InnovativeForm;