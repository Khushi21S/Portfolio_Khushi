import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.outerContainer}>
      <div>
        <span>Home</span>
        <span>About me</span>
        <span>Experience</span>
        <span>Projects</span>
        <span>Get in Touch</span>
      </div>
    </div>
  );
};

export default Header;
