"use client";
import React from "react";
import { cn } from "../../lib/utils";

import Image from "next/image";
import Link from "next/link";
import main1 from "../../assets/images/main1.jpg";
import main2 from "../../assets/images/main2.jpg";
import main3 from "../../assets/images/main3.jpg";
import main4 from "../../assets/images/main4.jpg";
import { ContainerTextFlip } from "../components/ui/container-text-flip";
import { Spotlight } from "../components/ui/spothlight-new.tsx";

export function Hero() {
  const heroPictures = [
    {
      name: "Latest",
      image: main2,
      link: "/latest",
    },
    {
      name: "Travel",
      image: main3,
      link: "/travel",
    },
    {
      name: "Shootings",
      image: main4,
      link: "/shootings",
    },
    {
      name: "Portraits",
      image: main1,
      link: "/portraits",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden md:px-24 mb-8 ">
      {/* <Spotlight className="-top-40 left-0 md:-top-10 " fill="#b1501f" /> */}
      <Spotlight  />
      <div
        className={cn(
          "absolute inset-0 h-full",
          "bg-size-[200px_200px]",
          "bg-[linear-gradient(to_right,#dbdbdb_1px,transparent_1px),linear-gradient(to_bottom,#dbdbdb_1px,transparent_1px)]"
        )}
      />
      <div className="relative grid grid-cols-1 mt-4 md:grid-cols-2 h-full w-full items-center justify-center md:py-12 ">
        {/* Fondo y texto */}
        <div className="min-h-[50vh] relative w-full  justify-center md:-mt-96 ">
          <div className="absolute inset-0 w-full h-full  z-10 mask-[radial-gradient(transparent,white)] pointer-events-none " />

          <div className="grid mb-32 md:mb-0 md:mt-48 mt-24 z-20 font-mono font-bold text-xl md:text-6xl pointer-events-none md:items-start text-center md:text-left mx-auto bg-clip-text text-transparent bg-gradient-to-tl from-verde-oliva to-stone-900">
            <h1 className=" ">
              Hi there! <br /> I&apos;m Jorge Machuca.
              <span>
                <br />
                I&apos;m a <br />
                <ContainerTextFlip /> {""}
                based in Barcelona, Spain
              </span>
            </h1>

            <p className="">Welcome to my Portfolio!</p>
          </div>
        </div>

        {/* Nueva sección para las imágenes */}
        <div className="w-full flex flex-col -mt-24 md:mt-4 md:mb-32 px-6 ">
          <div className="grid grid-cols-2 gap-3  md:py-16 ">
            {heroPictures.map(({ name, image, link }) => (
              <Link key={name} href={link} passHref>
                <div
                  className="
      group relative 
      cursor-pointer 
      overflow-hidden rounded-2xl 
      transform transition duration-500 
      hover:scale-105 hover:opacity-100
              hover:mask-t-from-99 hover:mask-b-from-99

      filter drop-shadow-[0_25px_25px_#c458247f]
    "
                >
                  <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={300}
                    className="
        w-full h-auto object-cover 
        transform transition-transform duration-500 
        group-hover:scale-125
         
      "
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-3xl text-stone-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
