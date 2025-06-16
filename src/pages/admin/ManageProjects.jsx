import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client";
import { Link } from "react-router-dom";

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Error fetching projects:", error);
    } else {
      setProjects(data);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Yakin ingin menghapus project ini?");
    if (!confirm) return;

    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) {
      alert("Gagal menghapus project.");
      console.error(error);
    } else {
      setProjects(projects.filter((proj) => proj.id !== id));
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Manage Projects</h1>
        <Link
          to="/admin/projects/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Tambah Project
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : projects.length === 0 ? (
        <p>Tidak ada project.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow p-4 rounded">
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-32 object-cover mb-2 rounded"
              />
              <h2 className="font-bold text-lg">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="flex gap-3 mt-3">
                <Link
                  to={`/admin/projects/edit/${project.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProjects;
