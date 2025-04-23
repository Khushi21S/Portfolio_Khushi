import React from "react";
import { motion } from "framer-motion";
import styles from "./stackComponent.module.scss";
import Image from "next/image";

const StackComponent = ({ title, items, delay = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.div 
      className={styles.outerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.p variants={itemVariants}>{title}</motion.p>
      <motion.div variants={containerVariants}>
        {items?.map((item, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <Image src={item?.imgSrc} height={40} width={40} alt={item?.imgName} />
            <span>{item?.imgName}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default StackComponent;


    
 