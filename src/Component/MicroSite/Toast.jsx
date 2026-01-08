import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Toast({ show, message }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
        >
          <CheckCircle className="w-5 h-5" />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}