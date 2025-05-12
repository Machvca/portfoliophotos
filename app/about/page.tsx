"use client";
import React from "react";
import Image from "next/image";
import am from "../../assets/images/am.webp";
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background"

function page() {
  return (
    <AuroraBackground>
      <section className="mt-24 flex flex-col-2 text-left items-center space-x-5 mx-56 z-30 ">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-9xl font-mono text-terracota">ABOUT ME</h1>
          <p className="text-xl mt-4 text-slate-950 font-mono"> 
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
          className="rounded-md opacity-100 hover:scale-125  mask-r-from-80% mask-b-from-80% mask-from-90% mask-to-95%"
        />
      </section>
    </AuroraBackground>
  );
}

export default page;
