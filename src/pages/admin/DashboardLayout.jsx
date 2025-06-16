import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/client";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav className="space-y-2">
          <button
            onClick={() => navigate("/admin")}
            className={`block px-3 py-2 rounded w-full text-left ${
              isActive("/admin") ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/admin/projects")}
            className={`block px-3 py-2 rounded w-full text-left ${
              isActive("/admin/projects") ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Manage Projects
          </button>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded w-full"
        >
          Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
