import React, { useState } from "react";
import { Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-orange-100 text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="container mx-auto px-4 flex h-12 items-center justify-between">
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors bg-orange-100 ${
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
                    `px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors bg-orange-100 ${
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
                    `px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors bg-orange-100 ${
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
                    `px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors bg-orange-100 ${
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
                    `px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors bg-orange-100 ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-gray-600 hover:text-gray-800"
                    }`
                  }
                >
                  Resume
                </NavLink>
              </li>
            </ul>
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
