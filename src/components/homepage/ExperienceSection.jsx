import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "Mar 2024 - Feb 2025",
    title: "Ketua Himpunan Mahasiswa",
    place: "Fasilkom, Universitas Esa Unggul",
    description:
      "Memimpin organisasi mahasiswa jurusan Teknik Informatika, mengatur program kerja, serta menjalin kolaborasi dengan pihak eksternal.",
  },
  {
    year: "2022 - Sekarang",
    title: "Frontend Web Developer",
    place: "Freelance / Personal Projects",
    description:
      "Membangun berbagai proyek website menggunakan React, Tailwind CSS, dan Supabase. Fokus pada UI/UX dan performa web.",
  },
  {
    year: "Oktober 2024 - Sekarang",
    title: "IT Support",
    place: "SDS Merpati",
    description:
      "Memberikan dukungan teknis untuk perangkat dan jaringan sekolah.",
  },
  {
    year: "Januari 2025 - Sekarang",
    title: "Guru TIK",
    place: "SMK AL-IRSYAD AL-ISLAMYAH",
    description:
      "Mengajar dasar-dasar TIK kepada siswa. Mencakup pengenalan komputer, internet, dan aplikasi produktivitas.",
  },
];

const ExperienceSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || window.innerWidth < 768) return; // auto scroll hanya di desktop

    const scrollAmount = 1; // px per frame
    let animationFrameId;

    const autoScroll = () => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollLeft = 0; // kembali ke awal
      } else {
        el.scrollLeft += scrollAmount;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-10">
          Pengalaman
        </h2>

        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 min-w-full px-2">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-white border-2 border-black shadow-[4px_4px_0px_black] rounded-xl p-6"
              >
                <p className="text-sm text-gray-500 font-mono">{exp.year}</p>
                <h3 className="text-lg font-bold mt-1">{exp.title}</h3>
                <p className="text-sm italic text-gray-600">{exp.place}</p>
                <p className="text-sm text-gray-800 mt-3">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
