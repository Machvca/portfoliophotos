import Gallery from "../components/Gallery";

const tulumGallery = () => (
  <Gallery
    photos={[
        { src: "/images/portrait3.webp", span: "col-span-1 row-span-1" },
        { src: "/images/portrait3.webp", span: "col-span-2 row-span-2" },
      { src: "/images/portrait3.webp", span: "col-span-1 row-span-3" },
      { src: "/images/portrait3.webp", span: "col-span-1 row-span-2" },
      {
        src: "/images/portrait3.webp",
        span: "col-span-2 md:col-span-3 row-span-3",
      },
      { src: "/images/portrait3.webp", span: "col-span-1 row-span-2" },
    ]}
    previousHref="/vienna"
    nextHref="/copen"
    previousCityName="Vienna, Austria"
    nextCityName="Copenhagen, Denmark"
    cityName="Tulum, Mexico"
  />
);

export default tulumGallery;
