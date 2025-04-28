"use client";

import React from "react";
import styles from "./home.module.scss";


const HomeSection = () => {
  return (
    <div className={styles.outerContainer}>
      <div>
        <div>
          <span className={styles.colorChange}>FRONTEND</span>
          <span> DEVELOPER</span>
          <p>
            Hi! I&apos;m Khushi. A creative Frontend Developer with 1+ year of
            experience in building high-performance, scalable, and responsive
            web solutions.
          </p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttonContainer}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=work.khushi21@gmail.com&su=Let's%20Work%20Together&body=Hi%20Khushi,%0D%0A%0D%0AI would love to discuss a project with you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>HIRE ME</button>
            </a>
          </div>
          <div className={styles.buttonContainer}>
            <a
              href="https://drive.google.com/drive/folders/1bX_fQHGLCTkxWvGeMaRif27HCvqbTH21?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>RESUME</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
