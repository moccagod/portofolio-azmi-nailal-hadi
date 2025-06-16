import { useState } from "react";
import { motion } from "framer-motion";
import { LightBulbIcon, UsersIcon, BoltIcon } from "@heroicons/react/24/solid";

const reasons = [
  {
    title: "Detail-Oriented & UI/UX Focused",
    description:
      "I prioritize user experience and clean, consistent design. Good UI is not just about aesthetics, but also about functionality.",
    icon: <LightBulbIcon className="w-8 h-8 text-white" />,
    bg: "bg-yellow-500",
    image:
      "https://mhzgrohlrvvqnsvswylk.supabase.co/storage/v1/object/public/images//coding.png",
  },
  {
    title: "Team Collaboration Experience",
    description:
      "My experience in organizations and freelance projects has taught me the importance of communication, collaboration, and clear task division.",
    icon: <UsersIcon className="w-8 h-8 text-white" />,
    bg: "bg-blue-600",
    image:
      "https://mhzgrohlrvvqnsvswylk.supabase.co/storage/v1/object/public/images//computer-engineer.png",
  },
  {
    title: "Fast Learner & Adaptable",
    description:
      "I enjoy learning new things and can quickly adapt to new technologies, tools, and workflows.",
    icon: <BoltIcon className="w-8 h-8 text-white" />,
    bg: "bg-green-600",
    image:
      "https://mhzgrohlrvvqnsvswylk.supabase.co/storage/v1/object/public/images//coding%20(1).png",
  },
];

const WhyHireMeSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-center mb-16">
          Why Hire Me?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left - Image */}
          <div className="md:col-span-1 flex justify-center items-start">
            <motion.img
              key={reasons[selectedIndex].image}
              src={reasons[selectedIndex].image}
              alt={reasons[selectedIndex].title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-[400px] h-auto object-contain"
            />
          </div>

          {/* Right - Reason Cards */}
          <div className="md:col-span-2 flex flex-col gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => setSelectedIndex(index)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`relative flex items-start gap-4 p-6 rounded-2xl border-2 border-black shadow-[6px_6px_0px_black] bg-opacity-70 cursor-pointer transform ${
                  index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"
                } ${index === selectedIndex ? "bg-yellow-100" : "bg-gray-100"}`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow border-2 border-black ${reason.bg} shrink-0`}
                >
                  {reason.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-700">{reason.description}</p>
                </div>

                {/* Optional background effect */}
                <div className="absolute -z-10 inset-0 rounded-2xl bg-white opacity-20 blur-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;
