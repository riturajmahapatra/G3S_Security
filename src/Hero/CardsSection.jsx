import React from "react";

const CardsSection = ({ heading, desc, customclass, images }) => {
  return (
    <div>
      <div
        className={`flex items-center w-full space-x-10 p-10 ${customclass}`}
      >
        <div className="h-60 w-full  rounded-xl bg-gray-300 object-cover">
          <img src={images} alt="g3s image" />
        </div>
        <div>
          <h2 className="text-xl w-1/3 font-semibold text-gray-800">
            {heading}
          </h2>
          <p className="text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
