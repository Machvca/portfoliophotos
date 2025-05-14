"use client";
import React from "react";
import Image from "next/image";
import am from "../../assets/images/am.webp";
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";

function Page() {
  return (
    <AuroraBackground>
      <section className="mt-28 md:mt-24 pb-16 flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-20 z-30 max-w-7xl mx-12">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: "easeInOut",
          }}
          className="text-left"
        >
          <h1 className="text-left md:text-left text-5xl md:text-7xl lg:text-9xl font-mono text-terracota">
            ABOUT ME
          </h1>
          <p className=" text-sm md:text-lg lg:text-xl mt-4 text-slate-950 font-mono">
            I&apos;m a photographer from a small town in southern Mexico, now living
            in Barcelona since 2016. I&apos;ve always loved photography, but I never
            really thought about learning it seriously – until 2022, when I
            bought my first professional camera. I took a couple of courses,
            learned a lot on my own, and quickly got hooked. Since then, I
            haven’t stopped learning, practicing, and improving. I really enjoy the whole process – from editing to
            coming up with creative angles and ideas to capture nice shots. I mostly shoot portraits, events, and
            street photography – always looking for real moments, 
            and personality in every frame.
          </p>
        </motion.div>
        <Image
          src={am}
          alt="Photo of myself"
          width={500}
          height={100}
          className="rounded-md opacity-100 hover:scale-105 transition-transform duration-300 w-full max-w-sm md:max-w-md mask-r-from-80% mask-b-from-80% mask-from-90% mask-to-95%"
          priority
        />
      </section>
    </AuroraBackground>
  );
}

export default Page;
