import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./NavBar/AboutUs/Aboutus.jsx";
import Layout from "./layout.jsx";
import Service from "./NavBar/Service/Service";
import PrivacyPolicy from "./Footer/Privacy Policy/Privacy";
import TermsAndConditions from "./Footer/Terms&Condition/T&C";
import Licensing from "./Footer/Licensing/Licensing";
import ContactUs from "./Footer/Contact/ContactUs";
import Report from "./Footer/Report/Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/t&c",
    element: <TermsAndConditions />,
  },
  {
    path: "/licensing",
    element: <Licensing />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/report",
    element: <Report />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
