import React from "react";
import { Circle } from "lucide-react";

function AboutMePage() {
  const timelineEvents = [
    {
      year: "2023",
      title: "Title",
      organization: "affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
    },
    {
      year: "2022",
      title: "Title",
      organization: "affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
    },
    {
      year: "2020",
      title: "Title",
      organization: "affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
    },
    {
      year: "2018",
      title: "Title",
      organization: "affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
    },
  ];

  const imageUrl =
    "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg";

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* <h2 className="text-4xl font-bold text-center mb-16">
          NEW TIMELINE PROJECT
        </h2> */}

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative mb-24">
                {/* Node with Image and Year */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="relative group">
                    {/* Circle Image */}
                    <div className="w-20 h-20 rounded-full overflow-hidden relative">
                      <img
                        src={imageUrl}
                        alt={`Year ${event.year}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-white/50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-black font-bold text-xl">
                          {event.year}
                        </span>
                      </div>
                    </div>

                    {/* Expanded Image on Hover */}
                    <div
                      className={`absolute ${
                        index % 2 === 0 ? "right-24" : "left-24"
                      } top-1/2 -translate-y-1/2 w-0 h-0 overflow-hidden transition-all duration-300 rounded-lg group-hover:w-64 group-hover:h-48`}
                    >
                      <img
                        src={imageUrl}
                        alt={`Year ${event.year}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex justify-between items-start ${
                    index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div className="w-5/12 px-8">
                    <div className="font-bold">{event.number}</div>
                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                  <div className="w-5/12" /> {/* Spacer */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
