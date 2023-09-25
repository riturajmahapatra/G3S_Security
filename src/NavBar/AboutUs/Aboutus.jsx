import React from "react";
import Navbar from "../Nav";
import Footer from "../../Footer/Footer";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center  justify-center my-[10vh]">
        <div className="container mx-auto px-8 py-8">
          <h1 className="font-bold text-5xl text-center uppercase mb-10">
            About G3S Securities
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Founded in the year 2019 in New Delhi, we are a premier organization
            specializing in providing human resource solutions to our clients
            across India, especially in North India. With so many years of hard
            work put into making a mark for us in this industry, we decided to
            evolve this company and have carved out a specialized service, that
            of "Contract Manpower Management Services.We offer temporary and
            contract Manpower of all categories, i.e., Un-skilled, Semi-Skilled,
            Skilled, and Highly-skilled categories.
          </p>
          <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{" "}
          <h2 className="text-4xl font-bold text-gray-800 bg-slate-300 p-3 uppercase inline-block  my-10">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            At G3S Securities, our vision is clear and resolute: to become the
            foremost provider of security guard services in the industry. We
            aspire to achieve this by consistently delivering exceptional
            quality and value to our clients. Our commitment to excellence is
            the driving force behind our quest to set new standards in security
            services.
          </p>
          <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{" "}
          <h2 className="text-4xl font-bold text-gray-800 bg-slate-300 p-3 uppercase inline-block  my-10">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600 mt-4 pl-4">
            <li>
              <strong>Integrity:</strong> We are unwavering in our commitment to
              honesty, transparency, and trustworthiness. These core values are
              the foundation of our business ethics.
            </li>
            <li>
              <strong>Professionalism:</strong> G3S Securities takes immense
              pride in its team of highly skilled and professional security
              personnel. We prioritize ongoing training and development to
              maintain the highest level of professionalism in our services.
            </li>
            <li>
              <strong>Teamwork:</strong> Collaboration and synergy are
              fundamental to our success. We foster a culture of teamwork, where
              every member of our organization works cohesively to achieve
              shared goals.
            </li>
          </ul>
          <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{" "}
          <h2 className="text-4xl font-bold text-gray-800 bg-slate-300 p-3 uppercase inline-block  my-10">
            Our Services
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600 mt-4 pl-4">
            <li>
              <strong>Armed and Unarmed Guards:</strong> Our team of dedicated
              security professionals includes both armed and unarmed guards who
              provide round-the-clock protection for your assets and premises.
            </li>
            <li>
              <strong>Crowd Control:</strong> We specialize in crowd management
              and control, ensuring the safety and security of large gatherings,
              events, and public spaces.
            </li>
            <li>
              <strong>Emergency Response:</strong> G3S Securities is prepared to
              respond swiftly and effectively in emergency situations. Our rapid
              response teams are trained to handle crises and mitigate risks
              promptly.
            </li>
          </ul>
          <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{" "}
          <h2 className="text-4xl font-bold text-gray-800 bg-slate-300 p-3 uppercase inline-block  my-10">
            Our Methodology
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Based on work culture, requirements, and feedback from our clients,
            profiles are rigorously analyzed to identify workforces who can
            fulfill expectations and establish a successful match.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 mt-4 pl-4">
            <li>
              Profiles of workforces are primarily screened and critically
              evaluated, followed by interviews conducted by our experts and
              consultants.
            </li>
            <li>
              Subsequently, the best workforces are shortlisted and presented to
              our clients. We initiate, respond, interview, assess, evaluate,
              and offer.
            </li>
            <li>
              We select people you can trust for their talents, dedication, and
              loyalty.
            </li>
            <li>
              We prioritize quality over quantity, providing a complete contract
              manpower solution.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
