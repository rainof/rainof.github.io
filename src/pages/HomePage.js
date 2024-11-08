import React from "react";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import FrontendMentor from "../images/frontendmentor.svg";
import Hero from "../images/fon_img_v2.png";

function HomePage() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="container mx-auto px-16 flex items-center justify-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-6rem)]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-36 xl:gap-60 max-w-3xl w-full">
          {/* Hero Section */}
          <div className="text-center md:text-left md:w-[45%]">
            <p className="text-orange-500">Hello, I'm</p>
            <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold mt-8 mb-4">
              Pattaraporn
              <br />
              Tulathum
            </h1>
            <p className="text-zinc-600 sm:text-zinc-400 mt-4">
              Frontend developer
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 sm:gap-5 mt-8">
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
              <a
                href="https://www.frontendmentor.io/profile/rainof"
                className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                <img
                  src={FrontendMentor}
                  alt="Fronend Mentor"
                  className="h-5 w-5 filter invert drop-shadow-lg"
                />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-[40%] flex justify-center md:justify-end">
            <div className="h-auto w-52 md:w-60 xl:w-80">
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
      <div className="absolute bottom-20 sm:bottom-28 left-1/2 -translate-x-1/2 animate-bounce">
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
