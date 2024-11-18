import React, { useState } from "react";

function Achievement() {
  const [activeTab, setActiveTab] = useState("awards");

  const achievements = {
    awards: [
      {
        id: 1,
        title: "Awards: Title",
        description:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      },
      {
        id: 2,
        title: "Awards: Title",
        description:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      },
    ],
    certifications: [
      {
        id: 1,
        title: "Certifications: Title",
        description:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      },
      {
        id: 2,
        title: "Certifications: Title",
        description:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      },
    ],
    publications: [
      {
        id: 1,
        title: "Publications: Title",
        description:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      },
      {
        id: 2,
        title: "Publications: Title",
        description:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      },
    ],
  };

  return (
    <div className="h-[90vh] bg-orange-200/60 rounded-[30px]">
      <h1 className="text-3xl font-bold pl-8 pt-8">Achievements</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <button
            className={`mr-2 px-4 py-2 rounded ${
              activeTab === "awards"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("awards")}
          >
            Awards
          </button>
          <button
            className={`mr-2 px-4 py-2 rounded ${
              activeTab === "certifications"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("certifications")}
          >
            Certifications
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "publications"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("publications")}
          >
            Publications
          </button>
        </div>
        <div className="space-y-4">
          {achievements[activeTab].map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievement;
