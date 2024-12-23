import React, { useState } from "react";
import Aboutme from "../data/aboutme.json";

function AboutMe() {
  const [expandedYear, setExpandedYear] = useState(null);

  return (
    <div className="flex items-center justify-center">
      {/* <div className="mt-[6vh] w-screen sm:w-[80vw] lg:w-[60vw] h-auto bg-orange-200/60 rounded-[30px]"> */}
      <div className="mt-[6vh] w-screen sm:w-[80vw] xl:w-[60vw] h-auto rounded-[30px]">
        <h1 className="text-3xl font-bold pl-8 pt-8">About Me</h1>
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {Aboutme.map((item) => (
              <div key={item.year} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-[70px] h-[70px] flex items-center justify-center bg-orange-100 rounded-full text-xl font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="flex flex-grow bg-white p-4 rounded-xl shadow-lg">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                    {item.school && (
                      <h2 className="text-2xl font-bold mb-2">{item.school}</h2>
                    )}

                    {/* Check if description is an array and display it as a list */}
                    {Array.isArray(item.description) ? (
                      <ul className="list-disc pl-6 text-gray-600 mb-2">
                        {item.description.map((desc, index) => (
                          <li key={index} className="leading-relaxed">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 mb-2">{item.description}</p>
                    )}

                    {item.grad && (
                      <p className="text-gray-500">
                        <span className="font-semibold">Graduation:</span>{" "}
                        {item.grad}
                      </p>
                    )}
                    {item.organization && (
                      <p className="text-gray-500">
                        <span className="font-semibold">Organization:</span>{" "}
                        {item.organization}
                      </p>
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
