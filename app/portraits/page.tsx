"use client";
import React, { useState, useEffect } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Importa tus imágenes
import portrait1 from "../../assets/images/portrait1.webp";
import portrait2 from "../../assets/images/portrait2.webp";
import portrait3 from "../../assets/images/portrait3.webp";
import portrait4 from "../../assets/images/portrait4.webp";
import portrait5 from "../../assets/images/portrait5.webp";
import portrait6 from "../../assets/images/portrait6.webp";
import portrait7 from "../../assets/images/portrait7.webp";
import portrait8 from "../../assets/images/portrait8.webp";
import portrait9 from "../../assets/images/portrait9.webp";
import portrait10 from "../../assets/images/portrait10.webp";
import portrait11 from "../../assets/images/portrait11.webp";
import portrait12 from "../../assets/images/portrait12.webp";
import portrait13 from "../../assets/images/portrait13.webp";

const portraitImages = [
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  portrait5,
  portrait6,
  portrait7,
  portrait8,
  portrait13,
  portrait9,
  portrait10,
  portrait11,
  portrait12,
];

const portraitsPictures = portraitImages.map((image, index) => ({
  name: `Portrait ${index + 1}`,
  image,
}));

export default function BackgroundBeamsDemo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") goToPreviousImage();
      if (e.key === "ArrowRight") goToNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Función para ir a la imagen anterior
  const goToPreviousImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setSelectedImage(portraitsPictures[currentIndex - 1].image.src);
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Función para ir a la imagen siguiente
  const goToNextImage = () => {
    if (currentIndex !== null && currentIndex < portraitsPictures.length - 1) {
      setSelectedImage(portraitsPictures[currentIndex + 1].image.src);
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Función para seleccionar la imagen al hacer click
  const selectImage = (index: number) => {
    setSelectedImage(portraitsPictures[index].image.src);
    setCurrentIndex(index);
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 relative flex flex-col items-center justify-center antialiased py-24">
      {/* Background debajo */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Galería */}
      <div className="relative z-10 max-w-6xl mx-auto p-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {portraitsPictures.map((portrait, index) => (
          <div
            key={index}
            onClick={() => selectImage(index)}
            className="relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={portrait.image}
              alt={portrait.name}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Modal con imagen expandida */}
      <AnimatePresence>
        {selectedImage && currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // <- evita que cierre el modal
            >
              <Image
                src={selectedImage}
                alt="Expanded"
                width={1200}
                height={1200}
                className="max-w-full max-h-screen object-contain"
              />
            </motion.div>

            {/* Flechas para navegar entre imágenes */}
            <div
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 cursor-pointer z-50"
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousImage();
              }}
            >
              <span className="text-4xl">&lt;</span>
            </div>
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 cursor-pointer z-50"
              onClick={(e) => {
                e.stopPropagation();
                goToNextImage();
              }}
            >
              <span className="text-4xl">&gt;</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
