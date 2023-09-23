import { React, useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function TopBanner() {
  const images = [
    {
      url: "TopBannerCarousel/security1.webp",
    },

    {
      url: "TopBannerCarousel/security2.webp",
    },

    {
      url: "TopBannerCarousel/security3.webp",
    },

    {
      url: "TopBannerCarousel/security4.webp",
    },

    {
      url: "TopBannerCarousel/security5.webp",
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
    }, 4000);

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

          <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
            <BsChevronCompactLeft size={30} onClick={prevImg} />
          </div>
          <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
            <BsChevronCompactRight size={30} onClick={nextImg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
