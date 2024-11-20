import React, { useState } from "react";
import Image2024 from "../images/ignore/aboutme_gapyear.jpg";
import Image2023 from "../images/ignore/aboutme_grad_doctor_2.jpg";
import Image2020 from "../images/ignore/aboutme_grad_master_2.jpg";
import Image2018 from "../images/ignore/aboutme_naripa.jpg";
import Image2017 from "../images/ignore/aboutme_grad_bachelor.jpg";
import Aboutme from "../data/aboutme.json";

function AboutMe() {
  const [expandedYear, setExpandedYear] = useState(null);

  return (
    <div className="h-[90vh] bg-orange-200/60 rounded-[30px]">
      <h1 className="text-3xl font-bold pl-8 pt-8">About Me</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {Aboutme.map((item) => (
            <div key={item.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-[100px] h-[100px] flex items-center justify-center bg-white rounded-full text-xl font-bold">
                  {item.year}
                </div>
              </div>
              <div className="flex-grow bg-white p-4 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-2">{item.description}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
