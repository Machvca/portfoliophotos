import Gallery from "../components/Gallery";

const viennaGallery = () => (
  <Gallery
    photos={[
      { src: "/images/viena1.webp", span: "col-span-1 row-span-2" },
      { src: "/images/viena2.webp", span: "col-span-1 row-span-1" },
      {
        src: "/images/viena6.webp",
        span: "col-span-2 md:col-span-3 row-span-3",
      },
      { src: "/images/viena4.webp", span: "col-span-2 row-span-2" },
      { src: "/images/viena5.webp", span: "col-span-1 row-span-3" },
      { src: "/images/viena3.webp", span: "col-span-1 row-span-2" },
    ]}
    previousHref="/milan"
    nextHref="/tulum"
    previousCityName="Milan"
    nextCityName="Tulum"
    cityName="Vienna, Austria"
  />
);

export default viennaGallery;
