import Gallery from "../components/Gallery";

const milanGallery = () => (
  <Gallery
    photos={[
      { src: "/images/milan1.webp", span: "col-span-1 row-span-1" },
      { src: "/images/milan5.webp", span: "col-span-2 row-span-2" },
      { src: "/images/milan3.webp", span: "col-span-1 row-span-2" },
      { src: "/images/milan4.webp", span: "col-span-1 row-span-3" },
      {
        src: "/images/milan2.webp",
        span: "col-span-2 md:col-span-3 row-span-3",
      },
      { src: "/images/milan6.webp", span: "col-span-1 row-span-2" },
    ]}
    previousHref="/travel"
    nextHref="/vienna"
    previousCityName=""
    nextCityName="Vienna"
    cityName="Milan"
  />
);

export default milanGallery;
