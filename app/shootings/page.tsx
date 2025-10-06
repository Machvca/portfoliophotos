"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const shImages = [
  "/images/sh1.webp",
  "/images/sh2.webp",
  "/images/sh3.webp",
  "/images/sh4.webp",
  "/images/sh5.webp",
  "/images/sh6.webp",
  "/images/sh7.webp",
  "/images/sh8.webp",
  "/images/sh9.webp",
  "/images/sh10.webp",
  "/images/sh11.webp",
  "/images/sh12.webp",
];

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % shImages.length);
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + shImages.length) % shImages.length);
  }, [selectedIndex]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Navegación con teclado
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleClose, handleNext, handlePrev]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Grid de imágenes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {shImages.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-neutral-900"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={src}
              alt={`Photo ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal con imagen ampliada */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              key={shImages[selectedIndex]}
              className="relative flex items-center justify-center max-h-[85vh] max-w-5xl w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              onClick={(e) => e.stopPropagation()} // No cerrar al hacer click en la imagen
            >
              <Image
                src={shImages[selectedIndex]}
                alt={`Selected ${selectedIndex + 1}`}
                width={1200}
                height={800}
                className="rounded-lg object-contain w-auto h-auto max-h-[85vh] max-w-full"
                priority
              />

              {/* Flecha izquierda */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                aria-label="Anterior"
              >
                <IconArrowLeft size={40} />
              </button>

              {/* Flecha derecha */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                aria-label="Siguiente"
              >
                <IconArrowRight size={40} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
