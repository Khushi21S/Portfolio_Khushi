"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./sidebar.module.scss";
import Image from "next/image";
import crossIcon from "../../public/close.png";
import Link from "next/link";

const Sidebar = ({ closeSidebar }) => {
  const navItems = [
    { label: "Home", target: "#home" },
    { label: "About me", target: "#about" },
    { label: "Experience", target: "#experience" },
    { label: "Projects", target: "#projects" },
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
               <Link
               key={target}
               href={target}
               onClick={closeSidebar}
    
             >
               <span>{label}</span>
             </Link>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default Sidebar;
