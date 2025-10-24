import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { mockData } from "./mock";
import { Toaster } from "./components/ui/toaster";

// Components
import GlassNavbar from "./components/GlassNavbar";
import Hero3D from "./components/Hero3D";
import About from "./components/About";
import Skills3D from "./components/Skills3D";
import Projects3D from "./components/Projects3D";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-[#0f172a] relative">
        <GlassNavbar data={mockData.personalInfo} />
        <Hero3D data={mockData.personalInfo} />
        <About data={{ ...mockData.personalInfo, stats: mockData.stats }} />
        <Skills3D data={mockData.skills} />
        <Projects3D data={mockData.projectCategories} />
        <Achievements data={mockData.achievements} />
        <Certifications data={mockData.certifications} />
        <Education data={mockData.education} />
        <Contact data={mockData.personalInfo} />
        <Footer data={mockData.personalInfo} />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
