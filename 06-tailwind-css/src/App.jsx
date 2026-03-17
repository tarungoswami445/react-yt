import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section id="about" className="h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-bold">About Section</h1>
      </section>

      <section id="skills" className="h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-bold">Skills Section</h1>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-gray-300">
        <h1 className="text-4xl font-bold">Projects Section</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-400">
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </section>
    </div>
  );
}

export default App;