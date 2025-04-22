"use client";

import React, { useRef } from "react";
import styles from "./pageClient.module.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
import HomeSection from "../Home/home";
import HomeStats from "../Home/HomeStats";
import About from "../About/About";
import Stack from "../Stack/Stack";
import Experience from "../Experience/Experience";
import Project from "../Projects/Project";
import Footer from "../Footer/Footer";

const PageClient = () => {
  const containerRef = useRef(null);

  return (
    <div className={styles.wrapperContainer} ref={containerRef}>
      <p className={styles.emailId}>worksharma.khushi21@gmail.com</p>
      <ProgressBar containerRef={containerRef} />
      <section id="home" className={styles.section1}>
        <HomeSection />
        <HomeStats />
      </section>

      <section id="about" className={styles.section1}>
        <About />
      </section>
      <Stack />
      <section id="experience" className={styles.section1}>
        <Experience />
      </section>

      <section id="projects" className={styles.section1}>
        <Project />
      </section>

      <section className={styles.section1}>
        <Footer />
      </section>
    </div>
  );
};

export default PageClient;
