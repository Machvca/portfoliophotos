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
          <h1 className="text-4xl md:text-5xl lg:text-8xl  text-indigo-300">
            ABOUT ME
          </h1>
          <p className="text-sm md:text-base lg:text-lg mt-6 text-[#eae9ff]  leading-relaxed">
            I’m a photographer from southern Mexico, living in Barcelona since
            2016.
            <br />
            After several years there, I decided to move to Hemsedal, Norway, in
            search of new opportunities for both personal and professional
            growth.
            <br />
            In 2022 I bought my first professional camera and turned a long-time
            passion into my career.
            <br />
            I focus on portraits, events, and street photography, always aiming
            to capture authentic moments and real personality.
            <br />
            Inspired now by Norway’s light and landscapes, I’m excited to bring
            that atmosphere into my photography.
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
