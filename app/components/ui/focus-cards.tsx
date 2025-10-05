"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CardData = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: CardData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const selectImage = useCallback(
    (index: number) => {
      setSelectedImage(cards[index].src);
      setCurrentIndex(index);
    },
    [cards]
  );

  const goToPreviousImage = useCallback(() => {
    if (currentIndex !== null && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setSelectedImage(cards[newIndex].src);
      setCurrentIndex(newIndex);
    }
  }, [currentIndex, cards]);

  const goToNextImage = useCallback(() => {
    if (currentIndex !== null && currentIndex < cards.length - 1) {
      const newIndex = currentIndex + 1;
      setSelectedImage(cards[newIndex].src);
      setCurrentIndex(newIndex);
    }
  }, [currentIndex, cards]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setCurrentIndex(null);
      }
      if (e.key === "ArrowLeft") goToPreviousImage();
      if (e.key === "ArrowRight") goToNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPreviousImage, goToNextImage]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mt-36 px-8 md:mx-auto md:px-8 w-full mb-16">
        {cards.map((card, index) => (
          <div
            key={card.title}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => selectImage(index)}
            className={cn(
              "rounded-lg relative bg-gray-900 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",
              hovered !== null && hovered !== index && "blur-sm scale-[0.99]"
            )}
          >
            <Image
              src={card.src}
              alt={card.title}
              width={800}
              height={600}
              loading="lazy"
              unoptimized
              className="object-cover absolute inset-0"
            />
            <div
              className={cn(
                "absolute inset-0 bg-black/30 flex items-end py-8 px-4 transition-opacity duration-300",
                hovered === index ? "opacity-0" : "opacity-100"
              )}
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
            onClick={() => {
              setSelectedImage(null);
              setCurrentIndex(null);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage}
                alt="Expanded"
                width={1200}
                height={1200}
                loading="lazy"
                unoptimized
                className="max-w-full max-h-screen object-contain "
              />
            </motion.div>

            <div
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-terracota/70 hover:text-indigo-900 cursor-pointer z-50"
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousImage();
              }}
            >
              <span className="text-4xl select-none">&lt;</span>
            </div>
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-terracota/70 hover:text-terracota cursor-pointer z-50"
              onClick={(e) => {
                e.stopPropagation();
                goToNextImage();
              }}
            >
              <span className="text-4xl select-none">&gt;</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
