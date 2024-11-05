import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
// import Hero from "../images/DSC08321.JPG";
import Hero from "../images/temp.png";

function HomePage() {
  return (
    <main className="container mx-auto px-4 relative min-h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="absolute inset-0 hidden sm:block">
        <div className="grid h-full grid-cols-1 sm:grid-cols-2">
          <div className="bg-zinc-950" />
          <div className="bg-zinc-200" />
        </div>
      </div>

      <div className="relative flex flex-col sm:flex-row justify-between w-full py-8 sm:py-12">
        {/* Hero Section */}
        <div className="space-y-4 text-center sm:text-left sm:w-1/2 flex flex-col justify-center mb-8 sm:mb-0">
          <p className="text-orange-500">Hello, I'm</p>
          <h1 className="text-3xl sm:text-4xl sm:text-white font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Pattaraporn
            <br />
            Tulathum
          </h1>
          <p className="text-zinc-600 sm:text-zinc-400">Frontend developer</p>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-start gap-4 mt-6">
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
        <div className="sm:w-1/2 flex items-center justify-center">
          <div className="relative w-auto h-[300px] sm:h-[500px]">
            <img
              src={Hero}
              alt="Hero image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
