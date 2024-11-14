import React from "react";

function Project() {
  const projects = [
    {
      name: "Temporary",
      description: "TBA",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Temporary",
      description: "TBA",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Temporary",
      description: "TBA",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Temporary",
      description: "TBA",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      name: "Temporary",
      description: "TBA",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      name: "Temporary",
      description: "TBA",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-12 py-8">
        {/* <h1 className="text-4xl font-semibold text-center mb-8">Projects</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-2xl p-8 flex flex-col items-center hover:bg-gray-100 transition-colors"
            >
              <div className="h-48 w-full flex items-center justify-center mb-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h2 className="text-xl font-medium mb-2">{project.name}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
