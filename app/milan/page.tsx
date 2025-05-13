"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";

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
  const lightboxRef = useRef<HTMLDivElement | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % photos.length;
    });
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + photos.length) % photos.length;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Si el clic ocurre fuera de la imagen, cerramos
    if (e.target === lightboxRef.current) {
      closeLightbox();
    }
  };

  return (
    <div className="min-h-screen mx-4 md:mx-52 pt-36 text-white">
      {/* Galería */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden cursor-pointer ${photo.span}`}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={photo.src}
              alt={`Foto ${index + 1}`}
              width={400}
              height={300}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur cursor-zoom-out"
          onClick={handleBackdropClick}
        >
          {/* Flecha izquierda */}
          <div
            className="absolute left-6 text-white text-5xl z-10 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            ‹
          </div>

          {/* Imagen centrada */}
          <div
            className="max-w-[90vw] max-h-[90vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].src}
              alt={`Ampliada ${lightboxIndex + 1}`}
              width={1000}
              height={700}
              className="object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Flecha derecha */}
          <div
            className="absolute right-6 text-white text-5xl z-10 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            ›
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;