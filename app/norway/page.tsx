

import Gallery from "../components/Gallery"; // ajusta según tu ruta real

const norwayGallery = () => (
  <Gallery
    photos={[
      { src: "/images/nor1.webp", span: "col-span-1 row-span-1" },
      { src: "/images/nor5.webp", span: "col-span-2 row-span-2" },
      { src: "/images/nor3.webp", span: "col-span-1 row-span-2" },
      { src: "/images/nor2.webp", span: "col-span-1 row-span-3" },
      {
        src: "/images/nor6.webp",
        span: "col-span-2 md:col-span-3 row-span-3",
      },
      { src: "/images/nor4.webp", span: "col-span-1 row-span-2" },
    ]}
    previousHref="/travel"
    nextHref="/milan"
    previousCityName=""
    nextCityName="Milan"
    cityName="Norway"
  />
);

export default norwayGallery;

