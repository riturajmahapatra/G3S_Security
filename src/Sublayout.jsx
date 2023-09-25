import React from "react";
import Hero from "./Hero/Hero";
import TopBanner from "./NavBar/TopBarCarousel";
import NewsletterSection from "./NewsLetter/NewsLetter";
import { Outlet } from "react-router-dom";

const Sublayout = () => {
  return (
    <>
      <Outlet />
      <TopBanner />
      <Hero />
      <NewsletterSection />
    </>
  );
};

export default Sublayout;
