"use client";

import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import { BackgroundLines } from "../components/ui/background-lines";
import milan3 from "../../public/images/milan3.webp";
import viena1 from "../../public/images/viena1.webp";
import tul3 from "../../public/images/tul3.webp";
import cop2 from "../../public/images/cop2.webp";
import bar5 from "../../public/images/bar5.webp";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    //@ts-expect-error to be fixed
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="bg-transparent font-mono px-4 mb-112 md:mb-14">
      <BackgroundLines className="flex items-center justify-center w-full flex-col  px-4 bg-transparent">
        <div className="w-full h-full py-15  mt-12 ">
          <h2 className="max-w-xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-terracota  ">
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
    category: "Italy",
    title: "Milan",
    src: milan3,
    link: "/milan",
  },
  {
    category: "Austria",
    title: "Vienna",
    src: viena1,
    link: "/vienna",
  },
  {
    category: "Mexico",
    title: "Tulum",
    src: tul3,
    link: "/tulum",
  },

  {
    category: "Denmark",
    title: "Copenhague",
    src: cop2,
    link: "/copen",
  },
  {
    category: "Spain",
    title: "Barcelona",
    src: bar5,
    link: "/barcelona",
  },
 
];
