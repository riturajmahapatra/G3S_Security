import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setemail] = useState();
  const obj = { email };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let sendEmail = await fetch("http://localhost:4000/post/email", {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    sendEmail = await sendEmail.json();
    console.log(sendEmail);
    // console.log();
  };

  return (
    <div className="py-16 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg flex flex-col justify-center items-start ">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-500">
              Thank you for choosing G3S Securities for your security needs.
              Subscribe now and be part of our security community!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-[1px] px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div>
            <img
              className="w-full  h-[60vh] object-bottom rounded-lg object-cover"
              src="newsletter.webp"
              alt="Newsletter Placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
