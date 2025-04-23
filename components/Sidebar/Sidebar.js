"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./sidebar.module.scss";
import Image from "next/image";
import crossIcon from "../../public/close.png";
import Link from "next/link";


const Sidebar = ({ closeSidebar }) => {
  const navItems = [
    {
      label: "Home",
      target: "#home",
      backgroundColor: "rgb(234 179 8 / var(--tw-bg-opacity, 1))",
    },
    {
      label: "About me",
      target: "#about",
      backgroundColor: "rgb(59 130 246 / var(--tw-bg-opacity, 1))",
    },
    {
      label: "Experience",
      target: "#experience",
      backgroundColor: "rgb(20 184 166 / var(--tw-bg-opacity, 1))",
    },
    {
      label: "Projects",
      target: "#projects",
      backgroundColor: "rgb(99 102 241 / var(--tw-bg-opacity, 1))",
    },
  ];
  const socialItems = [
    { label: "Github", redirectLink: "https://github.com/Khushi21S" },
    {
      label: "LinkedIn",
      redirectLink: "https://www.linkedin.com/in/khushi-sharma-971bb7209/",
    },
    { label: "Leetcode", redirectLink: "https://leetcode.com/u/khushi21S/" },
    { label: "Twitter", redirectLink: "https://x.com/basaajaurkal" },
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
          <Image
            width={25}
            height={25}
            src={crossIcon}
            onClick={closeSidebar}
            alt="crossIcon"
          />
        </div>
        <div className={styles.navItems}>
          <div>
            <div>
              <span>SOCIAL</span>
              <nav className={styles.nav}>
                {socialItems.map(({ label, redirectLink }) => (
                  <a
                    key={redirectLink}
                    href={redirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeSidebar}
                  >
                    <span>{label}</span>
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <span>MENU</span>
              <nav className={styles.nav}>
                {navItems.map(({ label, target, backgroundColor }) => (
                  <Link href={target} key={target}
                  >
                    <span>
                      <span
                        style={{ backgroundColor }}
                        className={styles.coloredBall}
                      ></span>
                      {label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className={styles.contactDetails}>
            <p className={styles.titleText}>GET IN TOUCH</p>
            <p>worksharma.khushi21@gmail.com</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
