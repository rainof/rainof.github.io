import React from "react";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";
// import Hero from "../images/DSC08321.JPG";
import Hero from "../images/temp.png";

function HomePage() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="container mx-auto px-16 flex items-center justify-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-6rem)]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl w-full">
          {/* Hero Section */}
          <div className="text-center md:text-left md:w-[45%]">
            <p className="text-orange-500">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mt-8 mb-4">
              Pattaraporn
              <br />
              Tulathum
            </h1>
            <p className="text-zinc-600 sm:text-zinc-400 mt-4">
              Frontend developer
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-5 mt-8">
              <a
                href="mailto:pattaraporn.tulathum@gmail.com"
                className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://github.com/rainof"
                className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pattaraporn-tulathum/"
                className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-[45%] flex justify-center md:justify-end">
            <div className="w-48 h-48">
              <img
                src={Hero}
                alt="Hero image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="text-orange-500 hover:text-orange-600 transition-colors"
          aria-label="Scroll down for more content"
        >
          <ChevronDown className="h-8 w-8 text-orange-500" />
        </button>
      </div>
    </div>
  );
}

export default HomePage;
