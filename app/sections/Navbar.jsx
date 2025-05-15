"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import InstaIcon from "../components/icons/InstaIcon";



export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-verde-oliva" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-verde-oliva" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-verde-oliva" />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar el scroll para ocultar el navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed text-lg md:text-2xl top-0 left-0 right-0 z-50 text-terracota transition-colors duration-600 ${
          isScrolled ? "hidden" : "bg-transparent"
        }`}
      >
        <div className="container mx-6 md:mx-24 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className=" md:block hover:text-verde-oliva hover:shadow-2xl hover:shadow-verde-oliva">
              Machuca
            </h1>
          </Link>

          {/* Botón hamburguesa / X */}
          <button
            className="md:hidden fixed top-4 right-4 z-70"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Menú de escritorio */}
          <div className="hidden md:flex space-x-6 ">
            <Link
              href="/about"
              className=" hover:shadow-2xl hover:shadow-verde-oliva hover:text-verde-oliva"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className=" hover:shadow-2xl hover:shadow-verde-oliva hover:text-verde-oliva"
            >
              Contact
            </Link>
            <a
              href="https://www.instagram.com/machvca/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:shadow-2xl hover:shadow-verde-oliva hover:text-verde-oliva"
            >
              <InstaIcon />
            </a>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full  flex flex-col items-center justify-center text-7xl transition-transform duration-700 z-60 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Animación de fondo sin interceptar clicks */}
          <BackgroundGradientAnimation
            className={`${isOpen ? "" : "pointer-events-none"}`}
          >
            {/* Enlaces centrados y clicables */}
            <div className="relative mt-52 text-stone-200  flex flex-col items-center justify-center gap-6 w-full text-center z-50">
              <Link
                href="/about"
                className="pointer-events-auto hover:text-terracota"
                onClick={() => setIsOpen(false)}
              >
                About Me
              </Link>
              <Link
                href="/contact"
                className="pointer-events-auto hover:text-terracota"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              {/* <Link
                href="/"
                className="pointer-events-auto hover:text-terracota"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link> */}
              <a
                href="https://www.instagram.com/machvca/"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto text-verde-oliva"
                onClick={() => setIsOpen(false)}
              >
<InstaIcon className="w-24 h-24 text-stone-200" />
              </a>
            </div>
          </BackgroundGradientAnimation>
        </div>
      </nav>
    </>
  );
}
