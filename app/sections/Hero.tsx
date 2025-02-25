"use client";
import { Boxes } from "../components/ui/background-boxes";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-indigo-300 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center font-bold px-4 pointer-events-none text-center mx-auto ">
        <h1 className="text-3xl bg-clip-text absolute   drop-shadow-xl bg-gradient-to-b from-[#fff1e6]/90 to-[#fff1e6]/50">
          Hi, i&apos;m Jorge Machuca <br />
          <p className="lg:text-5xl">
            {" "}
            I&apos;m a{" "}
            <span className="text-[#222223] drop-shadow-2xl z-20">
              photographer
            </span>{" "}
            based <br /> in Barcelona, spain
          </p>
        </h1>

        <p className="text-md mt-48 sm:mt-44 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-[#fff1e6]/90 to-[#fff1e6]/40 ">
          Scroll down to see my work!
        </p>
      </div>
    </div>
  );
}
