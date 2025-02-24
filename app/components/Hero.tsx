"use client";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-indigo-300 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
     
    </div>
  );
}

