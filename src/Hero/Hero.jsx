import React from "react";
import CardsSection from "./CardsSection";
import Gallery from "../Gallery/Gallery";
const Hero = () => {
  return (
    <div className="container  m-auto">
      <div className="text-center py-10">
        <h1 className="font-bold text-5xl uppercase m-10">About US</h1>
        <div className=" flex justify-center items-center">
          <p className="text-gray-600 text-lg w-[75%]">
            G3S Securities is a prominent Indian-based security solutions
            company that specializes in providing a wide spectrum of security
            services to meet the diverse needs of our clients. With a commitment
            to safeguarding businesses, institutions, and communities, G3S
            Securities has emerged as a trusted name in the security industry.
          </p>
        </div>
        <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{" "}
      </div>
      <CardsSection
        heading={"Our Vision"}
        desc={`At G3S Securities, our vision is clear and resolute: to become the foremost provider of security guard services in the industry. We aspire to achieve this by consistently delivering exceptional quality and value to our clients. Our commitment to excellence is the driving force behind our quest to set new standards in security services.`}
        images={"/Cards/sec1.webp"}
      />
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{" "}
      <CardsSection
        heading={"Our Values"}
        desc={`Integrity: We are unwavering in our commitment to honesty, transparency, and trustworthiness.
        Professionalism: Our highly skilled team prioritizes professionalism through continuous training.
        Teamwork: Collaboration and synergy drive our success, with every team member working cohesively to achieve shared goals.`}
        images={"/Cards/sec2.webp"}
        customclass={"flex-row-reverse"}
      />
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{" "}
      <CardsSection
        heading={"Our Services"}
        desc={`Armed and Unarmed Guards: We provide round-the-clock protection for your assets and premises.
        Crowd Control: Our expertise ensures the safety of large gatherings and events.   
        Emergency Response: We offer swift and effective crisis management.`}
        images={"/Cards/sec3.webp"}
      />
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{" "}
      <h1 className="font-bold text-5xl uppercase m-10 text-center">Gallery</h1>
      <Gallery />
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{" "}
    </div>
  );
};

export default Hero;
