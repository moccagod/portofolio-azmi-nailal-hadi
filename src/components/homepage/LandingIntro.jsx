import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LandingIntro = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 500); // jeda pendek agar animasi selesai dulu
    }, 4000); // durasi landing
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ backgroundColor: "#000000" }}
          animate={{ backgroundColor: "#f5f5f5" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Expanding Circle */}
          <motion.div
            className="absolute w-20 h-20 rounded-full bg-black blur-sm"
            initial={{ scale: 1 }}
            animate={{ scale: 60 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Teks Konten */}
          <motion.div
            className="z-10 text-center"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 tracking-wide">
              Azmi Nailal Hadi
            </h1>
            <motion.p
              className="text-md sm:text-lg text-gray-200 font-mono border-r-2 pr-2 whitespace-nowrap overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "30ch" }}
              transition={{ delay: 2.2, duration: 1, ease: "easeInOut" }}
            >
              Frontend Web Developer
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LandingIntro;
