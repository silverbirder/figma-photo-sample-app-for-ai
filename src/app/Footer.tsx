import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.topSection}>
        <a href="#" className={styles.navLink}>
          Mobile app
        </a>
        <a href="#" className={styles.navLink}>
          Community
        </a>
        <a href="#" className={styles.navLink}>
          Company
        </a>
        <div className={styles.logoSection}>
          <div className={styles.logo}>photo</div>
        </div>
        <a href="#" className={styles.navLink}>
          Help desk
        </a>
        <a href="#" className={styles.navLink}>
          Blog
        </a>
        <a href="#" className={styles.navLink}>
          Resources
        </a>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.socialIcons}>
        <div className={styles.socialIcon}></div>
        <div className={styles.socialIcon}></div>
        <div className={styles.socialIcon}></div>
        <div className={styles.socialIcon}></div>
      </div>
      <div className={styles.footerText}>
        © Photo, Inc. 2019. We love our users!
      </div>
    </div>
  );
};

export default Footer;
