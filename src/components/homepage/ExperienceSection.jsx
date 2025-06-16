import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "Mar 2024 - Feb 2025",
    title: "Student Association President",
    place: "Faculty of Computer Science, Esa Unggul University",
    description:
      "Led the Informatics Engineering student organization, managed work programs, and built collaborations with external partners.",
  },
  {
    year: "2022 - Present",
    title: "Frontend Web Developer",
    place: "Freelance / Personal Projects",
    description:
      "Developed various web projects using React, Tailwind CSS, and Supabase. Focused on UI/UX and web performance.",
  },
  {
    year: "October 2024 - Present",
    title: "IT Support",
    place: "SDS Merpati",
    description:
      "Provided technical support for school devices and network infrastructure.",
  },
  {
    year: "January 2025 - Present",
    title: "ICT Teacher",
    place: "SMK AL-IRSYAD AL-ISLAMYAH",
    description:
      "Taught basic ICT to students, including introduction to computers, the internet, and productivity tools.",
  },
];

const ExperienceSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || window.innerWidth < 768) return; // Auto scroll only on desktop

    const scrollAmount = 1; // px per frame
    let animationFrameId;

    const autoScroll = () => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollLeft = 0; // Reset to beginning
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
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-center mb-10">
          Experience
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
