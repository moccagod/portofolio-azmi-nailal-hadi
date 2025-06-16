import { Link } from "react-router-dom";
import { Download, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  { text: "Front End Web Developer", color: "text-blue-600" },
  { text: "Teacher", color: "text-green-600" },
  { text: "IT Support", color: "text-purple-600" },
  { text: "Student", color: "text-pink-600" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState(roles[0].color);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % roles.length;
      setCurrentIndex(nextIndex);
      setCurrentColor(roles[nextIndex].color);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="min-h-[80vh] flex items-center px-6 py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Kanan: Gambar */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://mhzgrohlrvvqnsvswylk.supabase.co/storage/v1/object/public/images/reading.png"
            alt="Web Developer Illustration"
            className="w-[80%] max-w-sm md:max-w-full"
          />
        </motion.div>

        {/* Kiri: Teks */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-xl md:text-2xl text-gray-700 mb-1">Hi, I’m</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 mb-2">
            Azmi Nailal Hadi
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-medium mb-6 leading-relaxed">
            I'm a{" "}
            <span className={`font-semibold ${currentColor}`}>
              <Typewriter
                words={roles.map((r) => r.text)}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>

          {/* Tombol */}
          <div className="flex flex-wrap gap-4 mb-4 justify-center md:justify-start">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded shadow-[3px_3px_0px_black] hover:bg-gray-800 hover:scale-105 transition-transform duration-200"
            >
              <Download size={18} />
              Download CV
            </a>
            <Link
              to="/projects"
              className="flex items-center gap-2 border-2 border-black text-black px-5 py-3 rounded shadow-[3px_3px_0px_black] hover:bg-black hover:text-white hover:scale-105 transition-transform duration-200"
            >
              <Briefcase size={18} />
              My Projects
            </Link>
          </div>

          {/* Sosial Media */}
          <div className="flex gap-4 justify-center md:justify-start text-2xl text-gray-700 mt-2">
            <a
              href="https://github.com/azminailalhadi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/azminailalhadi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
