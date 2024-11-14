import React from "react";

function Resume() {
  const handleDownload = () => {
    const pdfUrl =
      "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Resume</h2>
        <button
          onClick={handleDownload}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
        >
          View Resume (PDF)
        </button>
      </div>
    </div>
  );
}

export default Resume;
