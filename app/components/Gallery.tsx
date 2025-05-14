"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Photo {
  src: string;
  span: string;
}

interface GalleryProps {
  photos: Photo[];
  previousHref: string;
  nextHref: string;
  previousCityName: string;
  nextCityName: string;
  cityName: string;
}

const Gallery = ({
  photos,
  previousHref,
  nextHref,
  previousCityName,
  nextCityName,
  cityName,
}: GalleryProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const navigationHandler = useCallback(
    (direction: "prev" | "next") => {
      setLightboxIndex((current) => {
        if (current === null) return null;
        return direction === "next"
          ? (current + 1) % photos.length
          : (current - 1 + photos.length) % photos.length;
      });
    },
    [photos.length]
  );

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
    if (lightboxIndex !== null && lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [lightboxIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen mx-8 md:mx-52 py-20 md:py-32 ">
      {/* Photo Grid */}
      <h1 className=" font-bold text-5xl md:text-7xl text-verde-oliva text-right my-12">
        {" "}
        {cityName}{" "}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 mb-12">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`relative group rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:z-10 ${photo.span}`}
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={photo.src}
              alt={`Photo ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* City Navigation Links */}
      <div className="flex justify-between items-center px-4 md:px-8">
        <Link
          href={previousHref}
          className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 text-verde-oliva hover:text-terracota "
        >
          <span className="text-3xl md:text-4xl ">‹</span>
          <span className="font-medium text-xs md:text-xl ">{previousCityName}</span>
        </Link>

        <Link
          href={nextHref}
          className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 text-verde-oliva hover:text-terracota "
        >
          <span className="font-medium text-xs md:text-xl ">
            {nextCityName}
          </span>
          <span className="text-3xl md:text-4xl ">›</span>
        </Link>
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
                  alt={`Zoomed photo ${lightboxIndex + 1}`}
                  fill
                  className="object-contain rounded-xl"

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
    </div>
  );
};

export default Gallery;
