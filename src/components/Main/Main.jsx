import React from "react";
import MainContentTitle from "./MainContentHeading";
import styles from './Main.module.css'

const Main = () => {
  return (
    <section className={styles.main__container}>
    <MainContentTitle />
    </section>
  );
};

export default Main;
