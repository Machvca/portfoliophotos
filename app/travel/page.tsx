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
    <section>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-slate-200">
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

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "ITALY",
    title: "Milan",
    src: t1,
    content: <DummyContent />,
  },
  {
    category: "Austria",
    title: "Vienna",
    src: t2,
    content: <DummyContent />,
  },
  {
    category: "Mexico",
    title: "Tulum",
    src: t3,
    content: <DummyContent />,
  },

  {
    category: "Denmark",
    title: "Copenhague",
    src: t4,
    content: <DummyContent />,
  },
  {
    category: "Spain",
    title: "Barcelona",
    src: t5,
    content: <DummyContent />,
  },
  {
    category: "Portugal",
    title: "Portugal",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];



