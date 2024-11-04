import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AchievementPage from "./pages/AchievementPage";
import CertificatePage from "./pages/CertificatePage";
import PublicationPage from "./pages/PublicationPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/achievements" element={<AchievementPage />} />
          <Route path="/certificates" element={<CertificatePage />} />
          <Route path="/publications" element={<PublicationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
