import React from "react";
import styles from "./ImageContentReverse.module.css";

const ImageContentReverse = () => {
  return (
    <div className={styles.content}>
      <div className={styles.textContent}>
        <h4 className={styles.textTitle}>Sed ut perspiciatis unde omnis</h4>
        <p className={styles.textDescription}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
      </div>
      <div className={styles.imageBlock}></div>
    </div>
  );
};

export default ImageContentReverse;
