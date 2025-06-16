import { useState } from "react";
import { supabase } from "../../supabase/client";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddTech = () => {
    if (techInput.trim() && !techstack.includes(techInput.trim())) {
      setTechstack([...techstack, techInput.trim()]);
      setTechInput("");
    }
  };

  const handleRemoveTech = (tech) => {
    setTechstack(techstack.filter((t) => t !== tech));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("projects").insert({
      ...form,
      techstack,
    });

    if (error) {
      alert("Gagal menambahkan project.");
      console.error(error);
    } else {
      navigate("/admin/projects");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Tambah Project Baru</h1>
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
          required
        />

        {/* Techstack Input */}
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
          {loading ? "Menyimpan..." : "Simpan Project"}
        </button>
      </form>
    </div>
  );
};

export default AddProject;
