"use client";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";
import React from "react";
import Image from "next/image";

// Importa tus imágenes de retratos
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
  portrait13,
  portrait8,
  portrait9,
  portrait10,
  portrait11,
  portrait12,
  portrait7,
];

const portraitsPictures = portraitImages.map((image, index) => ({
  name: `Portrait ${index + 1}`,
  image,
  // Opcional: añade un poco de rotación distinta para cada tarjeta
  rotateClass: index % 2 === 0 ? "-rotate-9" : "rotate-6",
}));

export default function DraggableCardDemo() {
  return (
    <DraggableCardContainer className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Título en el centro */}
      <p className="absolute top-1/2 text-center text-4xl font-black text-neutral-400 dark:text-terracota">
        PORTRAITS
      </p>

      {portraitsPictures.map((portrait, index) => (
        <DraggableCardBody
          key={index}
          // Centra cada tarjeta y aplica rotación
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${portrait.rotateClass}`}
        >
          <Image
            src={portrait.image}
            alt={portrait.name}
            width={320}
            height={320}
            className="pointer-events-none relative z-10 h-100 w-80 md:h-100% md:w-100% object-cover"
          />
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
