"use client";
import React, { useState } from "react";
import styles from "./header.module.scss";
import hamburger from "../../public/hamburger.png";
import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";


const Header = ({containerRef}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);
  


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
        {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} containerRef={containerRef} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
