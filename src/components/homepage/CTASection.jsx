import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Illustration Image */}
        <motion.img
          src="https://mhzgrohlrvvqnsvswylk.supabase.co/storage/v1/object/public/images//rejected.png"
          alt="Computer Engineer"
          className="w-full max-w-md mx-auto drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        {/* Right - Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl lg:text-7xl font-bold mb-4 text-black">
            Interested in Collaborating?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Let’s work together to build digital solutions. Open to freelance
            work, team projects, or any kind of collaboration.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_black] hover:bg-yellow-300 transition"
          >
            Contact Me Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
