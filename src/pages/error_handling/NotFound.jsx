import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  console.log();
  return (
    <div className={styles.container}>
      <div>
        <h1>Oops, page not found ! </h1>
      </div>
      <div className="not-found__link">
        {" "}
        <Link to={"/"}>Back to home :) </Link>
      </div>
    </div>
  );
};

export default NotFound;
