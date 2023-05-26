import React from "react";
import styles from '../Header/Navbar/navbar.module.css'
function IconMenu(props) {
    return (
        <svg className={`${styles.iconMenu} $ ${styles.customHeight} ${styles.customWidth}`}
             fill={props.fill}
           stroke={props.fill}
            strokeLinecap={props.strokeLinecap}
            strokeLinejoin={props.strokeLinejoin}
            strokeWidth={props.strokeWidth}
            viewBox = '0 0 24 24'
            
           
        >
            <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
    );
}

export default IconMenu;