"use client";
import React, { useState } from "react";
import styles from "./header.module.scss";
import hamburger from "../../public/hamburger.png";
import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const navItems = [
    { label: "Home", target: "#home" },
    { label: "About me", target: "#about" },
    { label: "Experience", target: "#experience" },
    { label: "Projects", target: "#projects" },

  ];

  


  return (
    <>
      <div className={styles.outerContainer}>
        {/* <div className={styles.desktop}>
          {navItems.map(({ label, target }) => (
           <Link
           key={target}
           href={target}

         >
           <span>{label}</span>
         </Link>
          ))}
        </div> */}
        <div className={styles.mobile}>
          <Image
            src={hamburger}
            width={25}
            height={25}
            alt="hamburger"
            onClick={toggleSidebar}
            className={styles.hamburgerIcon}
          />
        </div>
      </div>

      <AnimatePresence>
        {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
