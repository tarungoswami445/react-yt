import React, { useState, useEffect } from "react";
import profilePic from "../assets/image.png";
import toast, { Toaster } from "react-hot-toast";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white relative overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 flex flex-col lg:flex-row items-center lg:items-center gap-10">
        
        {/* Text on Left */}
        <div className="text-center lg:text-left flex-1 transition-opacity duration-1000 opacity-100">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tarun
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Full Stack Developer & UI/UX Designer
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="/TANISH_YADAV_RESUME.pdf"
              download
              onClick={() => toast.success("Downloading Resume...")}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform"
            >
              Resume
            </a>

            <button
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
            <Toaster position="bottom-center" />
          </div>
        </div>

        {/* Profile Image on Right */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-64 h-64 rounded-full p-1 bg-gradient-to-br from-cyan-400 to-purple-500 overflow-hidden">
            <img
              src={profilePic}
              alt="Tarun Goswami"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;