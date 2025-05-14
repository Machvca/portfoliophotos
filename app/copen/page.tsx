import Gallery from "../components/Gallery";

const copenGallery = () => (
  <Gallery
    photos={[
        { src: "/images/portrait3.webp", span: "col-span-1 row-span-3" },
        {
            src: "/images/portrait3.webp",
            span: "col-span-2 md:col-span-3 row-span-4",
          },
        { src: "/images/portrait3.webp", span: "col-span-1 row-span-1" },
        { src: "/images/portrait3.webp", span: "col-span-1 row-span-2" },
        { src: "/images/portrait3.webp", span: "col-span-1 row-span-2" },
        { src: "/images/portrait3.webp", span: "col-span-2 row-span-2" },
    ]}
    previousHref="/tulum"
    nextHref="/barcelona"
    previousCityName="Tulum, México"
    nextCityName="Barcelona, Spain"
    cityName="Copenhagen, Denmark"
  />
);

export default copenGallery;
