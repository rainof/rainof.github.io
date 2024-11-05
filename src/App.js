import React, { useState } from "react";
import { Menu } from "lucide-react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AchievementPage from "./pages/AchievementPage";
import CertificatePage from "./pages/CertificatePage";
import PublicationPage from "./pages/PublicationPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="border-b">
          <div className="container mx-auto px-4 flex h-14 items-center justify-between">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-gray-600 hover:text-gray-800"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } sm:flex flex-col sm:flex-row sm:w-full sm:justify-center sm:gap-6 absolute sm:relative left-0 right-0 top-14 sm:top-0 bg-white sm:bg-transparent z-50 border-b sm:border-0 shadow-md sm:shadow-none`}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }`
                }
              >
                Home
              </NavLink>
              {["Projects", "Achievements", "Certificates", "Publications"].map(
                (item) => (
                  <NavLink
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "text-gray-600 hover:text-gray-800"
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                )
              )}
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/achievements" element={<AchievementPage />} />
          <Route path="/certificates" element={<CertificatePage />} />
          <Route path="/publications" element={<PublicationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
