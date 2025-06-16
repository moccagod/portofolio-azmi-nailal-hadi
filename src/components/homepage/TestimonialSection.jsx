import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Freelance Teammate",
    image: "https://i.pravatar.cc/100?img=1",
    comment:
      "Azmi is a responsive teammate who pays great attention to detail. It's a pleasure working with him!",
  },
  {
    name: "Nadia Permata",
    role: "Organization Leader",
    image: "https://i.pravatar.cc/100?img=2",
    comment:
      "Always reliable when managing work programs. His leadership is truly inspiring.",
  },
  {
    name: "Rafi Alfarizi",
    role: "Supervising Teacher",
    image: "https://i.pravatar.cc/100?img=3",
    comment:
      "Azmi is an outstanding student. He has a strong curiosity and great enthusiasm for learning.",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-12">
          What They Say
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0px_black] max-w-xl mx-auto"
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-black"
              />
              <p className="text-gray-700 text-sm mb-4 italic">
                "{testimonials[currentIndex].comment}"
              </p>
              <h4 className="text-lg font-bold">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-500 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Manual Navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full border border-black ${
                  i === currentIndex ? "bg-black" : "bg-white"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
