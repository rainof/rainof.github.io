import React, { useState } from "react";
import Image2024 from "../images/ignore/aboutme_gapyear.jpg";
import Image2023 from "../images/ignore/aboutme_grad_doctor_2.jpg";
import Image2020 from "../images/ignore/aboutme_grad_master_2.jpg";
import Image2018 from "../images/ignore/aboutme_naripa.jpg";
import Image2017 from "../images/ignore/aboutme_grad_bachelor.jpg";

function AboutMe() {
  const [expandedYear, setExpandedYear] = useState(null);

  const timelineEvents = [
    {
      year: "2024",
      title: "Title",
      organization: "Affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      imageUrl: Image2024,
    },
    {
      year: "2023",
      title: "Title",
      organization: "Affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      imageUrl: Image2023,
    },
    {
      year: "2020",
      title: "Title",
      organization: "Affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      imageUrl: Image2020,
    },
    {
      year: "2018",
      title: "Title",
      organization: "Affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      imageUrl: Image2018,
    },
    {
      year: "2017",
      title: "Title",
      organization: "Affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      imageUrl: Image2017,
    },
  ];

  return (
    <div className="h-[90vh] bg-orange-200/60 rounded-[30px]">
      <h1 className="text-3xl font-bold pl-8 pt-8">About Me</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {timelineEvents.map((item) => (
            <div key={item.year} className="flex items-start">
              <div className="w-24 flex-shrink-0 text-xl font-bold">
                {item.year}
              </div>
              <div className="flex-grow">
                <p className="mb-2">{item.description}</p>
                <div
                  className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedYear === item.year ? "max-h-[300px]" : "max-h-0"
                  }`}
                  onMouseEnter={() => setExpandedYear(item.year)}
                  onMouseLeave={() => setExpandedYear(null)}
                >
                  <img
                    src={item.imageUrl}
                    alt={`Event from ${item.year}`}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
