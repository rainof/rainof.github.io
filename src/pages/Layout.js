import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-orange-100 text-white">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex space-x-4">
            <li>
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
            </li>
            <li>
              <NavLink
                to="/aboutme"
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
            </li>
            <li>
              <NavLink
                to="/projects"
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
            </li>
            <li>
              <NavLink
                to="/achievements"
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
            </li>
            <li>
              <NavLink
                to="/resume"
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
            </li>
          </ul>
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
