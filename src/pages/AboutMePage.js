import React, { useState, useEffect } from "react";
import Image2024 from "../images/ignore/aboutme_gapyear.jpg";
import Image2023 from "../images/ignore/aboutme_grad_doctor_2.jpg";
import Image2020 from "../images/ignore/aboutme_grad_master_2.jpg";
import Image2018 from "../images/ignore/aboutme_naripa.jpg";
import Image2017 from "../images/ignore/aboutme_grad_bachelor.jpg";

function AboutMePage() {
  const [activeSection, setActiveSection] = useState(0);

  const timelineEvents = [
    {
      year: "2024",
      title: "Title",
      organization: "affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      imageUrl: Image2024,
    },
    {
      year: "2023",
      title: "Title",
      organization: "affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      imageUrl: Image2023,
    },
    {
      year: "2020",
      title: "Title",
      organization: "affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      imageUrl: Image2020,
    },
    {
      year: "2018",
      title: "Title",
      organization: "affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      imageUrl: Image2018,
    },
    {
      year: "2017",
      title: "Title",
      organization: "affiliation",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies vitae mollis quisque, eleifend convallis placerat platea.",
      imageUrl: Image2017,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newActiveSection = Math.floor(scrollPosition / windowHeight);
      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Timeline labels (legend) */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-20">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`mb-8 transition-all duration-300 ${
              activeSection === index
                ? "text-white scale-110 translate-x-2"
                : "text-gray-400 scale-100"
            }`}
          >
            <a
              href={`#section-${index}`}
              className="text-2xl font-bold"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: index * window.innerHeight,
                  behavior: "smooth",
                });
              }}
            >
              {event.year}
            </a>
          </div>
        ))}
      </div>

      {timelineEvents.map((event, index) => (
        <section
          key={index}
          id={`section-${index}`}
          className="h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${event.imageUrl})`,
              transform: `translateY(${(activeSection - index) * 50}px)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>

          <div className="container mx-auto max-w-4xl px-4 z-10">
            <div className="flex flex-col items-start text-white ml-16 md:ml-32">
              <h2 className="text-4xl font-bold mb-4">{event.title}</h2>
              <p className="text-xl max-w-2xl">{event.description}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Navigation dots */}
      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20">
        {timelineEvents.map((_, index) => (
          <a
            key={index}
            href={`#section-${index}`}
            className={`block w-3 h-3 mb-4 rounded-full ${
              activeSection === index ? "bg-white" : "bg-gray-300"
            }`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: index * window.innerHeight,
                behavior: "smooth",
              });
            }}
            aria-label={`Go to year ${timelineEvents[index].year}`}
          />
        ))}
      </nav>
    </div>
  );
}

export default AboutMePage;
