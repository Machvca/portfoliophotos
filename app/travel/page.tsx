"use client";
import Image from "next/image";

import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import { BackgroundLines } from "../components/ui/background-lines";
import t1 from "../../assets/images/t1.jpg"
import t2 from "../../assets/images/t2.jpg"
import t3 from "../../assets/images/t3.jpg"
import t4 from "../../assets/images/t4.jpg"
import t5 from "../../assets/images/t5.jpg";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="bg-transparent">
      <BackgroundLines className="flex items-center justify-center w-full flex-col -ml-24 px-4 bg-transparent">
        <div className="w-full h-full py-20 mt-24">
          <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Some of the photos from my last trips
          </h2>
          <Carousel items={cards} />
        </div>
      </BackgroundLines>
    </section>
  );
}



const data = [
  {
    category: "ITALY",
    title: "Milan",
    src: t1,
    link: "/milan",
  },
  {
    category: "Austria",
    title: "Vienna",
    src: t2,
    link: "/vienna",
  },
  {
    category: "Mexico",
    title: "Tulum",
    src: t3,
    link: "/mexico",
  },

  {
    category: "Denmark",
    title: "Copenhague",
    src: t4,
    link: "/denmark",
  },
  {
    category: "Spain",
    title: "Barcelona",
    src: t5,
    link: "/spain",
  },
  {
    category: "Portugal",
    title: "Portugal",
    src: t5,
    link: "/portugal",
  },
];



