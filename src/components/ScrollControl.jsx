import { useEffect, useState, useRef } from "react";
import { PauseCircle, PlayCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollControl({ autoStart = false }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const intervalRef = useRef(null);

  // Aktifkan scroll otomatis jika autoStart true
  useEffect(() => {
    if (autoStart) {
      setIsScrolling(true);
    }
  }, [autoStart]);

  useEffect(() => {
    if (isScrolling) {
      intervalRef.current = setInterval(() => {
        window.scrollBy({ top: 6, behavior: "smooth" });

        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
          clearInterval(intervalRef.current);
          setIsScrolling(false);
        }
      }, 60);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isScrolling]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={() => setIsScrolling(!isScrolling)}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 
            ${isScrolling ? "bg-pink-600/60" : "bg-black/40"} 
            hover:scale-110 hover:shadow-pink-400/40 
            ${isScrolling ? "ring-2 ring-pink-400" : ""}`}
        >
          {isScrolling ? (
            <PauseCircle size={20} className="text-white" />
          ) : (
            <PlayCircle size={20} className="text-white" />
          )}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
