import React from "react";

function Resume() {
  const handleDownload = () => {
    const pdfUrl =
      "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="h-[90vh] bg-orange-200/60 rounded-[30px]">
      <h1 className="text-3xl font-bold pl-8 pt-8">Résumé</h1>
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={handleDownload}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
        >
          View Résumé (PDF)
        </button>
      </div>
    </div>
  );
}

export default Resume;
