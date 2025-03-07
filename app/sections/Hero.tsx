"use client";
import { Boxes } from "../components/ui/background-boxes";
import Image from "next/image";
import main1 from "../../assets/images/main1.jpg";
import main2 from "../../assets/images/main2.jpg";
import main3 from "../../assets/images/main3.jpg";
import main4 from "../../assets/images/main4.jpg";



export function Hero() {
  const heroPictures = [
    {
      name: "Vienna",
      image: main2,
    },
    {
      name: "Milan",
      image: main3,
    },
    {
      name: "Tres de Copas",
      image: main4,
    },

    {
      name: "Bastien Bonilla",
      image: main1,
    },
  ];
  return (
    <section className="relative w-full overflow-hidden bg-slate-200 flex flex-col items-center justify-center">
      {/* Fondo y texto */}
      <div className="h-screen relative w-full flex flex-col items-center justify-center -mt-48 -mb-12">
        <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center font-bold px-4 pointer-events-none text-center mx-auto">
          <h1 className="text-3xl bg-clip-text absolute drop-shadow-xl bg-gradient-to-b from-[#fff1e6]/90 to-[#fff1e6]/50">
            Hi there, I&apos;m Jorge Machuca <br />
            <p className="lg:text-5xl">
              {" "}
              I&apos;m a{" "}
              <span className="text-[#222223] drop-shadow-2xl z-20">
                photographer
              </span>{" "}
              based <br /> in Barcelona, Spain
            </p>
          </h1>

          <p className="text-md mt-48 sm:mt-44 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-[#000000]/60 to-[#2700a8]">
            Scroll down to see my work!
          </p>
        </div>
      </div>

      {/* Nueva sección para las imágenes, posicionadas después del texto */}
      <div className=" -mt-44 w-full flex flex-col items-center mb-8">
        <div className="grid grid-cols-2 gap-3 px-8">
          {heroPictures.map(({ name, image }) => (
            <div key={name} className="group relative">
              <Image
                src={image}
                alt={name}
                width={550}
                height={400}
                className="rounded-md shadow-slate-900 hover:opacity-70"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center text-white text-xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}