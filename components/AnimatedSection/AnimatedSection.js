"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = ({ 
  children, 
  className, 
  animation = "fadeIn", 
  delay = 0,
  duration = 0.3,
  threshold = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold });

  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 }
    },
    slideInLeft: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 }
    },
    slideInRight: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 }
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animations[animation].initial}
      animate={isInView ? animations[animation].animate : animations[animation].exit}
      transition={{ 
        duration,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 