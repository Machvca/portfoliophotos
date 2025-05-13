"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

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

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % photos.length);
  }, [lightboxIndex]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  }, [lightboxIndex]);

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

  return (
    <div className="min-h-screen  mx-52  pt-36">
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
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur">
          <button
            onClick={showPrev}
            className="absolute left-6 text-white text-5xl"
            aria-label="Anterior"
          >
            ‹
          </button>

          <Image
            src={photos[lightboxIndex].src}
            alt={`Ampliada ${lightboxIndex + 1}`}
            width={1000}
            height={700}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />

          <button
            onClick={showNext}
            className="absolute right-6 text-white text-5xl"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
