"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import insta from "../../assets/images/insta.svg";
import Image from "next/image";
import Link from "next/link";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Cambia cuando baja más de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 text-stone-950 transition-colors duration-600 ${
        isScrolled
          ? "text-stone-100 bg-slate-900/30 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}

        <Link href="/">
          <h1 className="text-xl ">Jorge Machuca</h1>
        </Link>

        {/* Botón de menú hamburguesa */}
        <button
          className="md:hidden z-30 fixed top-4 right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={30} className="text-stone-300" />
          ) : (
            <Menu size={30} />
          )}
        </button>

        {/* Menú de navegación (escritorio) */}
        <div className="hidden md:flex space-x-6 text-xl ">
          <a href="#" className="hover:text-yellow-800">
            About Me
          </a>
          <a href="#" className="hover:text-yellow-800">
            Contact
          </a>
          <a
            href="https://www.instagram.com/machvca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={insta}
              alt="instagram logo"
              className="w-8 h-8 cursor-pointer items-center justify-center"
            />
          </a>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-b from-stone-900 to-stone-500 flex flex-col items-center justify-center text-7xl transition-transform duration-700 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-6 text-8xl sm:px-24 text-stone-300">
          <a
            href="#"
            className="hover:text-stone-950"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
          <a
            href="#"
            className="hover:text-stone-950"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="https://www.instagram.com/machvca/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-950"
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
