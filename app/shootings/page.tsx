import { FocusCards } from "../components/ui/focus-cards";

const shImages = [
  "/images/sh1.webp",
  "/images/sh2.webp",
  "/images/sh3.webp",
  "/images/sh4.webp",
  "/images/sh5.webp",
  "/images/sh6.webp",
  "/images/sh7.webp",
  "/images/sh8.webp",
  "/images/sh9.webp",
  "/images/sh10.webp",
  "/images/sh11.webp",
  "/images/sh12.webp",
];

export default function FocusCardsDemo() {
  const cards = shImages.map((src, index) => ({
    title: `Card ${index + 1}`,
    src,
  }));

  return <FocusCards cards={cards} />;
}
