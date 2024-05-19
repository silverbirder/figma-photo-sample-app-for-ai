import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>photo</div>
      <div className={styles.navLinks}>
        <a href="#" className={styles.navLink}>
          Features
        </a>
        <a href="#" className={styles.navLink}>
          Pricing
        </a>
        <a href="#" className={styles.navLink}>
          Community
        </a>
        <a href="#" className={styles.navLink}>
          Support
        </a>
      </div>
      <div>
        <button className={`${styles.button} ${styles.login}`}>Log in</button>
        <button className={`${styles.button} ${styles.register}`}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
