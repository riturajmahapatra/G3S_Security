import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./NavBar/AboutUs/Aboutus.jsx";
import Layout from "./layout.jsx";
import Service from "./NavBar/Service/Service";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
