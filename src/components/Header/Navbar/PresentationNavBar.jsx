import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/global.css";
import styles from "./navbar.module.css";
import IconMenu from "../../UI/Menu";
import routes from "../../../routes/routes";

const PresentationNavBar = ({ toggle, toggleMenuFunction, screenWidth }) => {
  return (
    <nav>
      {(toggle || screenWidth > 500) && (
        <ul className={styles.list}>
          <li className={styles.items}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.items}>
            <Link to='/about'>About</Link>
          </li>
          <li className={styles.items}>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className={styles.items}>
            <Link to='/contact'>Contact</Link>
          </li>
          {routes.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      )}
      <div className={styles.menuContainer}>
        <IconMenu toggleMenuFunction={toggleMenuFunction} />
      </div>
    </nav>
  );
};

export default PresentationNavBar;
