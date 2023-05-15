import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Photography from "./components/Photography";
import PhotographyNavbar from "./components/PhotographyNavbar.js";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}

function PhotographyPage() {
  return (
    <main>
      {/* <Photography /> */}
      {/* <PhotographyNavbar /> */}
      </main>
  );
}