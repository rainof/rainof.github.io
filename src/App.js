import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Achievement from "./components/Achievement";
import NotFound from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-orange-100">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="projects" element={<Project />} />
            <Route path="achievements" element={<Achievement />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
