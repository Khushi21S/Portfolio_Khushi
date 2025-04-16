import React from "react";
import styles from "./page.module.css";
import Header from "../components/Header/header";
import HomeSection from "@/components/Home/home";
import HomeStats from "@/components/Home/HomeStats";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";
import Experience from "@/components/Experience/Experience";
import Project from "@/components/Projects/Project";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.wrapperContainer}>
        <p>worksharma.khushi21@gmail.com</p>
        <section id="home" className={styles.section1}>
      <HomeSection />
          <HomeStats />
       
        </section>

        <section id="about" className={styles.section1}>
          <About />
        </section>
        <Stack />
        <section id="experience" className={styles.section1}>
          <Experience />
        </section>

        <section id="projects" className={styles.section1}>
          <Project />
        </section>

        <section className={styles.section1}>
          <Footer />
        </section>
      </div>
    </div>
  );
}
