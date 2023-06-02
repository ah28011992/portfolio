import React from "react";
import styles from "./main_home.module.css";
import IconGithub from "../../../components/UI/Icons/Github";
import IconLinkedin from "../../../components/UI/Icons/LinkedIn";
const Main_home = () => {
  return (
    <>
      <section className={styles.container}>
        <section className={styles.title_container}>
          <h1>
            <span>A</span>aron Hedgecock
          </h1>
        </section>

        <section className={styles.quote_container}>
          <q>
            The true sign of intelligence is not knowledge but imagination.</q> -
            Albert Einstein
       
        </section>

        <section className={styles.icon_container}>
          <div className={styles.icon}>
            <IconGithub />
          </div>
          <div className={styles.icon}>
            <IconLinkedin />
          </div>
        </section>
      </section>
    </>
  );
};

export default Main_home;
