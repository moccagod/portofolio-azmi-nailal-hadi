import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/client";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    github_url: "",
    demo_url: "",
    image_url: "",
  });
  const [techstack, setTechstack] = useState([]);
  const [techInput, setTechInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching project:", error);
      } else {
        setForm({
          title: data.title,
          description: data.description,
          github_url: data.github_url,
          demo_url: data.demo_url,
          image_url: data.image_url || "",
        });
        setTechstack(data.techstack || []);
      }
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddTech = () => {
    const trimmed = techInput.trim();
    if (trimmed && !techstack.includes(trimmed)) {
      setTechstack([...techstack, trimmed]);
      setTechInput("");
    }
  };

  const handleRemoveTech = (tech) => {
    setTechstack(techstack.filter((t) => t !== tech));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("projects")
      .update({ ...form, techstack })
      .eq("id", id);

    if (error) {
      alert("Gagal menyimpan perubahan.");
      console.error(error);
    } else {
      navigate("/admin/projects");
    }

    setLoading(false);
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Edit Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Judul Project"
          className="w-full border p-2 rounded"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Deskripsi singkat"
          className="w-full border p-2 rounded"
          value={form.description}
          onChange={handleChange}
          rows={4}
          required
        />
        <input
          type="url"
          name="github_url"
          placeholder="GitHub URL"
          className="w-full border p-2 rounded"
          value={form.github_url}
          onChange={handleChange}
        />
        <input
          type="url"
          name="demo_url"
          placeholder="Demo URL"
          className="w-full border p-2 rounded"
          value={form.demo_url}
          onChange={handleChange}
        />
        <input
          type="url"
          name="image_url"
          placeholder="URL Gambar (thumbnail)"
          className="w-full border p-2 rounded"
          value={form.image_url}
          onChange={handleChange}
        />

        {form.image_url && (
          <img
            src={form.image_url}
            alt="Thumbnail Preview"
            className="w-40 rounded"
          />
        )}

        {/* Tech Stack */}
        <div>
          <label className="block mb-1 font-medium">Tech Stack</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Contoh: React"
              className="flex-1 border p-2 rounded"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddTech}
              className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700"
            >
              Tambah
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {techstack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-sm px-2 py-1 rounded-full flex items-center gap-1"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => handleRemoveTech(tech)}
                  className="text-red-600 font-bold hover:text-red-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </form>
    </div>
  );
};

export default EditProject;
