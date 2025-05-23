import React from "react";
import Projects from "../data/projects.json";
import projectImages from "../assets/project_img/images.js";
import { Eye, Github } from "lucide-react";

function Project() {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-[6vh] w-full sm:w-[90vw] xl:w-[80vw] h-auto rounded-[30px]">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
          {Projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-[40vw] sm:h-[45vw] lg:h-[20vw] w-full mb-6">
                <img
                  src={projectImages[project.imageUrl1]}
                  alt={`${project.title} Secondary`}
                  className="absolute right-3 bottom-0 w-1/5 h-auto object-cover rounded-md shadow-lg z-30 border-4 border-white max-w-full"
                />
                <img
                  src={projectImages[project.imageUrl2]}
                  alt={project.title}
                  className="absolute left-3 bottom-0 w-4/5 h-auto object-cover rounded-md shadow-lg z-10 border-4 border-white max-w-full"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex flex-col gap-4 w-full lg:w-2/3">
                  <h2 className="text-lg sm:text-xl font-medium">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">{project.date}</p>
                </div>

                <div className="flex flex-row lg:flex-col 2xl:flex-row gap-4 sm:mt-4 lg:mt-0 lg:w-1/2 lg:items-end lg:justify-start">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-orange-500 text-white rounded-full shadow hover:bg-orange-300 transition"
                      title="Preview Project"
                    >
                      <div className="flex gap-2 items-center justify-center">
                        <Eye className="h-4 sm:h-6 w-4 sm:w-6" />
                        <span className="text-xs sm:text-base">Preview</span>
                      </div>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 bg-orange-100 text-white rounded-full shadow cursor-not-allowed"
                      title="No Preview Available"
                    >
                      <div className="flex gap-2 items-center justify-center">
                        <Eye className="h-4 sm:h-6 w-4 sm:w-6" />
                        <span className="text-xs sm:text-base">Preview</span>
                      </div>
                    </button>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-400 transition"
                      title="View GitHub Repository"
                    >
                      <div className="flex gap-2 items-center justify-center">
                        <Github className="h-4 sm:h-6 w-4 sm:w-6" />
                        <span className="text-xs sm:text-base">GitHub</span>
                      </div>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 bg-gray-200 text-white rounded-full shadow cursor-not-allowed"
                      title="No GitHub Available"
                    >
                      <div className="flex gap-2 items-center justify-center">
                        <Github className="h-4 sm:h-6 w-4 sm:w-6" />
                        <span className="text-xs sm:text-base">GitHub</span>
                      </div>
                    </button>
                  )}
                </div>
              </div>

              <p className="text-gray-600 text-sm sm:text-base mt-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
