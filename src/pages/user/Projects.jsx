import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client";
import PageWrapper from "../../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";

const PAGE_SIZE = 6;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchProjects = async (pageIndex) => {
    setLoading(true);
    const from = pageIndex * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) {
      console.error("Error fetching projects:", error);
    } else {
      setProjects(data);
      setHasMore(data.length === PAGE_SIZE);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProjects(page);
  }, [page]);

  const handleNext = () => {
    if (hasMore) setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white text-black py-10 px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 border-black border-b-4 inline-block pb-2">
          Project Showcase
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openModal(project)}
                  className="cursor-pointer bg-white border-4 border-black rounded-lg p-2 hover:scale-[1.02] transition-transform"
                >
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full md:h-80 object-cover border-2 border-black rounded mb-2"
                  />
                  <h2 className="text-lg font-bold text-center border-t border-black pt-1">
                    {project.title}
                  </h2>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={handlePrev}
                disabled={page === 0}
                className="px-4 py-2 border-2 border-black rounded bg-white hover:bg-black hover:text-white transition"
              >
                Previous
              </button>
              <span className="text-sm font-medium">Page {page + 1}</span>
              <button
                onClick={handleNext}
                disabled={!hasMore}
                className="px-4 py-2 border-2 border-black rounded bg-white hover:bg-black hover:text-white transition"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center"
              onClick={closeModal}
            >
              <motion.div
                key="modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white border-4 border-black rounded-lg w-full max-w-xl mx-4 p-6 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-black text-xl font-bold hover:text-red-600"
                >
                  &times;
                </button>

                <img
                  src={selectedProject.image_url}
                  alt={selectedProject.title}
                  className="w-full h-60 object-cover border-2 border-black rounded mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="mb-4 text-gray-800">
                  {selectedProject.description}
                </p>

                {selectedProject.techstack?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.techstack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs border border-black px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4">
                  {selectedProject.demo_url && (
                    <a
                      href={selectedProject.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-600 text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  {selectedProject.github_url && (
                    <a
                      href={selectedProject.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-600 text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
};

export default Projects;
