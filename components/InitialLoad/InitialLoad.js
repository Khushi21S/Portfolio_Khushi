"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./initialLoad.module.scss";

const InitialLoad = () => {
  return (
    <motion.div
      className={styles.loadingContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.nameContainer}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{
          duration: 1,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <motion.span
          className={styles.firstName}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          KHUSHI
        </motion.span>
        <motion.span
          className={styles.lastName}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          SHARMA
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default InitialLoad; 