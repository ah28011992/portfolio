import React from "react";
import "../../../assets/styles/global.css";
import styles from "./navbar.module.css";
import IconMenu from "../../UI/Menu";

const PresentationNavBar = ({ toggle, toggleMenuFunction, screenWidth }) => {
  return (
    <nav>
      {(toggle || screenWidth > 500) && (
        <ul className={styles.list}>
          <li className={styles.items}>Home</li>
          <li className={styles.items}>About</li>
          <li className={styles.items}> Projects </li>
          <li className={styles.items}>Contact </li>
        </ul>
      )}
      <div className={styles.menuContainer}>
        <IconMenu toggleMenuFunction={toggleMenuFunction} />
      </div>
    </nav>
  );
};

export default PresentationNavBar;
