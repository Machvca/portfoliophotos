"use client";

import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import { BackgroundLines } from "../components/ui/background-lines";
import t1 from "../../assets/images/t1.jpg";
import t2 from "../../assets/images/t2.jpg";
import t3 from "../../assets/images/t3.jpg";
import t4 from "../../assets/images/t4.jpg";
import t5 from "../../assets/images/t5.jpg";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    //@ts-expect-error to be fixed
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="bg-transparent font-mono px-4">
      <BackgroundLines className="flex items-center justify-center w-full flex-col  px-4 bg-transparent">
        <div className="w-full h-full py-20 mt-24 ">
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
    link: "/tulum",
  },

  {
    category: "Denmark",
    title: "Copenhague",
    src: t4,
    link: "/copen",
  },
  {
    category: "Spain",
    title: "Barcelona",
    src: t5,
    link: "/barcelona",
  },
 
];
