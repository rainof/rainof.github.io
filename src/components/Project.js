import React from "react";
import Projects from "../data/projects.json";

function Project() {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-[6vh] w-screen sm:w-[80vw] lg:w-[60vw] h-auto bg-orange-200/60 rounded-[30px]">
        <h1 className="text-3xl font-bold pl-8 pt-8">Projects</h1>
        <div className="grid grid-cols-1 gap-8 p-8">
          {Projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col items-center hover:bg-gray-100 transition-colors"
            >
              <div className="h-full w-full flex items-center justify-center mb-6">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex gap-4 mb-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                >
                  Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition"
                >
                  Code
                </a>
              </div>
              <h2 className="text-xl font-medium mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-sm text-gray-400">{project.date}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
