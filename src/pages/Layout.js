import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu } from "lucide-react"; // Ensure you have installed the lucide-react package

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-orange-100 text-white">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
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
            } sm:flex flex-col sm:flex-row sm:gap-6 absolute sm:relative left-0 right-0 top-14 sm:top-0 bg-white sm:bg-transparent z-50 border-b sm:border-0 shadow-md sm:shadow-none`}
          >
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
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
            <NavLink
              to="/aboutme"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`
              }
            >
              About Me
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/achievements"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`
              }
            >
              Achievements
            </NavLink>
            <NavLink
              to="/resume"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`
              }
            >
              Résumé
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        {/* Outlet renders child components here */}
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          © 2024 Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Layout;
