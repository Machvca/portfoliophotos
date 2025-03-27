"use client";
import React from "react";
import Image from "next/image";
import am from "../../assets/images/am.webp";
import { motion } from "motion/react";
import { AuroraBackground } from "../components/ui/aurora-background"

function page() {
  return (
    <AuroraBackground>
      <section className="mt-48 flex flex-col-2 items-center space-x-5 mx-24 z-30">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-4xl">ABOUT ME</h1>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, id
            quia? Ab, eligendi cupiditate minima animi, porro quaerat dolores at
            possimus necessitatibus excepturi, maiores laborum obcaecati optio.
            Et, pariatur adipisci? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Incidunt rerum ducimus minima natus iste
            necessitatibus assumenda cupiditate quia, delectus sit? Fugit dicta
            esse fuga neque maiores accusantium sapiente placeat expedita.
          </p>
        </motion.div>
        <Image
          src={am}
          alt={"Photo of myself"}
          width={500}
          height={100}
          className="rounded-md opacity-100 hover:opacity-90"
        />
      </section>
    </AuroraBackground>
  );
}

export default page;
