// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { cn } from "../../lib/utils";


// import sh1 from "../../assets/images/sh1.webp";
// import sh2 from "../../assets/images/sh2.webp";
// import sh3 from "../../assets/images/sh3.webp";
// import sh4 from "../../assets/images/sh4.webp";
// import sh5 from "../../assets/images/sh5.webp";
// import sh6 from "../../assets/images/sh6.webp";
// import sh7 from "../../assets/images/sh7.webp";
// import sh8 from "../../assets/images/sh8.webp";
// import sh9 from "../../assets/images/sh9.webp";
// import sh10 from "../../assets/images/sh10.webp";
// import sh11 from "../../assets/images/sh11.webp";
// import sh12 from "../../assets/images/sh12.webp";
// // import sh13 from "../../assets/images/sh13.webp";

// const shImages = [
//   sh1,
//   sh2,
//   sh3,
//   sh4,
//   sh5,
//   sh6,
//   sh7,
//   sh8,
//   // sh13,
//   sh9,
//   sh10,
//   sh11,
//   sh12,
// ];

// const shootingPictures = shImages.map((image, index) => ({
//   name: `sh ${index + 1}`,
//   image,
// }));

// export default function BackgroundBeamsDemo() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [currentIndex, setCurrentIndex] = useState<number | null>(null);



//   const goToPreviousImage = useCallback(() => {
//     if (currentIndex !== null && currentIndex > 0) {
//       setSelectedImage(shootingPictures[currentIndex - 1].image.src);
//       setCurrentIndex(currentIndex - 1);
//     }
//   }, [currentIndex]);

//   const goToNextImage = useCallback(() => {
//     if (currentIndex !== null && currentIndex < shootingPictures.length - 1) {
//       setSelectedImage(shootingPictures[currentIndex + 1].image.src);
//       setCurrentIndex(currentIndex + 1);
//     }
//   }, [currentIndex]);

  
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setSelectedImage(null);
//       if (e.key === "ArrowLeft") goToPreviousImage();
//       if (e.key === "ArrowRight") goToNextImage();
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [goToNextImage, goToPreviousImage]);

//   // Función para seleccionar la imagen al hacer click
//   const selectImage = (index: number) => {
//     setSelectedImage(shootingPictures[index].image.src);
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="w-full min-h-screen relative flex flex-col items-center justify-center antialiased py-20 md:py-40 ">
//       {/* Background debajo */}
//       <div className="absolute inset-0 z-0"></div>
//       <div
//         className={cn(
//           "pointer-events-none absolute inset-0 bg-size-[180px_180px] select-none",
//           "bg-[linear-gradient(to_right,#d0d0d0_1px,transparent_1px),linear-gradient(to_bottom,#d0d0d0_1px,transparent_1px)]"
//         )}
//       />

//       {/* Galería */}
//       <div className="relative z-10 max-w-6xl  p-4 grid grid-cols-2 gap-4  md:grid-cols-3">
//         {shootingPictures.map((portrait, index) => (
//           <div
//             key={index}
//             onClick={() => selectImage(index)}
//             className="relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
//           >
//             <Image
//               src={portrait.image}
//               alt={portrait.name}
//               className="w-full h-auto object-cover transition-transform duration-300 hover:scale-130"
//               // priority={index === 0} // 👈 AQUI VA LA SOLUCIÓN
//             />
//           </div>
//         ))}
//       </div>

//       {/* Modal con imagen expandida */}
//       <AnimatePresence>
//         {selectedImage && currentIndex !== null && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
//             onClick={() => setSelectedImage(null)}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               onClick={(e) => e.stopPropagation()} // <- evita que cierre el modal
//             >
//               <Image
//                 src={selectedImage}
//                 alt="Expanded"
//                 width={1200}
//                 height={1200}
//                 className="max-w-full max-h-screen object-contain"
//                 // priority={index === 0}
//               />
//             </motion.div>

//             {/* Flechas para navegar entre imágenes */}
//             <div
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 cursor-pointer z-50"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 goToPreviousImage();
//               }}
//             >
//               <span className="text-4xl">&lt;</span>
//             </div>
//             <div
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 cursor-pointer z-50"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 goToNextImage();
//               }}
//             >
//               <span className="text-4xl">&gt;</span>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

import { FocusCards } from "../components/ui/focus-cards";

import sh1 from "../../assets/images/sh1.webp";
import sh2 from "../../assets/images/sh2.webp";
import sh3 from "../../assets/images/sh3.webp";
import sh4 from "../../assets/images/sh4.webp";
import sh5 from "../../assets/images/sh5.webp";
import sh6 from "../../assets/images/sh6.webp";
import sh7 from "../../assets/images/sh7.webp";
import sh8 from "../../assets/images/sh8.webp";
import sh9 from "../../assets/images/sh9.webp";
import sh10 from "../../assets/images/sh10.webp";
import sh11 from "../../assets/images/sh11.webp";
import sh12 from "../../assets/images/sh12.webp";


const shImages = [
  sh1,
  sh2,
  sh3,
  sh4,
  sh5,
  sh6,
  sh7,
  sh8,
  sh9,
  sh10,
  sh11,
  sh12,
];

export default function FocusCardsDemo() {
  const cards = shImages.map((img, index) => ({
    title: `Card ${index + 1}`,
    src: img.src,
  }));

  return <FocusCards cards={cards}  />;
}

