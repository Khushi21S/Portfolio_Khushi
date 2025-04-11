import React from "react";
import styles from "./experienceCard.module.scss";

const ExperienceCard = ({company, title, time}) => {
  return (
    <div className={styles.outerContainer}>
      <p className={styles.company}>{company}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.time}>{time}</p>
    </div>
  );
};
export default ExperienceCard;
