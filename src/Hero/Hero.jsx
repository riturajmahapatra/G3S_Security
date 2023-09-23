import React from "react";
import CardsSection from "./CardsSection";

const Hero = () => {
  return (
    <div className="container  m-auto">
      <CardsSection
        heading={"Our Vision"}
        desc={`At G3S Securities, our vision is clear and resolute: to become the foremost provider of security guard services in the industry. We aspire to achieve this by consistently delivering exceptional quality and value to our clients. Our commitment to excellence is the driving force behind our quest to set new standards in security services.`}
      />
      <CardsSection customclass={"flex-row-reverse"} />
      <CardsSection />
    </div>
  );
};

export default Hero;
