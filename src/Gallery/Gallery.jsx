import { React, useEffect, useState } from "react";

function Gallery() {
  const images = [
    {
      url: "/Gallery/sec1.webp",
    },
    {
      url: "/Gallery/sec2.webp",
    },
    {
      url: "/Gallery/sec3.webp",
    },
    {
      url: "Gallery/sec6.webp",
    },
    {
      url: "Gallery/sec10.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    const IsFirst = currentIndex === 0;
    const newIndex = IsFirst ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImg = () => {
    const IsFirst = currentIndex === images.length - 1;
    const newIndex = IsFirst ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      nextImg();
    }, 2000);

    // Clear the interval when the component unmounts or when currentIndex changes.
    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentIndex]);

  return (
    <>
      <div className=" mt-10 flex items-center gap-5 ">
        <div className=" group relative h-[50vh] w-full object-cover  ">
          <div
            style={{
              backgroundImage: `url(${images[currentIndex].url})`,
            }}
            className=" flex h-full w-full items-center justify-center bg-cover bg-center duration-500"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
