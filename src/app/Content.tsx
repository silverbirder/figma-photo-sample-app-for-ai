import React from "react";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.header}>Snap photos and share like never before</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Sed ut perspiciatis</h4>
          <p className={styles.cardDescription}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
          <a href="#" className={styles.learnMoreButton}>
            Learn more
          </a>
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Lorem ipsum dolor</h4>
          <p className={styles.cardDescription}>
            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi.
          </p>
          <a href="#" className={styles.learnMoreButton}>
            Learn more
          </a>
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Nemo enim ipsam</h4>
          <p className={styles.cardDescription}>
            Consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam.
          </p>
          <a href="#" className={styles.learnMoreButton}>
            Learn more
          </a>
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Tempor incididunt</h4>
          <p className={styles.cardDescription}>
            Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora.
          </p>
          <a href="#" className={styles.learnMoreButton}>
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
