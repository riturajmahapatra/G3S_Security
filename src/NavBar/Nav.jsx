import React, { useCallback, useState } from "react";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const toggler = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border">
      <div className="flex items-center justify-between px-5 mx-auto">
        <a
          onClick={() => {
            navigate("/");
          }}
          className="flex items-center cursor-pointer"
        >
          <img src="logo2.png" className="h-20 mr-3" alt="G3S Logo" />
          <span className="self-center text-4xl max-lg:text-3xl font-semibold text-slate-500">
            G3S Security
          </span>
        </a>
        <div className="md:order-2 hidden max-lg:block">
          <Hamburger onClick={toggler} toggled={isOpen} toggle={setIsOpen} />
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 cursor-pointer ${
            isOpen ? "block absolute" : "hidden"
          }`}
        >
          <ul
            className={`flex gap-5 text-lg font-bold text-black ${
              isOpen &&
              "flex-col gap-1 absolute right-10 border bg-white top-10 rounded-lg w-[50vw]"
            }`}
          >
            <li>
              <a
                onClick={() => {
                  navigate("/");
                }}
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/aboutus");
                }}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/service");
                }}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
