import React from "react";
import styles from "./page.module.css";
import Header from "../components/Header/header";
import PageClient from "@/components/PageClient/PageClient";

export default function Home() {
  return (
    <main className={styles.page}>
      <PageClient />
    </main>
  );
}
