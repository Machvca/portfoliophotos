"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // Cambia cuando baja más de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 text-black transition-colors duration-600 ${
        isScrolled ? "bg-slate-900/20 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl text-slate-700">Jorge Machuca</h1>

        {/* Botón de menú hamburguesa */}
        <button
          className="md:hidden z-30 fixed top-4 right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={30} className="text-slate-900" />
          ) : (
            <Menu size={30} />
          )}
        </button>

        {/* Menú de navegación (escritorio) */}
        <div className="hidden md:flex space-x-6 text-xl text-slate-700">
          <a href="#" className="hover:text-indigo-500">
            About Me
          </a>
          <a href="#" className="hover:text-indigo-500">
            Contact
          </a>
          <a href="#" className="hover:text-indigo-500">
            Instagram
          </a>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-slate-100 flex flex-col items-center justify-center gap-6 text-8xl transition-transform duration-700 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-6 text-8xl sm:px-24">
          <a
            href="#"
            className="hover:text-indigo-900"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
          <a
            href="#"
            className="hover:text-indigo-900"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-indigo-900"
            onClick={() => setIsOpen(false)}
          >
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
