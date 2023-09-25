import React from "react";
import Hero from "../../Hero/Hero";
import TopBanner from "../TopBarCarousel";
import NewsletterSection from "../../NewsLetter/NewsLetter";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Outlet />
      <TopBanner />
      <Hero />
      <NewsletterSection />
    </>
  );
};

export default Home;
