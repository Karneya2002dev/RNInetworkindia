import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoo.png";
import { EyeOff } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("User");
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    reraNumber: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const steps = [
    { id: 1, label: "Identity", desc: "Basic account details" },
    { id: 2, label: "Profile", desc: "Role information" },
    { id: 3, label: "Security", desc: "Account protection" },
  ];

  const handleSubmit = () => {
    // Step 3 validation
    if (!formData.password || !formData.confirmPassword) {
      return alert("Password & Confirm Password are required");
    }
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }
    if (!formData.agree) {
      return alert("You must accept Terms & Conditions");
    }

    // Normally, send formData to API here
    console.log("REGISTER DATA:", { role, ...formData });
    alert("Account created successfully!");
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center  justify-center px-4 sm:px-6 lg:px-10 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-5xl relative top-10 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* SIDEBAR */}
        <div className="hidden md:flex md:w-1/3 bg-slate-700 p-8 lg:p-10 text-white flex-col justify-between">
          <img src={logo} alt="Logo" className="w-24 invert mb-6 mx-auto" />
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Create your professional account
            </h2>
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.id} className="flex items-start gap-3">
                  <div
                    className={`mt-1 w-2 h-2 rounded-full ${
                      step >= s.id
                        ? "bg-blue-500 ring-4 ring-blue-500/30"
                        : "bg-slate-600"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-semibold">{s.label}</p>
                    <p className="text-xs text-slate-400">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 p-4 rounded-xl mt-6">
            <p className="text-xs text-slate-300">Live Preview</p>
            <p className="text-sm font-semibold truncate">
              {formData.fullName || "Your Name"}
            </p>
            <p className="text-xs text-blue-400">{role} Account</p>
          </div>
        </div>

        {/* FORM */}
        <div className="flex-1 p-6 sm:p-8 lg:p-12">
          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl sm:text-2xl font-bold">
                  Select Account Type
                </h3>

                <div className="flex bg-slate-100 p-1 rounded-xl">
                  {["User", "Agent", "Builder"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`flex-1 py-3 text-sm font-bold rounded-lg transition ${
                        role === r
                          ? "bg-white shadow text-blue-600"
                          : "text-slate-500"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>

                <InputField
                  label="Full Name *"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Email *"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <PrimaryButton label="Continue" onClick={() => setStep(2)} />
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <button
                  onClick={() => setStep(1)}
                  className="text-sm font-semibold text-blue-600"
                >
                  ← Back
                </button>

                <h3 className="text-xl sm:text-2xl font-bold">{role} Information</h3>

                {role !== "User" && (
                  <>
                    <InputField
                      label="Company Name *"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="RERA Number *"
                      name="reraNumber"
                      value={formData.reraNumber}
                      onChange={handleChange}
                      required
                    />
                  </>
                )}

                <InputField
                  label="Mobile Number *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <PrimaryButton label="Next" onClick={() => setStep(3)} />
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <button
                  onClick={() => setStep(2)}
                  className="text-sm font-semibold text-blue-600"
                >
                  ← Back
                </button>

                <h3 className="text-xl sm:text-2xl font-bold">Secure Your Account</h3>

                <InputField
                  label="Password *"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  toggle={() => setShowPassword(!showPassword)}
                  required
                />

                <InputField
                  label="Confirm Password *"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  toggle={() => setShowConfirmPassword(!showConfirmPassword)}
                  required
                />

                <label className="flex gap-3 items-start bg-slate-50 p-4 rounded-xl border text-xs">
                  <input
                    type="checkbox"
                    name="agree"
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <span>
                    {role === "User" &&
                      "I agree to Terms & Conditions for real estate users."}
                    {role === "Agent" &&
                      "I agree to Terms & Conditions for real estate agents."}
                    {role === "Builder" &&
                      "I agree to Terms & Conditions for real estate builders."}
                  </span>
                </label>

                <PrimaryButton label="Create Account" onClick={handleSubmit} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;

/* ---------------- COMPONENTS ---------------- */

const InputField = ({ label, toggle, ...props }) => (
  <div className="space-y-1 relative">
    <label className="text-xs font-bold uppercase text-slate-400">{label}</label>
    <input
      {...props}
      className="w-full border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-blue-500 outline-none"
    />
    {toggle && (
      <button
        type="button"
        onClick={toggle}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      >
        {props.type === "password" ? <Eye size={18} /> : <EyeOff size={18} />}
      </button>
    )}
  </div>
);

const PrimaryButton = ({ label, onClick }) => (
  <motion.button
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    type="button"
    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700"
  >
    {label}
  </motion.button>
);
