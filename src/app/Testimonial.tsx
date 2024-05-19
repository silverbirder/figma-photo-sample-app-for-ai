import React from "react";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>You’re in good company</h1>
        <p className={styles.headerSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <div className={styles.imageGrid}>
        <div className={styles.imageBlock}></div>
        <div className={styles.imageBlock}></div>
        <div className={styles.imageBlock}></div>
        <div className={styles.imageBlock}></div>
        <div className={styles.imageBlock}></div>
        <div className={styles.imageBlock}></div>
        <div className={styles.imageBlock}></div>
        <div className={styles.imageBlock}></div>
      </div>
    </div>
  );
};

export default Testimonial;
