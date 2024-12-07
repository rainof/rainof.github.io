import React from "react";
import Projects from "../data/projects.json";

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
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col hover:bg-gray-100 transition-colors"
            >
              {/* Overlapping Images */}
              <div className="relative h-80 w-full mb-6">
                <img
                  src={project.imageUrl1}
                  alt={`${project.title} Tertiary`}
                  className="absolute right-0 bottom-0 w-auto h-full object-cover rounded-md shadow-lg z-30 border-2 border-white hover:border-orange-300"
                />
                <img
                  src={project.imageUrl2}
                  alt={`${project.title} Secondary`}
                  className="absolute left-60 bottom-0 w-auto h-full object-cover rounded-md shadow-md z-20 border-2 border-white hover:border-orange-300"
                />
                <img
                  src={project.imageUrl3}
                  alt={project.title}
                  className="absolute left-0 bottom-0 w-auto h-full object-cover rounded-md shadow-lg z-10 border-2 border-white hover:border-orange-300"
                />
              </div>
              <div className="grid grid-cols-2 mb-4">
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
                    className="px-2 py-1 bg-orange-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
