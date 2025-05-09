"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import insta from "../../assets/images/insta.svg";
import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";







export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ]

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
    <>
      <div className="relative  w-full">
        <FloatingNav navItems={navItems} />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-30 text-stone-950 transition-colors duration-600 ${
          isScrolled
            ? "hidden"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-24  py-4 flex justify-between items-center">
          {/* Logo */}

          <Link href="/">
            <h1 className="text-xl hover:text-yellow-800">Machuca</h1>
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
            <Link href="/about" className="hover:text-yellow-800">
              About Me
            </Link>
            <Link href="/contact" className="hover:text-yellow-800">
              Contact
            </Link>
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
          className={`md:hidden fixed z-50 top-0 left-0 w-full h-full bg-linear-to-b from-stone-900 to-stone-500 flex flex-col items-center justify-center text-7xl transition-transform duration-700 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-6 text-8xl sm:px-24 text-stone-300">
            <Link
              href="/about"
              className="hover:text-stone-950"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
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
    </>
  );

}


