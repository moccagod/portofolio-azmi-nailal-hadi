import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/admin");
    });
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email wajib diisi.";
    if (!password) newErrors.password = "Password wajib diisi.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (message, type = "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      showToast("Login gagal: " + error.message, "error");
    } else {
      showToast("Login berhasil!", "success");
      setTimeout(() => navigate("/admin"), 1000);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4 relative">
      {toast && (
        <div
          className={`absolute top-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded shadow border-2 text-sm font-semibold ${
            toast.type === "success"
              ? "bg-green-100 border-green-600 text-green-700"
              : "bg-red-100 border-red-600 text-red-700"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="border-4 border-black rounded-lg p-8 w-full max-w-sm shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center border-b border-black pb-2">
          Login Admin
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className={`w-full border-2 rounded px-3 py-2 ${
                errors.email ? "border-red-500" : "border-black"
              } focus:outline-none focus:ring-2 focus:ring-black`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`w-full border-2 rounded px-3 py-2 ${
                errors.password ? "border-red-500" : "border-black"
              } focus:outline-none focus:ring-2 focus:ring-black`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Sembunyikan" : "Lihat Password"}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.94 17.94A10.954 10.954 0 0112 19c-5 0-9.27-3.11-11-7.5a11.052 11.052 0 014.6-5.28M2 2l20 20M9.53 9.53a3 3 0 014.24 4.24" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </span>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white font-semibold px-4 py-2 rounded border-2 border-black hover:bg-white hover:text-black transition flex justify-center items-center gap-2"
          >
            {loading && (
              <svg
                className="animate-spin w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            )}
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button
          onClick={() => navigate("/")}
          className="w-full text-sm underline text-center mt-4 hover:text-gray-700 transition"
        >
          ← Kembali ke Homepage
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
