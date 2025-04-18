"use client"

import React, {useEffect} from "react";
import styles from "./home.module.scss";



const HomeSection = () => {
 
  return (
    <div className={styles.outerContainer} >
      {/* <div className={styles.homeStats}><HomeStats/></div> */}
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
        <div className={styles.buttonContainer} >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=worksharma.khushi21@gmail.com&su=Let's%20Work%20Together&body=Hi%20Khushi,%0D%0A%0D%0AI would love to discuss a project with you."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>HIRE ME</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
