import Gallery from "../components/Gallery";

const copenGallery = () => (
  <Gallery
    photos={[
        { src: "/images/cop1.webp", span: "col-span-1 row-span-3" },
        {
            src: "/images/cop2.webp",
            span: "col-span-2 md:col-span-3 row-span-4",
          },
        { src: "/images/cop3.webp", span: "col-span-1 row-span-1" },
        { src: "/images/cop4.webp", span: "col-span-1 row-span-2" },
        { src: "/images/cop5.webp", span: "col-span-1 row-span-2" },
        { src: "/images/cop6.webp", span: "col-span-2 row-span-2" },
    ]}

    previousHref="/tulum"
    nextHref="/barcelona"
    previousCityName="Tulum"
    nextCityName="Barcelona"
    cityName="Copenhagen, Denmark"
  />
);

export default copenGallery;                  
