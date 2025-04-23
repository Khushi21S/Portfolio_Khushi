"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./pageClient.module.scss";
import ProgressBar from "../ProgressBar/ProgressBar";
import HomeSection from "../Home/home";
import HomeStats from "../Home/HomeStats";
import About from "../About/About";
import Stack from "../Stack/Stack";
import Experience from "../Experience/Experience";
import Project from "../Projects/Project";
import Footer from "../Footer/Footer";
import InitialLoad from "../InitialLoad/InitialLoad";
import AnimatedSection from "../AnimatedSection/AnimatedSection";

const PageClient = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!showContent ? (
        <InitialLoad key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={styles.wrapperContainer}
        >
          <p className={styles.emailId}>worksharma.khushi21@gmail.com</p>
          <ProgressBar />
          
          <AnimatedSection
            id="home"
            className={styles.section1}
            animation="fadeIn"
            delay={0.2}
            duration={1}
          >
            <HomeSection />
            <HomeStats />
          </AnimatedSection>

          <AnimatedSection
            id="about"
            className={styles.section1}
            animation="slideInLeft"
            delay={0.5}
            duration={1}
          >
            <About />
          </AnimatedSection>

          <AnimatedSection
            className={styles.section1}
            animation="slideInRight"
            delay={0.8}
            duration={1}
          >
            <Stack />
          </AnimatedSection>

          <AnimatedSection
            id="experience"
            className={styles.section1}
            animation="slideInLeft"
            delay={1.1}
            duration={1}
          >
            <Experience />
          </AnimatedSection>

          <AnimatedSection
            id="projects"
            className={styles.section1}
            animation="scaleIn"
            delay={1.4}
            duration={1}
          >
            <Project />
          </AnimatedSection>

          <AnimatedSection
            className={styles.section1}
            animation="fadeIn"
            delay={1.7}
            duration={1}
          >
            <Footer />
          </AnimatedSection>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageClient;
