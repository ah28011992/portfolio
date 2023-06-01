import React from "react";
import styles from "../Navbar/navbar.module.css";
function IconMenu(props) {
  return (
    <button id='menu_btn' onClick={props.toggleMenuFunction}>
      <svg
        className={`${styles.iconMenu} $ ${styles.customHeight} ${styles.customWidth}`}
        fill={props.fill}
        stroke={props.fill}
        strokeLinecap={props.strokeLinecap}
        strokeLinejoin={props.strokeLinejoin}
        strokeWidth={props.strokeWidth}
        viewBox='0 0 24 24'>
        <path d='M3 12h18M3 6h18M3 18h18' />
      </svg>
    </button>
  );
}

export default IconMenu;
