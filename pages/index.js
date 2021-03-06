import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Suresh Koochana</title>
        <link rel="icon" href="/sk.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Develper Blog</h1>
      </main>

      <footer className={styles.footer}>Made With 💌 By Suresh Koochana</footer>
    </div>
  );
}
