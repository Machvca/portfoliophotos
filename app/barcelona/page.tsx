import Gallery from "../components/Gallery";

const barcelonaGallery = () => (
  <Gallery
    photos={[
      { src: "/images/bar2.webp", span: "col-span-1 row-span-1" },
      { src: "/images/bar3.webp", span: "col-span-2 row-span-2" },
      { src: "/images/bar1.webp", span: "col-span-1 row-span-2" },
      { src: "/images/bar4.webp", span: "col-span-1 row-span-3" },
      {
        src: "/images/bar6.webp",
        span: "col-span-2 md:col-span-3 row-span-3",
      },
      { src: "/images/bar5.webp", span: "col-span-1 row-span-2" },
    ]}
    previousHref="/copen"
    nextHref="/travel"
    previousCityName="Copenhagen, Denmark"
    nextCityName=""
    cityName="Barcelona, Spain"
  />
);

export default barcelonaGallery;
