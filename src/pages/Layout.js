import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-orange-200 text-white">
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
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-black hover:text-white"
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
                    : "text-black hover:text-white"
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
                    : "text-black hover:text-white"
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
                    : "text-black hover:text-white"
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
                    : "text-black hover:text-white"
                }`
              }
            >
              Résumé
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
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
