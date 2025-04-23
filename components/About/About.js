"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./about.module.scss";

const About = () => {
  const [showSection2, setShowSection2] = useState(false);

  const section1Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        onComplete: () => setShowSection2(true)
      }
    }
  };

  const section2Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div className={styles.outerContainer}>
      <motion.div 
        className={styles.section1}
        initial="hidden"
        animate="visible"
        variants={section1Variants}
      >
        <p className={styles.biggerText}>
          I follow a user-centered design approach, ensuring that every project
          I work on is thoughtfully crafted to meet the unique needs of its
          users.
        </p>
        <p>This is me.</p>
      </motion.div>
      
      <AnimatePresence>
        {showSection2 && (
          <>
            <motion.hr 
              className={styles.horizontalLine}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className={styles.section2}
              initial="hidden"
              animate="visible"
              variants={section2Variants}
            >
              <p className={styles.boldText}>Hi, I&apos;m Khushi.</p>
              <p className={styles.description}>
                As a frontend web developer, I transform ideas into innovative
                solutions, crafting seamless and intuitive user experiences. I focus
                on building scalable, high-performance applications that align with
                both user needs and business goals. With an emphasis on performance,
                accessibility, and responsiveness, I strive to create engaging
                experiences that drive meaningful results.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
