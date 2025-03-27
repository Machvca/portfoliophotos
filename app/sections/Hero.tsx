"use client";
import { cn } from "@/lib/utils";
import React from "react";

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
      name: "Trips",
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
    <section className="relative w-full overflow-hidden md:px-24 mb-8">
      <div
        className={cn(
          "absolute inset-0 h-full",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="relative grid grid-cols-1 md:grid-cols-2 h-full w-full items-center justify-center dark:bg-black md:py-12 ">
        {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-stone-100/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
        {/* Fondo y texto */}
        <div className="min-h-[60vh] relative w-full flex flex-col  justify-center md:-mt-96 ">
          <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none " />

          <div className="absolute inset-0 z-20  flex flex-col justify-center font-bold  pointer-events-none items-center text-center md:items-start md:text-left mx-auto">
            <h1 className="text-2xl md:text-5xl bg-clip-text absolute drop-shadow-xl bg-gradient-to-b from-[#fff1e6] to-[#fff1e6]/50">
              Hi there, I&apos;m Jorge Machuca <br />
              <p className="lg:text-5xl">
                {" "}
                I&apos;m a{" "}
                <span className=" bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-amber-200 to-amber-950/90 z-20">
                  photographer
                </span>{" "}
                based <br /> in Barcelona, Spain
              </p>
            </h1>

            <p className="text-sm md:text-xl  mt-28 md:mt-44 bg-clip-text text-transparent drop-shadow-5xl bg-gradient-to-b from-amber-950 to-amber-200 ">
              Welcome to my Portfolio!
            </p>
          </div>
        </div>

        {/* Nueva sección para las imágenes */}
        <div className="w-full flex flex-col -mt-24 md:mt-4 md:mb-32 px-6 ">
          <div className="grid grid-cols-2 gap-3  md:py-16">
            {heroPictures.map(({ name, image, link }) => (
              <Link key={name} href={link} passHref>
                <div className="group relative cursor-pointer ">
                  <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={100}
                    className="rounded-md hover:opacity-70 transition-opacity duration-400"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-center text-white text-xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
