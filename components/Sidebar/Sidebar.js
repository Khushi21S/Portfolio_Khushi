"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import styles from "./sidebar.module.scss";
import Image from "next/image";
import crossIcon from "../../public/close.png";

const Sidebar = ({ closeSidebar }) => {
  const navItems = [
    { label: "Home", target: "home" },
    { label: "About me", target: "about" },
    { label: "Experience", target: "experience" },
    { label: "Projects", target: "projects" },
    { label: "Get in Touch", target: "contact" },
  ];

  return (
    <>
      <motion.div
        className={styles.overlay}
        onClick={closeSidebar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className={styles.sidebar}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className={styles.closeIcon}>
          <Image width={25} height={25} src={crossIcon} onClick={closeSidebar} alt="crossIcon" />
        </div>
        <nav className={styles.nav}>
          {navItems.map(({ label, target }) => (
            <ScrollLink
              key={target}
              to={target}
              smooth={true}
              duration={500}
              offset={-60}
              onClick={closeSidebar}
            >
              {label}
            </ScrollLink>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default Sidebar;
