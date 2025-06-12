"use client";
import React from "react";
import Image from "next/image";
import am from "../../assets/images/am.webp";
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";

function Page() {
  return (
    <AuroraBackground>
      <section className="mt-24 md:mt-70 pb-28 md:pb-40 flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto z-30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
          className="w-full md:w-1/2 text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono text-terracota">
            ABOUT ME
          </h1>
          <p className="text-sm md:text-base lg:text-lg mt-6 text-slate-950 font-mono leading-relaxed">
            I'm a photographer from a small town in southern Mexico, now living
            in Barcelona since 2016. I&apos;ve always loved photography, but I
            never really thought about learning it seriously – until 2022, when
            I bought my first professional camera.
            <br />
            <br />
            I took a couple of courses, learned a lot on my own, and quickly got
            hooked.
            <br />
            <br />
            Since then, I haven’t stopped learning, practicing, and improving. I
            really enjoy the whole process – from editing to coming up with
            creative angles and ideas to capture nice shots.
            <br />
            <br />I mostly shoot portraits, events, and street photography –
            always looking for real moments, and personality in every frame.
          </p>
        </motion.div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={am}
            alt="Photo of myself"
            width={500}
            height={600}
            className="rounded-md hover:scale-105 transition-transform duration-300 w-full max-w-sm md:max-w-md object-cover mask-r-from-80% mask-b-from-80% mask-from-90% mask-to-95%"
          />
        </div>
      </section>
    </AuroraBackground>
  );
}

export default Page;
