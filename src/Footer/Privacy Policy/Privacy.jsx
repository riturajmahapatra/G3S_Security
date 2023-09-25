import React from "react";
import Footer from "../Footer";
import Navbar from "../../NavBar/Nav";

const PrivacyPolicy = () => {
  const date = new Date().toJSON().slice(0, 10);
  const year = new Date().toJSON().slice(0, 4);
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-[10vh] p-4">
        <h1 className="font-bold text-5xl text-center uppercase mb-10">
          Privacy Policy
        </h1>{" "}
        <p>{`Effective Date: ${date}`}</p>
        <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
        <p>
          Welcome to G3S Security's Privacy Policy. At G3S Security, we are
          committed to protecting your privacy and ensuring that your personal
          information is handled responsibly. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your personal information
          when you visit our website, use our services, or interact with us.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          2. Information We Collect
        </h2>
        <p>We may collect the following types of personal information:</p>
        <ul className="list-disc list-inside text-lg text-gray-600 mt-4 pl-4">
          <li>
            Information You Provide: We may collect personal information that
            you voluntarily provide to us when you use our website, contact us,
            or use our services. This may include your name, contact details,
            email address, and any other information you provide.
          </li>
          <li>
            Automatically Collected Information: When you visit our website, we
            may automatically collect certain information, such as your IP
            address, browser type, operating system, and device information. We
            may also use cookies and similar technologies to collect data about
            your browsing behavior.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">
          3. How We Use Your Information
        </h2>
        <p>We may use your personal information for the following purposes:</p>
        <ul className="list-disc list-inside text-lg text-gray-600 mt-4 pl-4">
          <li>To provide and improve our services.</li>
          <li>To respond to your inquiries and communicate with you.</li>
          <li>To send you updates, newsletters, and promotional materials.</li>
          <li>To analyze and monitor usage patterns on our website.</li>
          <li>
            To protect the security and integrity of our website and services.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">
          4. Sharing Your Information
        </h2>
        <p>We may share your personal information with:</p>
        <ul className="list-disc list-inside text-lg text-gray-600 mt-4 pl-4">
          <li>
            Third-party service providers who assist us in providing our
            services.
          </li>
          <li>
            Law enforcement agencies or regulatory authorities as required by
            law.
          </li>
          <li>Other third parties with your consent.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">5. Security</h2>
        <p>
          We take reasonable steps to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. However,
          please be aware that no method of transmission over the internet or
          electronic storage is entirely secure.
        </p>
        <h2 className="text-xl font-semibold mt-4">6. Your Choices</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information. You may also opt-out of receiving promotional
          communications from us by following the instructions provided in our
          communications.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          7. Changes to this Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the date of the latest revision will be
          indicated at the beginning of the policy.
        </p>
        <h2 className="text-xl font-semibold mt-4">8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at 9911148480.
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

export default PrivacyPolicy;
