import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Save, Sparkles, PenLine, Layers, Mail, ArrowRight, ArrowLeft, Upload, X } from "lucide-react";
import Toast from "../Components/Toast";
import { defaultData } from "../data/Data";

const STORAGE_KEY = "microsite_data";

export default function FormPage() {
  const navigate = useNavigate();
  const [toast, setToast] = useState({ show: false, msg: "" });
  const [form, setForm] = useState(defaultData);
  const [step, setStep] = useState(0);
  const sections = ["Hero", "About", "Services", "Footer"];

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setForm(JSON.parse(saved));
  }, []);

  const showToast = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: "" }), 3000);
  };

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    showToast("Micro-site updated successfully!");
    setTimeout(() => navigate("/"), 1500);
  };

  const handleImage = (e, path) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        setForm(prev => {
          const keys = path.split(".");
          let obj = { ...prev };
          let ref = obj;
          for (let i = 0; i < keys.length - 1; i++) ref = ref[keys[i]];
          ref[keys[keys.length - 1]] = base64;
          return obj;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (path) => {
    setForm(prev => {
      const keys = path.split(".");
      let obj = { ...prev };
      let ref = obj;
      for (let i = 0; i < keys.length - 1; i++) ref = ref[keys[i]];
      ref[keys[keys.length - 1]] = "";
      return obj;
    });
  };

  const addService = () => {
    setForm({
      ...form,
      services: [...form.services, { icon: "Star", title: "New Service", description: "" }],
    });
  };

  const removeService = (i) => {
    setForm({ ...form, services: form.services.filter((_, idx) => idx !== i) });
  };

  const updateService = (i, field, value) => {
    const updated = [...form.services];
    updated[i][field] = value;
    setForm({ ...form, services: updated });
  };

  const next = () => setStep(Math.min(step + 1, sections.length - 1));
  const prev = () => setStep(Math.max(step - 1, 0));

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-pink-50 py-16">
      <Toast show={toast.show} message={toast.msg} />

      {/* Progress */}
      <div className="container mx-auto px-6 max-w-4xl mb-12">
        <div className="flex justify-between">
          {sections.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${i <= step ? "bg-indigo-600 text-white" : "bg-gray-300"}`}>
                {i + 1}
              </div>
              {i < sections.length - 1 && <div className={`w-32 h-1 ${i < step ? "bg-indigo-600" : "bg-gray-300"}`} />}
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-xl font-bold text-indigo-600">{sections[step]}</p>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl"
          >
            {step === 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3"><Sparkles className="w-8 h-8" /> Hero</h2>
                <Input label="Title" value={form.hero.title} onChange={(v) => setForm({ ...form, hero: { ...form.hero, title: v } })} />
                <Input label="Subtitle" value={form.hero.subtitle} onChange={(v) => setForm({ ...form, hero: { ...form.hero, subtitle: v } })} />
                <Input label="Button Text" value={form.hero.buttonText} onChange={(v) => setForm({ ...form, hero: { ...form.hero, buttonText: v } })} />
                <FileUpload label="Background" preview={form.hero.bgImage} onChange={(e) => handleImage(e, "hero.bgImage")} onRemove={() => removeImage("hero.bgImage")} />
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3"><PenLine className="w-8 h-8" /> About</h2>
                <Input label="Heading" value={form.about.heading} onChange={(v) => setForm({ ...form, about: { ...form.about, heading: v } })} />
                <Textarea label="Description" value={form.about.description} onChange={(v) => setForm({ ...form, about: { ...form.about, description: v } })} />
                <FileUpload label="Image" preview={form.about.image} onChange={(e) => handleImage(e, "about.image")} onRemove={() => removeImage("about.image")} />
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3"><Layers className="w-8 h-8" /> Services</h2>
                {form.services.map((s, i) => (
                  <div key={i} className="bg-white/70 p-6 rounded-2xl mb-6 shadow-md border border-indigo-100 relative">
                    <button onClick={() => removeService(i)} className="absolute top-4 right-4 text-red-500"><X className="w-5 h-5" /></button>
                    <Input label="Icon" value={s.icon} onChange={(v) => updateService(i, "icon", v)} />
                    <Input label="Title" value={s.title} onChange={(v) => updateService(i, "title", v)} />
                    <Textarea label="Description" value={s.description} onChange={(v) => updateService(i, "description", v)} />
                  </div>
                ))}
                <button onClick={addService} className="w-full py-4 border-2 border-dashed border-indigo-400 rounded-2xl text-indigo-600 font-bold">
                  <Plus className="w-8 h-8 mx-auto" />
                </button>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3"><Mail className="w-8 h-8" /> Footer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Email" value={form.contact.email} onChange={(v) => setForm({ ...form, contact: { ...form.contact, email: v } })} />
                  <Input label="Phone" value={form.contact.phone} onChange={(v) => setForm({ ...form, contact: { ...form.contact, phone: v } })} />
                </div>
                <Input label="Facebook" value={form.contact.social.facebook} onChange={(v) => setForm({ ...form, contact: { ...form.contact, social: { ...form.contact.social, facebook: v } } })} />
                <Input label="Twitter" value={form.contact.social.twitter} onChange={(v) => setForm({ ...form, contact: { ...form.contact, social: { ...form.contact.social, twitter: v } } })} />
                <Input label="LinkedIn" value={form.contact.social.linkedin} onChange={(v) => setForm({ ...form, contact: { ...form.contact, social: { ...form.contact.social, linkedin: v } } })} />
                <Input label="Copyright" value={form.contact.footerText} onChange={(v) => setForm({ ...form, contact: { ...form.contact, footerText: v } })} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-12">
          <button onClick={prev} disabled={step === 0} className="px-8 py-4 bg-gray-200 rounded-full font-bold disabled:opacity-50">
            <ArrowLeft className="inline w-5 h-5" /> Previous
          </button>
          {step === 3 ? (
            <button onClick={handleSave} className="px-10 py-4 bg-linear-to-r from-indigo-600 to-pink-600 text-white rounded-full font-bold shadow-lg">
              <Save className="inline w-6 h-6" /> Save & Launch
            </button>
          ) : (
            <button onClick={next} className="px-10 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-lg">
              Next <ArrowRight className="inline w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* Helpers */
function Input({ label, value, onChange }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-bold text-gray-700 mb-2">{label}</label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-indigo-500 bg-white/80"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-bold text-gray-700 mb-2">{label}</label>
      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        rows={4}
        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-indigo-500 bg-white/80 resize-none"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function FileUpload({ label, preview, onChange, onRemove }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-bold text-gray-700 mb-3">{label}</label>
      <div className="border-2 border-dashed border-indigo-300 rounded-2xl p-8 text-center hover:border-indigo-500 transition">
        <Upload className="w-12 h-12 mx-auto text-indigo-500 mb-4" />
        <p className="text-gray-600 mb-2">Click or drop image</p>
        <input type="file" accept="image/*" onChange={onChange} className="hidden" id={label} />
        <label htmlFor={label} className="cursor-pointer text-indigo-600 font-bold">Choose File</label>
      </div>
      {preview && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 relative">
          <img src={preview} alt="preview" className="w-full h-64 object-cover rounded-2xl shadow-lg" />
          <button onClick={onRemove} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </div>
  );
}