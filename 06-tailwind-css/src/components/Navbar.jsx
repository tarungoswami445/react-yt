import React, { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const MenuIcon = ({ open }) => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={
          open
            ? "M6 18L18 6M6 6l12 12"
            : "M4 6h16M4 12h16M4 18h16"
        }
      />
    </svg>
  );

  const renderLinks = (className) =>
    navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={(e) => handleNavClick(e, link.href)}
        className={className}
      >
        {link.label}
      </a>
    ));

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800/95 backdrop-blur-md shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-extrabold text-2xl tracking-tight">
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                  Tarun <span className="text-white">Goswami</span>
                </span>
                <span className="text-xs text-gray-300 font-medium ml-1">
                  Full Stack Developer
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {renderLinks("text-gray-200 hover:text-cyan-400 transition-colors font-medium")}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-200 hover:bg-gray-700 transition"
              aria-label="Toggle menu"
            >
              <MenuIcon open={isMobileMenuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 space-y-6">
          <div className="font-extrabold text-2xl tracking-tight">
            <span className="text-cyan-400">Tarun</span>
            <span className="text-gray-100"> Goswami</span>
          </div>

          <div className="border-b border-gray-700"></div>

          <div className="flex flex-col space-y-4 mt-2">
            {renderLinks("text-gray-200 hover:text-cyan-400 text-lg font-medium transition-colors")}
          </div>

          <div className="mt-auto pt-6 border-t border-gray-700 text-sm text-gray-400">
            © {new Date().getFullYear()} Tarun Goswami
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30"
        ></div>
      )}
    </>
  );
};

export default Navbar;