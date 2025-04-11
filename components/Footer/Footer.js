import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.outerContainer}>
            <p>Have a project in mind? </p>
            <a
        href="mailto:worksharma.khushi21@gmail.com"
        className={styles.emailId}
      >
        worksharma.khushi21@gmail.com
      </a>
            <p className={styles.copyright}>Designed & Built by Khushi Sharma © 2025</p>
        </div>
    )
}

export default Footer;