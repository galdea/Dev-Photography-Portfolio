import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font ">
      <Navbar />
      <About />
      <Portfolio />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
