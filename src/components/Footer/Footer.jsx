import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/projects'>Projects</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
      <div className={styles.footer_name}>
        <p>Aaron Hedgecock {currentYear} &copy;</p>
      </div>
    </footer>
  );
};

export default Footer;
