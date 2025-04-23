import React from "react";
import styles from "./page.module.css";
import Header from "../components/Header/header";
import PageClient from "@/components/PageClient/PageClient";
import InitialLoad from "@/components/InitialLoad/InitialLoad";

export default function Home() {
  return (
    <main className={styles.page}>
      <InitialLoad />
      <Header />
      <PageClient />
    </main>
  );
}
