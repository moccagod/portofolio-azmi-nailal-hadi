import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Public Pages
import Home from "../pages/user/Home";
import Contact from "../pages/user/Contact";
import Projects from "../pages/user/Projects";

// Admin Pages
import LoginPage from "../pages/admin/LoginPage";
import DashboardLayout from "../pages/admin/DashboardLayout";
import DashboardHome from "../pages/admin/DashboardHome";
import ManageProjects from "../pages/admin/ManageProjects";
import AddProject from "../pages/admin/AddProject";
import EditProject from "../pages/admin/EditProject";

// Auth
import ProtectedRoute from "../auth/ProtectedRoute";

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<LoginPage />} />

        {/* Admin Protected Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="projects" element={<ManageProjects />} />
          <Route path="projects/add" element={<AddProject />} />
          <Route path="projects/edit/:id" element={<EditProject />} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
