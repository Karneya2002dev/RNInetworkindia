import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import logo from "../../assets/logoo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F4] flex items-center justify-center px-3 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* LEFT PANEL */}
        <div className="md:w-[38%] bg-slate-900 text-white p-6 sm:p-10 flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 w-28 h-28 bg-blue-600/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-indigo-600/20 blur-3xl rounded-full" />

          <div className="relative z-10 text-center md:text-left flex flex-col items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-16 sm:w-20 mb-6 mx-auto md:mx-0 invert"
            />
            <h2 className="text-2xl sm:text-3xl font-black leading-tight">
              Manage your <br />
              <span className="text-blue-400">Property Vision</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xs mx-auto md:mx-0">
              Manage listings, track leads and close deals faster.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 p-6 sm:p-10 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <header className="mb-6 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-black">Login</h3>
              <p className="text-slate-400 text-sm mt-2">
                Welcome back! Please enter your details.
              </p>
            </header>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* EMAIL */}
              <div>
                <label className="text-[11px] font-bold uppercase text-slate-400 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full mt-2 bg-slate-50 rounded-xl px-4 py-3 text-sm border-2 border-transparent focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 outline-none"
                  required
                />
              </div>

              {/* PASSWORD */}
              <div>
                <div className="flex justify-between text-[11px] font-bold uppercase text-slate-400 ml-1">
                  <span>Password</span>
                  <button
                    type="button"
                    className="text-blue-600 hover:underline"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 rounded-xl px-4 py-3 text-sm border-2 border-transparent focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-xs tracking-widest uppercase flex justify-center items-center"
              >
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div
                      key="loader"
                      className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"
                    />
                  ) : (
                    <motion.span key="text" className="flex items-center gap-2">
                      <LogIn size={16} /> Log In
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>

            {/* FOOTER */}
            <footer className="mt-8 text-center">
              <p className="text-xs text-slate-400 mb-3">
                Don’t have an account?
              </p>
              <Link
                to="/RegisterForm"
                className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                Join Now
              </Link>
            </footer>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
