// "use client";
// import {
//   DraggableCardBody,
//   DraggableCardContainer,
// } from "../components/ui/draggable-card";
// import React from "react";
// import Image from "next/image";

// // Importa tus imágenes de retratos
// import portrait1 from "../../assets/images/portrait1.webp";
// import portrait2 from "../../assets/images/portrait2.webp";
// import portrait3 from "../../assets/images/portrait3.webp";
// import portrait4 from "../../assets/images/portrait4.webp";
// import portrait5 from "../../assets/images/portrait5.webp";
// import portrait6 from "../../assets/images/portrait6.webp";
// import portrait7 from "../../assets/images/portrait7.webp";
// import portrait8 from "../../assets/images/portrait8.webp";
// import portrait9 from "../../assets/images/portrait9.webp";
// import portrait10 from "../../assets/images/portrait10.webp";
// import portrait11 from "../../assets/images/portrait11.webp";
// import portrait12 from "../../assets/images/portrait12.webp";
// import portrait13 from "../../assets/images/portrait13.webp";

// const portraitImages = [
//   portrait1,
//   portrait2,
//   portrait3,
//   portrait4,
//   portrait5,
//   portrait6,
//   portrait13,
//   portrait9,
//   portrait10,
//   portrait11,
//   portrait12,
//   portrait7,
//   portrait8,
// ];

// const portraitsPictures = portraitImages.map((image, index) => ({
//   name: `Portrait ${index + 1}`,
//   image,
//   // Opcional: añade un poco de rotación distinta para cada tarjeta
//   rotateClass: index % 2 === 0 ? "-rotate-9" : "rotate-6",
// }));

// export default function DraggableCardDemo() {
//   return (
//     <DraggableCardContainer className="relative flex h-screen w-full items-center justify-center overflow-hidden ">
//       {/* Título en el centro */}
//       <h1 className="absolute top-1/2 text-center text-4xl  text-indigo-900">
//         PORTRAITS
//       </h1>
//       <p className="absolute top-1/2 -translate-y-4 text-center text-sm text-indigo-200 mt-16 max-w-sm px-4">
//         Doing portraits is probably my favorite part of photography.  it’s when
//         I feel most creative c:
//       </p>

//       {portraitsPictures.map((portrait, index) => (
//         <DraggableCardBody
//           key={index}
//           // Centra cada tarjeta y aplica rotación
//           className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${portrait.rotateClass}`}
//         >
//           <Image
//             src={portrait.image}
//             alt={portrait.name}
//             width={320}
//             height={320}
//             className="pointer-events-none relative z-10 h-100 w-80 md:h-100% md:w-100% object-cover"
//           />
//         </DraggableCardBody>
//       ))}
//     </DraggableCardContainer>
//   );
// }

"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";

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
import portrait14 from "../../assets/images/mainlatest.webp";
import portrait15 from "../../assets/images/latest2.webp";
import portrait16 from "../../assets/images/latest4.webp";
import portrait17 from "../../assets/images/portrait17.webp";
import portrait18 from "../../assets/images/portrait18.webp";
import portrait19 from "../../assets/images/portrait19.webp";
import portrait20 from "../../assets/images/portrait20.webp";



const portraitImages = [
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  portrait5,
  portrait6,
  portrait13,
  portrait9,
  portrait10,
  portrait11,
  portrait12,
  portrait7,
  portrait8,
  portrait14,
  portrait15,
  portrait16,
  portrait17,
  portrait18,
  portrait19,
  portrait20,

];

export default function DraggableCardDemo() {
  // Mezcla las imágenes aleatoriamente al cargar la página
  const shuffledPortraits = useMemo(() => {
    const shuffled = [...portraitImages]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({
        name: `Portrait ${index + 1}`,
        image,
        rotateClass: index % 2 === 0 ? "-rotate-9" : "rotate-6",
      }));
    return shuffled;
  }, []);

  return (
    <DraggableCardContainer className="relative flex h-screen w-full items-center justify-center overflow-hidden">

      <h1 className="absolute top-1/2 text-center text-4xl  text-indigo-900">
        PORTRAITS {" "}
      </h1>
      {" "}
      <p className="absolute top-1/2 -translate-y-4 text-center text-sm text-indigo-200 mt-16 max-w-sm px-4">
         Doing portraits is probably my favorite part of photography. it’s
        when 
        I feel most creative c: {" "}
      </p>
      {/* Tarjetas de imágenes aleatorias */}
      {shuffledPortraits.map((portrait, index) => (
        <DraggableCardBody
          key={index}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${portrait.rotateClass}`}
        >
          <Image
            src={portrait.image}
            alt={portrait.name}
            width={320}
            height={320}
            className="pointer-events-none relative z-20 h-100 w-80 object-cover"
          />
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

