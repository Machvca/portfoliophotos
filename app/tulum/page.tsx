import Gallery from "../components/Gallery";

const tulumGallery = () => (
  <Gallery
    photos={[
        { src: "/images/tul1.webp", span: "col-span-1 row-span-1" },
        { src: "/images/tul3.webp", span: "col-span-2 row-span-2" },
      { src: "/images/tul2.webp", span: "col-span-1 row-span-3" },
      { src: "/images/tul4.webp", span: "col-span-1 row-span-2" },
      {
        src: "/images/tul5.webp",
        span: "col-span-2 md:col-span-3 row-span-3",
      },
      { src: "/images/tul6.webp", span: "col-span-1 row-span-2" },
    ]}
    previousHref="/vienna"
    nextHref="/copen"
    previousCityName="Vienna, Austria"
    nextCityName="Copenhagen, Denmark"
    cityName="Tulum, Mexico"
  />
);

export default tulumGallery;
