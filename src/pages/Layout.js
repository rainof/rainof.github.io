import React, { useState } from "react";
import { Menu } from "lucide-react";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Achievement from "../components/Achievement";
import Resume from "../components/Resume";

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
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl text-black hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#aboutme"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl text-black hover:text-white transition-colors"
            >
              About Me
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl text-black hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#achievements"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl text-black hover:text-white transition-colors"
            >
              Achievements
            </a>
            <a
              href="#resume"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl text-black hover:text-white transition-colors"
            >
              Résumé
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div className="min-h-screen relative overflow-hidden bg-[url('images/pattern-randomized.svg')] bg-fixed">
          <main className="flex-grow">
            <section id="home" className="min-h-screen p-8">
              <Home />
            </section>
            <section id="aboutme" className="min-h-screen p-8">
              <AboutMe />
            </section>
            <section id="projects" className="min-h-screen p-8">
              <Project />
            </section>
            <section id="achievements" className="min-h-screen p-8">
              <Achievement />
            </section>
            <section id="resume" className="min-h-screen p-8">
              <Resume />
            </section>
          </main>
        </div>
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
