import React from "react";
import Navbar from "../Nav";
import Footer from "../../Footer/Footer";

const Service = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center  justify-center my-[10vh]">
        <div className="container mx-auto px-8 py-8">
          <h1 className="font-bold text-5xl text-center uppercase mb-10">
            Services
          </h1>
          <img src="/Map/map.png" alt="india map" className="red " />
          <h2 className="text-2xl font-semibold">Our Service Areas</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 mt-4 pl-4">
            <li>UNNAO</li>
            <li>SITAPUR</li>
            <li>SHRIGANGA NAGAR</li>
            <ul className="list-disc list-inside text-lg text-gray-600 pl-4">
              <li>SHRIGANGA NAGAR</li>
              <li>PRATAPGARH</li>
              <li>DELHI & NCR</li>
              <li>JAIPUR</li>
              <li>MEERUT</li>
            </ul>
            <li>LUCKNOW</li>
            <ul className="list-disc list-inside text-lg text-gray-600 pl-4">
              <li>KANPUR</li>
              <li>ALLAHABAD</li>
            </ul>
            <li>GURGAON</li>
            <ul className="list-disc list-inside text-lg text-gray-600 pl-4">
              <li>SHRIGANGA NAGAR</li>
              <li>SHRIGANGA NAGAR</li>
              <li>SITAPUR</li>
            </ul>
          </ul>
          <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
