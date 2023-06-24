import React from "react";
import Home from "../pages/home/home.jsx";
import About from "../pages/about/about.jsx";
import Contact from "../pages/contact/contact.jsx";
import Projects from "../pages/projects/projects.jsx";
import NotFound from "../pages/error_handling/NotFound.jsx";

const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/about",
    element: <About />,
    title: "About",
  },
  {
    path: "/projects",
    element: <Projects />,
    title: "Projects",
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "Contact",
  },
  {
    path: "*",
    element: <NotFound />,
    title: "404 Page Not found",
  },
];

export default routes;
