import React from "react";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.signup}>
      <p className={styles.textContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <div className={styles.buttonContainer}>
        <a href="#" className={styles.primaryButton}>
          Join Today
        </a>
        <a href="#" className={styles.secondaryButton}>
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Signup;
