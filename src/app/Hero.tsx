import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.playButton}>
        <div className={styles.playIcon}></div>
      </div>
      <h1 className={styles.heroText}>The largest community of photo enthusiasts</h1>
      <div className={styles.buttonContainer}>
        <a href="#" className={styles.primaryButton}>Join Today</a>
      </div>
    </div>
  );
};

export default Hero;
