import React from "react";
import Projects from "../data/projects.json";
import { Eye, Github } from "lucide-react";

function Project() {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-[6vh] w-screen sm:w-[80vw] xl:w-[60vw] h-auto rounded-[30px]">
        {/* <div> */}
        <h1 className="text-3xl font-bold pl-8 pt-8">Projects</h1>
        <div className="grid grid-cols-1 gap-8 p-8">
          {Projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg px-20 pt-20 pb-12 flex flex-col transition-colors"
            >
              <div className="relative h-80 w-full mb-6">
                <img
                  src={project.imageUrl1}
                  alt={`${project.title} Tertiary`}
                  className="absolute right-3 bottom-0 w-1/5 h-auto object-cover rounded-md shadow-lg z-30 border-4 border-white"
                />
                <img
                  src={project.imageUrl3}
                  alt={project.title}
                  className="absolute left-3 bottom-0 w-4/5 h-auto object-cover rounded-md shadow-lg z-10 border-4 border-white"
                />
              </div>
              <div className="grid grid-cols-2 my-4">
                <div className="flex flex-col justify-center">
                  <h2 className="text-xl font-medium">{project.title}</h2>
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
                <div className="flex items-center justify-end gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-orange-500 text-white rounded-full shadow hover:bg-orange-300 transition"
                  >
                    <div className="flex gap-2 items-center justify-center m-2">
                      <Eye className="h-6 w-6" />
                      Preview
                    </div>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-gray-800 text-white rounded-full shadow hover:bg-gray-400 transition"
                  >
                    <div className="flex gap-2 items-center justify-center m-2">
                      <Github className="h-6 w-6" />
                      GitHub
                    </div>
                  </a>
                </div>
              </div>
              <p className="text-gray-600 text-justify">
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
