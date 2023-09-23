import React from "react";

const CardsSection = ({ heading, desc, customclass, images }) => {
  return (
    <div>
      <div
        className={`flex items-center justify-center  space-x-10 gap-10  p-10 w-full   ${customclass}`}
      >
        <div className="w-[30%]">
          <img
            src={images}
            alt="g3s image"
            className="rounded-xl w-[50vw] h-[30vh] object-cover"
          />
        </div>
        <div className="w-[60%] ">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 bg-slate-300 p-3 uppercase inline-block mb-3">
              {heading}
            </h2>
            <p className="text-gray-600 text-lg">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
