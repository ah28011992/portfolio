import React, { useEffect } from "react";
import styles from "./MainContentTitle.module.css";
import { useLocation } from "react-router-dom";
import NotFound from "../../pages/error_handling/NotFound";

const MainContentHeading = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const headingRouteObj = {
    "/about": "About",
    "/contact": "Contact",
    "/projects": "Projects",
  };

  const pageHeading = headingRouteObj[currentPath];

  useEffect(() => {
    document.title = pageHeading;
  }, [pageHeading]);

  return pageHeading ? (
    <div className={styles.main_heading__container}>
      <h1>{pageHeading}</h1>
    </div>
  ) : (
    <NotFound />
  );
};

export default MainContentHeading;
