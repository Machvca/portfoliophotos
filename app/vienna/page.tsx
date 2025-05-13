"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const photos = [
  { src: "/images/latest3.webp", span: "col-span-2 row-span-3" },
  { src: "/images/latest3.webp", span: "row-span-2" },
  { src: "/images/latest3.webp", span: "col-span-1 row-span-2" },
  { src: "/images/latest3.webp", span: "col-span-2 row-span-4" },
  { src: "/images/latest3.webp", span: "row-span-3" },
  { src: "/images/latest3.webp", span: "col-span-1 row-span-2" },
];

const Page = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Función única de navegación
  const navigationHandler = useCallback((direction: "prev" | "next") => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return direction === "next"
        ? (current + 1) % photos.length
        : (current - 1 + photos.length) % photos.length;
    });
  }, []);

  // Manejador de teclado
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") navigationHandler("next");
      if (e.key === "ArrowLeft") navigationHandler("prev");
    },
    [lightboxIndex, navigationHandler]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen mx-4 md:mx-52  py-16">
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
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur cursor-zoom-out"
            onClick={() => setLightboxIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightboxIndex].src}
                alt={`Ampliada ${lightboxIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain rounded-lg shadow-2xl"
                priority
              />
            </motion.div>

            {/* Flechas corregidas */}
            <button
              className="absolute left-6 text-white text-5xl z-10 hover:scale-125 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                navigationHandler("prev");
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="absolute right-6 text-white text-5xl z-10 hover:scale-125 transition-transform"
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
    </div>
  );
};

export default Page;
