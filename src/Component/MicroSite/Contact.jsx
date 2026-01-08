import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const STORAGE_KEY = "microsite_data";

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    saved.leads = saved.leads || [];
    saved.leads.push({ ...form, date: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Send us an Enquiry</h2>
        <motion.form
          onSubmit={submit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input placeholder="Name" required className="px-4 py-3 border rounded-lg" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Email" type="email" required className="px-4 py-3 border rounded-lg" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input placeholder="Phone" className="px-4 py-3 border rounded-lg md:col-span-2" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <textarea placeholder="Message" rows={5} required className="px-4 py-3 border rounded-lg md:col-span-2" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </div>
          <button type="submit" className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg flex items-center justify-center gap-2">
            <Send className="w-5 h-5" /> Send Enquiry
          </button>
          {sent && (
            <motion.div className="mt-4 text-green-600 text-center flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Thank you! We’ll contact you soon.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}