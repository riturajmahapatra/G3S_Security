import React from "react";
import Footer from "../Footer";
import Navbar from "../../NavBar/Nav";
import Gallery from "../../Gallery/Gallery";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-[10vh] p-4">
        <h1 className="font-bold text-5xl text-center uppercase mb-10">
          Contact Us
        </h1>
        <Gallery customclass={"h-[29vh]"} />
        <div className="text-xl text-gray-600 my-24 ">
          <p>
            <strong>Address:</strong> Plot No 628,Kh No 537 G/F Ambedkar Colony
            Near Daily Bazar, Bijwasan, Delhi, 110061, Delhi
          </p>
          <p>
            <strong>Email:</strong> g3ssevices22@gmail.com ,info@g3ssecurity.com
          </p>
          <p>
            <strong>Phone:</strong> 9911148480, 9136013434
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
