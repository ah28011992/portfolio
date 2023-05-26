import React from "react";
import Home from "../pages/home/home.jsx";
import About from "../pages/about/about.jsx";
import Contact from "../pages/contact/contact.jsx";
import Projects from "../pages/projects/projects.jsx";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
