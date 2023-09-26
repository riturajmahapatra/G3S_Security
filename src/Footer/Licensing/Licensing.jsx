import React from "react";
import Footer from "../Footer";
import Navbar from "../../NavBar/Nav";

const Licensing = () => {
  // Get the current date and year
  const date = new Date().toJSON().slice(0, 10);
  const year = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-[10vh] p-4">
        {/* Section 1: Title */}
        <h1 className="font-bold text-5xl text-center uppercase mb-10">
          Licensing
        </h1>

        <p>{`Effective Date: ${date}`}</p>

        {/* Section 9: Licensing Agreement */}
        <h2 className="text-xl font-semibold mt-4">Licensing Agreement</h2>

        <p>
          {`This License Agreement (the "Agreement") is entered into on 26-09-2023
          (the "Effective Date"), by and between:`}
        </p>

        {/* Licensor */}
        <p>
          <strong>Licensor:</strong>
          G3S Security ,Plot No 628,Kh No 537 G/F Ambedkar Colony Near Daily
          Bazar, Bijwasan, Delhi, 110061, Delhi
        </p>

        {/* Licensee */}
        <p>
          <strong>Licensee:</strong>
          Amit Grewal ,Plot No 628,Kh No 537 G/F Ambedkar Colony Near Daily
          Bazar, Bijwasan, Delhi, 110061, Delhi
        </p>

        <p>
          <strong>(Collectively referred to as the "Parties")</strong>
        </p>

        {/* Background */}
        <h3 className="text-xl font-semibold mt-4">1. BACKGROUND:</h3>

        <p>
          WHEREAS, the Licensor ("G3S Security") is the owner of certain
          intellectual property, including but not limited to trademarks, logos,
          and brand names (the "Intellectual Property");
        </p>

        <p>
          WHEREAS, the Licensee desires to obtain a license to use the
          Intellectual Property under the terms and conditions set forth herein;
        </p>

        <p>
          NOW, THEREFORE, for good and valuable consideration, the Parties
          hereby agree as follows:
        </p>

        {/* Section 1: License Grant */}
        <h3 className="text-xl font-semibold mt-4">2. LICENSE GRANT:</h3>

        <p>
          Subject to the terms and conditions of this Agreement, the Licensor
          grants the Licensee a non-exclusive, non-transferable license to use
          the Intellectual Property for the purpose of promoting and advertising
          G3S Security's services, as specified below:
        </p>

        {/* List items */}
        <ul className="list-disc list-inside text-lg text-gray-600 mt-4 pl-4">
          <li>
            Use of G3S Security's logo and trademark for promotional and
            advertising materials.
          </li>
          <li>
            Use of G3S Security's brand name and logo on the Licensee's website
            and marketing materials to indicate a business partnership or
            affiliation.
          </li>
        </ul>

        <p>{`Effective Date: ${date}`}</p>

        {/* Section 3: Acceptance of Terms */}
        <h2 className="text-xl font-semibold mt-4">2a. Acceptance of Terms</h2>
        <p>
          By accessing or using the services provided by G3S Security, you agree
          to comply with and be bound by these Terms and Conditions. If you do
          not agree with these terms, please refrain from using our services.
        </p>

        {/* Section 4: Services */}
        <h2 className="text-xl font-semibold mt-4">2b. Services</h2>
        <p>
          G3S Security provides human resource solutions, including temporary
          and contract manpower services. Our services are subject to
          availability, and we reserve the right to modify or discontinue any
          part of our services without notice.
        </p>

        {/* Section 5: User Responsibilities */}
        <h2 className="text-xl font-semibold mt-4">
          2c. User Responsibilities
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-600 mt-4 pl-4">
          <li>
            You agree to provide accurate and complete information when using
            our services.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account information.
          </li>
          <li>
            You agree not to engage in any unlawful or harmful activities while
            using our services.
          </li>
        </ul>

        {/* Section 6: Payment and Fees */}
        <h2 className="text-xl font-semibold mt-4">2d. Payment and Fees</h2>
        <p>
          Payment terms for our services will be outlined in our specific
          agreements or contracts. Failure to make payments in accordance with
          agreed terms may result in suspension or termination of services.
        </p>

        {/* Section 7: Intellectual Property */}
        <h2 className="text-xl font-semibold mt-4">
          2e. Intellectual Property
        </h2>
        <p>
          All content, logos, and materials on our website and services are
          protected by copyright and other intellectual property laws. You may
          not use, reproduce, or distribute our intellectual property without
          prior written consent.
        </p>

        {/* Section 8: Privacy */}
        <h2 className="text-xl font-semibold mt-4">2f. Privacy</h2>
        <p>
          Our Privacy Policy governs the collection, use, and disclosure of your
          personal information. By using our services, you consent to our data
          practices.
        </p>

        {/* Section 10: Contact Information */}
        <h2 className="text-xl font-semibold mt-4 uppercase">
          3. Contact Information
        </h2>

        <p>
          For questions or concerns regarding this Agreement, please contact:
        </p>

        {/* Replace with your contact information */}
        <p>9911148480, 9136013434</p>

        {/* Signature and date lines */}
        <p>
          IN WITNESS WHEREOF, the Parties hereto have executed this License
          Agreement as of the Effective Date.
        </p>

        {/* Licensor's signature and printed name */}
        <p>
          <strong>Licensor:</strong>
          G3S Security
        </p>

        {/* Licensee's signature and printed name */}
        <p>
          <strong>Licensee:</strong>
          Amit Grewal
        </p>

        {/* Add signature and date lines for both Parties */}
        <img src="sign-main.svg" alt="balaji" className=" h-10 w-18" />
        <p>26-09-2023</p>
      </div>
      <Footer />
    </>
  );
};

export default Licensing;
