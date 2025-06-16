import StackIcon from "tech-stack-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const techs = [
  {
    name: "html5",
    label: "HTML5",
    desc: "The basic structure of web pages with clean semantic markup.",
  },
  {
    name: "css3",
    label: "CSS3",
    desc: "Styling the visual appearance of pages to be attractive and responsive.",
  },
  {
    name: "js",
    label: "JavaScript",
    desc: "Interactive scripting language to bring websites to life.",
  },
  {
    name: "react",
    label: "React",
    desc: "A component-based frontend library for building modern UIs.",
  },
  {
    name: "tailwindcss",
    label: "Tailwind CSS",
    desc: "Utility-first CSS framework for fast and flexible styling.",
  },
  {
    name: "git",
    label: "Git",
    desc: "Version control system to manage development history.",
  },
  {
    name: "github",
    label: "GitHub",
    desc: "A platform for hosting and collaborating on Git-based projects.",
  },
  {
    name: "supabase",
    label: "Supabase",
    desc: "Realtime backend with built-in database and authentication.",
  },
];

const TechSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techs.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const activeTech = techs[activeIndex];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Right - Active tech detail */}
          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-lg border-2 border-black rounded-xl shadow-[4px_4px_0px_black] bg-white p-6"
              >
                <div className="flex items-center gap-5">
                  {/* Left - Icon */}
                  <StackIcon name={activeTech.name} size={60} />

                  {/* Right - Content */}
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-1">
                      {activeTech.label}
                    </h3>
                    <p className="text-gray-700 text-sm">{activeTech.desc}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left - All icons grid */}
          <div className="grid grid-cols-4 gap-6 place-items-center">
            {techs.map((tech) => (
              <div
                key={tech.name}
                className={`p-3 rounded-xl border-2 border-black shadow-[3px_3px_0px_black] bg-white transition-transform duration-300 ${
                  tech.name === activeTech.name ? "scale-110 bg-gray-100" : ""
                }`}
              >
                <StackIcon name={tech.name} size={50} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
