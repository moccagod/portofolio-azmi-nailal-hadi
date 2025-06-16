import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

      if (!error) setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Project Showcase
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="bg-white border-2 border-black rounded-lg p-4 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-40 object-cover border border-black rounded mb-4"
              />
              <h3 className="text-lg font-semibold border-b-2 border-black pb-1 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 mb-3">{project.description}</p>

              {project.techstack && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techstack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-black text-white px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-4 text-sm mt-auto">
                {project.demo_url && (
                  <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-600"
                  >
                    Live Demo
                  </a>
                )}
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-600"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            to="/project"
            className="inline-block px-6 py-2 border-2 border-black rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition-all"
          >
            Lihat Semua Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
