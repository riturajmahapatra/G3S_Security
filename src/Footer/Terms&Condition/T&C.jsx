// src/components/TermsAndConditions.js

import React from "react";
import Footer from "../Footer";
import Navbar from "../../NavBar/Nav";

const TermsAndConditions = () => {
  const date = new Date().toJSON().slice(0, 10);
  const year = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-[10vh] p-4">
        <h1 className="font-bold text-5xl text-center uppercase mb-10">
          Terms and Conditions
        </h1>
        <p>{`Effective Date: ${date}`}</p>
        <h2 className="text-xl font-semibold mt-4">Acceptance of Terms</h2>
        <p>
          By accessing or using the services provided by G3S Security, you agree
          to comply with and be bound by these Terms and Conditions. If you do
          not agree with these terms, please refrain from using our services.
        </p>
        <h2 className="text-xl font-semibold mt-4">Services</h2>
        <p>
          G3S Security provides human resource solutions, including temporary
          and contract manpower services. Our services are subject to
          availability, and we reserve the right to modify or discontinue any
          part of our services without notice.
        </p>
        <h2 className="text-xl font-semibold mt-4">User Responsibilities</h2>
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
        <h2 className="text-xl font-semibold mt-4">Payment and Fees</h2>
        <p>
          Payment terms for our services will be outlined in our specific
          agreements or contracts. Failure to make payments in accordance with
          agreed terms may result in suspension or termination of services.
        </p>
        <h2 className="text-xl font-semibold mt-4">Intellectual Property</h2>
        <p>
          All content, logos, and materials on our website and services are
          protected by copyright and other intellectual property laws. You may
          not use, reproduce, or distribute our intellectual property without
          prior written consent.
        </p>
        <h2 className="text-xl font-semibold mt-4">Privacy</h2>
        <p>
          Our Privacy Policy governs the collection, use, and disclosure of your
          personal information. By using our services, you consent to our data
          practices.
        </p>
        <h2 className="text-xl font-semibold mt-4">Limitation of Liability</h2>
        <p>
          G3S Security shall not be liable for any direct, indirect, incidental,
          consequential, or punitive damages arising from the use or inability
          to use our services.
        </p>
        <h2 className="text-xl font-semibold mt-4">Indemnity</h2>
        <p>
          You agree to indemnify and hold G3S Security harmless from any claims,
          damages, or losses arising from your use of our services or violation
          of these terms.
        </p>
        <h2 className="text-xl font-semibold mt-4">Termination</h2>
        <p>
          G3S Security reserves the right to terminate or suspend your access to
          our services at any time for violation of these terms.
        </p>
        <h2 className="text-xl font-semibold mt-4">Governing Law</h2>
        <p>
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws of India.
        </p>
        <h2 className="text-xl font-semibold mt-4">Changes to Terms</h2>
        <p>
          G3S Security may update these Terms and Conditions from time to time.
          Any changes will be posted on our website, and the effective date will
          be indicated.
        </p>
        <h2 className="text-xl font-semibold mt-4">Contact Information</h2>
        <p>
          For questions or concerns about these Terms and Conditions, please
          contact us at 9911148480.
        </p>
        <p>
          Privacy Policy: This Privacy Policy is subject to the applicable laws
          and regulations of India.
        </p>
        <p>
          Copyright: All content on this website is protected by copyright and
          may not be used without permission.
        </p>
        <p>{`© ${year} G3S Security. All Rights Reserved.`}</p>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
