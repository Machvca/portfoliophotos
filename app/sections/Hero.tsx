"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { Spotlight } from "../components/ui/Spotlight";
import Image from "next/image";
import Link from "next/link";
import main1 from "../../assets/images/main1.jpg";
import main2 from "../../assets/images/main2.jpg";
import main3 from "../../assets/images/main3.jpg";
import main4 from "../../assets/images/main4.jpg";

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
    <section className="relative w-full overflow-hidden md:px-24 mb-8 bg-terracota/60 ">
      <Spotlight className="-top-90 left-0 md:-top-50 " fill="white" />
      <div
        className={cn(
          "absolute inset-0 h-full",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
        )}
      />
      <div className="relative grid grid-cols-1 md:grid-cols-2 h-full w-full items-center justify-center dark:bg-transparent md:py-12 ">
        {/* Fondo y texto */}
        <div className="min-h-[50vh] relative w-full  justify-center md:-mt-96 ">
          <div className="absolute inset-0 w-full h-full  z-10 mask-[radial-gradient(transparent,white)] pointer-events-none " />

          <div className="grid  z-20 font-mono font-bold text-6xl pointer-events-none md:items-start text-left mx-auto bg-clip-text text-transparent bg-gradient-to-tl from-verde-oliva to-stone-950 via-verde-oliva/ ">
            <h1 className=" ">
              Hi there! <br /> I&apos;m Jorge Machuca.
              <span>
                <br />
                I&apos;m a <span className=" text-terracota">
                  photographer
                </span>{" "}
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
                <div className="group relative cursor-pointer hover:scale-105 hover:opacity-90 transition-transform duration-500">
                  <Image
                    src={image}
                    alt={name!}
                    width={500}
                    height={100}
                    className="rounded-md shadow-2xl shadow-terracota/40 hover:opacity-40 transition-opacity duration-400"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-center bg-verde-oliva/10 text-verde-oliva text-3xl  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
