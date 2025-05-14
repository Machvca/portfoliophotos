import Gallery from "../components/Gallery";

const barcelonaGallery = () => (
  <Gallery
    photos={[
      { src: "/images/portrait3.webp", span: "col-span-1 row-span-1" },
      { src: "/images/portrait3.webp", span: "col-span-2 row-span-2" },
      { src: "/images/portrait3.webp", span: "col-span-1 row-span-2" },
      { src: "/images/portrait3.webp", span: "col-span-1 row-span-3" },
      {
        src: "/images/portrait3.webp",
        span: "col-span-2 md:col-span-3 row-span-3",
      },
      { src: "/images/portrait3.webp", span: "col-span-1 row-span-2" },
    ]}
    previousHref="/copen"
    nextHref="/travel"
    previousCityName="Copenhagen, Denmark"
    nextCityName=""
    cityName="Barcelona, Spain"
  />
);

export default barcelonaGallery;
