import React from "react";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.section1}>
        <p className={styles.biggerText}>
          I follow a user-centered design approach, ensuring that every project
          I work on is thoughtfully crafted to meet the unique needs of its
          users.
        </p>
        <p>This is me.</p>
      </div>
      <hr className={styles.horizontalLine}></hr>
      <div className={styles.section2}>
        <p className={styles.boldText}>Hi, I'm Khushi.</p>
        <p className={styles.description}>
          As a frontend web developer, I transform ideas into innovative
          solutions, crafting seamless and intuitive user experiences. I focus
          on building scalable, high-performance applications that align with
          both user needs and business goals. With an emphasis on performance,
          accessibility, and responsiveness, I strive to create engaging
          experiences that drive meaningful results.
        </p>
      </div>
    </div>
  );
};

export default About;
