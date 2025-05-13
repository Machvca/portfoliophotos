"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const photos = [
  {
    src: "/images/latest3.webp",
    span: "col-span-2 md:col-span-3 row-span-3 md:row-span-4",
  },
  {
    src: "/images/portrait3.webp",
    span: "col-span-1 row-span-2 md:row-span-3",
  },
  { src: "/images/latest3.webp", span: "col-span-1 row-span-1 md:row-span-2" },
  { src: "/images/latest3.webp", span: "col-span-2 row-span-2 md:row-span-3" },
  {
    src: "/images/portrait3.webp",
    span: "col-span-1 row-span-3 md:row-span-4",
  },
  { src: "/images/latest3.webp", span: "col-span-1 row-span-2 md:row-span-3" },
];

const Page = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const navigationHandler = useCallback((direction: "prev" | "next") => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return direction === "next"
        ? (current + 1) % photos.length
        : (current - 1 + photos.length) % photos.length;
    });
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      switch (e.key) {
        case "Escape":
          setLightboxIndex(null);
          break;
        case "ArrowRight":
          navigationHandler("next");
          break;
        case "ArrowLeft":
          navigationHandler("prev");
          break;
      }
    },
    [lightboxIndex, navigationHandler]
  );

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => handleKeyDown(e);
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (lightboxIndex !== null && lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [lightboxIndex]);

  return (
    <div className="min-h-screen mx-8 md:mx-52 py-20 md:py-32">
      {/* Galería */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden cursor-pointer ${photo.span}`}
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={photo.src}
              alt={`Foto ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence mode="wait">
        {lightboxIndex !== null && (
          <motion.div
            ref={lightboxRef}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-terracota/30 backdrop-blur cursor-zoom-out"
            onClick={() => setLightboxIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            tabIndex={-1}
          >
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <motion.div
                key={lightboxIndex}
                className="relative w-full h-full max-w-[90vw] max-h-[90vh]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={photos[lightboxIndex].src}
                  alt={`Ampliada ${lightboxIndex + 1}`}
                  fill
                  className="object-contain rounded-xl"
                  priority
                />
              </motion.div>
            </div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-terracota text-5xl hover:text-gray-300 transition-colors p-4"
              onClick={(e) => {
                e.stopPropagation();
                navigationHandler("prev");
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-terracota text-5xl hover:text-gray-300 transition-colors p-4"
              onClick={(e) => {
                e.stopPropagation();
                navigationHandler("next");
              }}
              aria-label="Next image"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nuevos Links de navegación */}
      <div className="flex justify-between items-center mt-8  px-4 md:px-8">
        <Link
          href="/travel"
          className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 text-terracota/80 hover:text-verde-oliva hover:shadow-2xl hover:rounded-2xl px-4 hover:shadow-verde-oliva"
        >
          <span className="text-3xl md:text-4xl">‹</span>
          <span className="font-medium ">Ciudad Anterior</span>
        </Link>

        <Link
          href="/vienna"
          className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 text-terracota/80 hover:text-verde-oliva hover:shadow-2xl hover:rounded-2xl px-4 hover:shadow-verde-oliva"
        >
          <span className="font-medium ">Next city</span>
          <span className="text-3xl md:text-4xl">›</span>
        </Link>
      </div>

      {/* Lightbox (mantenemos el mismo código anterior) */}
      <AnimatePresence>{/* ... */}</AnimatePresence>
    </div>
  );
};

export default Page;
