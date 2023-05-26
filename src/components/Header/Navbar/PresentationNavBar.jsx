import React from 'react'
import '../../../assets/styles/global.css'
import styles from './navbar.module.css'
import IconMenu from '../../UI/Menu'

const PresentationNavBar = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.items}>Home</li>
        <li className={styles.items}>About</li>
        <li className={styles.items}>Projects</li>
        <li className={styles.items}>Contact</li>
      </ul>
      <div className={styles.menuContainer}>
        <IconMenu  />
      </div>
    </nav >
  )
}

export default PresentationNavBar