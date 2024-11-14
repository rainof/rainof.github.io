import React, { useState } from "react";
import { Menu } from "lucide-react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Project from "./components/ProjectPage";
import Achievement from "./components/Achievement";
import Resume from "./components/ResumePage";
import NotFound from "./pages/NotFoundPage";

function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-orange-100">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="projects" element={<Project />} />
            <Route path="achievements" element={<Achievement />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
