import React from "react";
import styles from "./homeStats.module.scss";

const HomeStats = () => {
  return (
    <div className={styles.outerContainer}>
      <div>
        <p>
          <span className={styles.stats}>1+</span>
          <span className={styles.subTitle}>Years of Experience</span>
        </p>
      </div>
      <div>
        <p>
          <span className={styles.stats}>4+</span>
          <span className={styles.subTitle}>Completed Projects</span>
        </p>
      </div>
      <div>
        <p>
          <span className={styles.stats}>3K+</span>
          <span className={styles.subTitle}>Hours Worked</span>
        </p>
      </div>
    </div>
  );
};

export default HomeStats;
