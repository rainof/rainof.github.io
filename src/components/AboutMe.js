import React, { useState } from "react";
import Aboutme from "../data/aboutme.json";

function AboutMe() {
  const [expandedYear, setExpandedYear] = useState(null);

  return (
    <div className="flex items-center justify-center">
      <div className="mt-[6vh] w-screen sm:w-[80vw] xl:w-[60vw] h-auto rounded-[30px]">
        <h1 className="text-3xl font-bold pl-8 pt-8">About Me</h1>
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {Aboutme.map((item) => (
              <div
                key={item.year}
                className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-[70px] h-[70px] flex items-center justify-center bg-orange-100 rounded-full text-xl font-bold sm:mb-0 mb-4">
                    {item.year}
                  </div>
                </div>

                <div className="flex flex-grow bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-[1.02]">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold">
                      {item.title}
                    </h2>

                    {(item.school || item.organization) && (
                      <h2 className="text-md sm:text-lg font-medium mb-4">
                        {item.school}, {item.organization}
                      </h2>
                    )}

                    {item.grad && (
                      <p className="text-sm sm:text-base mb-4">
                        <span className="font-semibold">Graduation:</span>{" "}
                        {item.grad}
                      </p>
                    )}

                    {Array.isArray(item.description) ? (
                      <>
                        <p className="mb-2">
                          <span className="text-sm sm:text-base font-semibold">
                            Detail:
                          </span>
                        </p>
                        <ul className="list-disc pl-6 mb-2">
                          {item.description.map((desc, index) => (
                            <li
                              key={index}
                              className="leading-relaxed text-sm sm:text-base"
                            >
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-gray-600 mb-2">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
