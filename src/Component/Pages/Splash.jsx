// src/Components/SplashScreen.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoo.png";
import splashVideo from "../../assets/splash.mp4"; // 🎥 add your video in assets

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-50">
      {/* 🎬 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={splashVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animated content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
        {/* 🟣 Move logo to top with animation */}
        <motion.div
          className="absolute top-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={logo}
            alt="Logo"
            className="w-42 h-32 object-contain drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Text below center */}
        <motion.p
          className="absolute bottom-24 text-gray-100 text-lg sm:text-xl tracking-wider font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Welcome to{" "}
          <span className="font-semibold text-primary">Manage My Estate</span>
        </motion.p>
      </div>
    </div>
  );
};

export default SplashScreen;
