import React, { useState, useEffect, useRef } from "react";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Achievement from "../components/Achievement";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  const sections = [
    { id: "home", Component: Home },
    { id: "aboutme", Component: AboutMe },
    { id: "projects", Component: Project },
    { id: "achievements", Component: Achievement },
  ];

  useEffect(() => {
    sectionRefs.current[activeSection]?.scrollIntoView({
      behavior: "smooth",
    });
    window.history.replaceState(null, "", `#${sections[activeSection].id}`);
  }, [activeSection]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-orange-100 text-white z-50">
        <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-black hover:text-white"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>

          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } sm:flex flex-col sm:flex-row sm:gap-6 absolute sm:relative left-0 right-0 top-14 sm:top-0 bg-white sm:bg-transparent z-50 border-b sm:border-0 shadow-md sm:shadow-none`}
          >
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveSection(index);
                }}
                className={`px-4 py-2 sm:py-1 w-full sm:w-auto text-center sm:rounded-2xl transition-colors ${
                  activeSection === index
                    ? "bg-orange-500 text-white"
                    : "text-black hover:text-white"
                }`}
              >
                {section.id.replace(/^./, (str) => str.toUpperCase())}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {" "}
        <div className="min-h-screen relative overflow-hidden bg-[url('images/pattern-randomized.svg')]">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="min-h-screen p-8"
            >
              <section.Component />
            </section>
          ))}
        </div>
      </main>

      <button
        onClick={() =>
          activeSection < sections.length - 1
            ? setActiveSection((prev) => prev + 1)
            : setActiveSection(0)
        }
        className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 shadow-lg animate-bounce"
      >
        {activeSection < sections.length - 1 ? (
          <ChevronDown className="h-6 w-6" strokeWidth={3} />
        ) : (
          <p>Top</p>
        )}
      </button>

      <footer className="bg-white text-black py-2">
        <div className="container mx-auto px-4 text-center">
          © 2024 Pattaraporn Tulathum. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Layout;
