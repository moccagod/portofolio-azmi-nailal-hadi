import StackIcon from "tech-stack-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const techs = [
  {
    name: "html5",
    label: "HTML5",
    desc: "Struktur dasar halaman web dengan semantik yang rapi.",
  },
  {
    name: "css3",
    label: "CSS3",
    desc: "Styling visual halaman agar lebih menarik dan responsif.",
  },
  {
    name: "js",
    label: "JavaScript",
    desc: "Bahasa interaktif untuk menghidupkan elemen di website.",
  },
  {
    name: "react",
    label: "React",
    desc: "Library frontend berbasis komponen untuk UI modern.",
  },
  {
    name: "tailwindcss",
    label: "Tailwind CSS",
    desc: "Utility-first CSS framework untuk styling cepat dan fleksibel.",
  },
  {
    name: "git",
    label: "Git",
    desc: "Version control untuk mengelola riwayat pengembangan.",
  },
  {
    name: "github",
    label: "GitHub",
    desc: "Tempat menyimpan dan berkolaborasi proyek via Git.",
  },
  {
    name: "supabase",
    label: "Supabase",
    desc: "Backend realtime dengan database dan autentikasi.",
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
          {/* Kanan - Detail tech aktif */}
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
                  {/* ICON kiri */}
                  <StackIcon name={activeTech.name} size={60} />

                  {/* Konten kanan */}
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
          {/* Kiri - Grid semua ikon */}
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
