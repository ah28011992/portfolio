import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <section className={styles.container}>
        <section className={styles.footer_content}>
          <ul>
            <Link to='/'>
              {" "}
              <li className='sitemap_list'>Home</li>
            </Link>
            <Link to='/About'>
              {" "}
              <li className='sitemap_list'>About</li>
            </Link>
            <Link to='/Projects'>
              {" "}
              <li className='sitemap_list'>Projects</li>
            </Link>
            <Link to='/Contact'>
              {" "}
              <li className={styles.sitemap_list}>Contact</li>
            </Link>
          </ul>
          <p>&copy; {currentYear} | Aaron Hedgecock</p>
        </section>
      </section>

      {/* <section className={styles.wave_container}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#e95420'
            fillOpacity='1'
            d='M0,32L30,69.3C60,107,120,181,180,186.7C240,192,300,128,360,96C420,64,480,64,540,80C600,96,660,128,720,144C780,160,840,160,900,138.7C960,117,1020,75,1080,64C1140,53,1200,75,1260,106.7C1320,139,1380,181,1410,202.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z'></path>
        </svg>
        
      </section> */}
    </footer>
  );
};

export default Footer;
