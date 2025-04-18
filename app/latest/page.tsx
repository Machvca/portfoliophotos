"use client";

import latest1 from "../../assets/images/latest1.webp";
import latest2 from "../../assets/images/latest2.webp";
import latest3 from "../../assets/images/latest3.webp";
import latest4 from "../../assets/images/latest4.webp";
import latest5 from "../../assets/images/latest5.webp";
import latest6 from "../../assets/images/latest6.webp";

import { Carousel } from "../components/ui/carousel";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "",
      button: "Explore Component",
      src: latest1.src,
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: latest2.src,
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: latest3.src,
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: latest4.src,
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: latest5.src,
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: latest6.src,
    },
  ];
  return (
    <>
      <div className="relative overflow-hidden w-full h-full py-60">
        <Carousel slides={slideData} />
      </div>
    </>
  );
}
