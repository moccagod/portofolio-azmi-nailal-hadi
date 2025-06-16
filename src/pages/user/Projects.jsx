import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client";
import PageWrapper from "../../components/PageWrapper";

const PAGE_SIZE = 6;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

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
      setHasMore(data.length === PAGE_SIZE); // Jika kurang dari PAGE_SIZE, berarti tidak ada next
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border-4 border-black rounded-lg p-4 hover:scale-[1.02] transition-transform"
                >
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-40 object-cover border-2 border-black rounded mb-4"
                  />
                  <h2 className="text-xl font-bold border-b-2 border-black mb-2 pb-1">
                    {project.title}
                  </h2>
                  <p className="text-gray-800 mb-4">{project.description}</p>

                  {project.techstack && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techstack.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs border border-black px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4 mt-auto">
                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline hover:text-blue-600"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline hover:text-blue-600"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
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
      </div>
    </PageWrapper>
  );
};

export default Projects;
