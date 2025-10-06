"use client";
import React from "react";
import { cn } from "../../lib/utils";
import Image from "next/image";
import Link from "next/link";
import mainportrait from "../../assets/images/mainportrait.webp";
import sh12 from "../../public/images/sh12.webp";
import milan2 from "../../public/images/milan2.webp";
import mainlatest from "../../assets/images/mainlatest.webp";
import { ContainerTextFlip } from "../components/ui/container-text-flip";
import { motion } from "framer-motion";

export function Hero() {
  const heroPictures = [
    {
      name: "Latest",
      image: mainlatest,
      link: "/latest",
    },
    {
      name: "Travel",
      image: milan2,
      link: "/travel",
    },
    {
      name: "Shootings",
      image: sh12,
      link: "/shootings",
    },
    {
      name: "Portraits",
      image: mainportrait,
      link: "/portraits",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden md:px-24   ">
      <div
        className={cn(
          "absolute inset-0 h-full",
          "bg-size-[80px_80px]",
          "bg-[linear-gradient(to_right,#312c85_1px,transparent_1px),linear-gradient(to_bottom,#312c85_1px,transparent_1px)]"
        )}
      />
      <div className="relative grid grid-cols-1 md:grid-cols-2 h-full w-full items-center justify-center md:py-12">
        {/* Texto principal */}
        <div className="min-h-[50vh] relative w-full justify-center md:-mt-136">
          <div className="absolute inset-0 w-full h-full z-10 mask-[radial-gradient(transparent,white)] pointer-events-none" />
          <div className="grid mb-32 animate-pulse-fade-in animate-duration-900 delay-800 md:mb-0 mt-28 z-20 font-spaceMono font-bold text-2xl md:text-3xl lg:text-5xl xl:text-6xl pointer-events-none md:items-start text-center md:text-left mx-auto bg-clip-text text-transparent bg-linear-to-r/srgb from-[#eae9ff] to-[#eae9ff]">
            <h1>
              Hi there! <br /> I&apos;m Jorge Machuca I&apos;m a <br />
              <ContainerTextFlip /> {""}
              based in Hemsedal, Norway.
            </h1>
            <p>Welcome to my portfolio!</p>
          </div>
        </div>

        {/* Galería */}
        <div className="w-full grid -mt-24 md:mt-4 md:mb-32 px-6">
          <div className="grid grid-cols-2 gap-4 md:gap-3 md:py-16 mx-4 md:mx-0 pb-16">
            {heroPictures.map(({ name, image, link }, index) => (
              <Link key={name} href={link} passHref>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-2xl",
                    "transform transition duration-500 hover:scale-105 hover:opacity-100",
                    "filter ",
                    "hover:mask-t-from-99 hover:mask-b-from-99"
                  )}
                >
                  <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={300}
                    className={cn(
                      "w-full h-auto object-cover",
                      "transform transition-transform duration-500",
                      "scale-105 md:scale-100",
                      "group-hover:scale-125"
                    )}
                  />
                  <h1
                    className={cn(
                      "absolute bottom-0 md:bottom-10 left-1/2 -translate-x-1/2", // 👈 centrado horizontal
                      "text-sm md:text-3xl font-medium  text-slate-200",
                      "bg-indigo-900/60 px-4 py-2 rounded-md",
                      "transition-all duration-500",
                      "md:bg-none",
                      "opacity-100 md:opacity-0 md:group-hover:opacity-100"
                    )}
                  >
                    {name}
                  </h1>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
