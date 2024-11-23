import React, { useState } from "react";
import awards from "../data/awards.json";
import certifications from "../data/certifications.json";
import publications from "../data/publications.json";

function highlightName(text, name) {
  if (!text) return "";
  const regex = new RegExp(`(${name})`, "gi");
  return text.replace(
    regex,
    '<span class="text-orange-500 font-bold">$1</span>'
  );
}
function Achievement() {
  const [activeTab, setActiveTab] = useState("awards");

  const data = {
    awards,
    certifications,
    publications,
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mt-[6vh] w-screen sm:w-[80vw] lg:w-[60vw] h-[85vh] bg-orange-200/60 rounded-[30px]">
        <h1 className="text-3xl font-bold pl-8 pt-8">Achievements</h1>
        <div className="container mx-auto px-8 py-8">
          <div className="mb-4">
            <button
              className={`mr-2 px-4 py-2 rounded ${
                activeTab === "awards"
                  ? "bg-orange-500 text-white"
                  : "bg-zinc-100"
              }`}
              onClick={() => setActiveTab("awards")}
            >
              Awards
            </button>
            <button
              className={`mr-2 px-4 py-2 rounded ${
                activeTab === "certifications"
                  ? "bg-orange-500 text-white"
                  : "bg-zinc-100"
              }`}
              onClick={() => setActiveTab("certifications")}
            >
              Certifications
            </button>
            <button
              className={`px-4 py-2 rounded ${
                activeTab === "publications"
                  ? "bg-orange-500 text-white"
                  : "bg-zinc-100"
              }`}
              onClick={() => setActiveTab("publications")}
            >
              Publications
            </button>
          </div>
          <div className="space-y-4">
            {data[activeTab].map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                {activeTab === "awards" && (
                  <div className="flex flex-wrap mt-1">
                    <strong className="mr-1">Award:</strong>
                    <span className="text-zinc-500">{item.award}</span>
                  </div>
                )}

                {activeTab === "certifications" && (
                  <div className="grid md:grid-cols-3 sm:gap-2">
                    <div className="md:col-span-2">
                      <strong className="mr-1">Issuing organization:</strong>
                      <span className="text-zinc-500">{item.by}</span>
                    </div>
                    <div>
                      <strong className="mr-1">Issue date:</strong>
                      <span className="text-zinc-500">{item.issue}</span>
                    </div>
                  </div>
                )}

                {activeTab === "publications" && (
                  <>
                    <div className="flex flex-wrap">
                      <strong className="mr-2">Authors:</strong>
                      <span
                        className="text-zinc-600 italic"
                        dangerouslySetInnerHTML={{
                          __html: highlightName(
                            item.author,
                            "Pattaraporn Tulathum"
                          ),
                        }}
                      />
                    </div>
                    <div className="flex flex-wrap mt-1">
                      <strong className="mr-1">Venue:</strong>
                      <span className="text-zinc-500">{item.venue}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
