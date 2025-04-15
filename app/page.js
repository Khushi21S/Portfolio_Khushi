import React from "react";
import styles from "./page.module.css";
import Header from "@/components/Header/header";
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
      <section id="home">
        <HomeSection />
        
      </section>
      <HomeStats />
      <section id="about">
        <About />
       
      </section>
      <Stack />
      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="contact">
        <Footer />
      </section>
      </div>
    </div>
  );
}
