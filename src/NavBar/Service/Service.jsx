import React from "react";
import Navbar from "../Nav";
import Footer from "../../Footer/Footer";

const Service = () => {
  const serviceAreas = [
    "UNNAO",
    "SITAPUR",
    "SHRIGANGA NAGAR",
    "PRATAPGARH",
    "DELHI & NCR",
    "JAIPUR",
    "MEERUT",
    "LUCKNOW",
    "KANPUR",
    "ALLAHABAD",
    "GURGAON",
  ];
  return (
    <div>
      <Navbar />
      <div className="flex items-center  justify-center my-[10vh]">
        <div className="container mx-auto px-8 py-8">
          <h1 className="font-bold text-5xl text-center uppercase mb-10">
            Services
          </h1>
          <div className="flex justify-center items-center gap-52 max-lg:flex-col-reverse ">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 bg-slate-300 p-3 uppercase inline-block  my-10">
                Our Service Areas
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-600 mt-4 pl-4">
                {serviceAreas.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
            <div className="">
              <img
                src="/Map/map.png"
                alt="india map"
                className="h-[50vh] w-[20vw] max-lg:w-[100vw]"
              />
            </div>
          </div>
          <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
