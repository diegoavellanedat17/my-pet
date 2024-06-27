"use client";

import Link from "next/link";
import styles from "../src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Pet</h1>
        <p>Your pet's management system.</p>
        <Link href="/login">
          <button className={styles.button}>Login</button>
        </Link>
      </header>
      <section className={styles.about}>
        <h2>About</h2>
        <p>
          My Pet helps you manage your pet's vaccination dates and other
          important events. Keep all your pet's information in one place and
          never miss an important date again.
        </p>
      </section>
    </div>
  );
}
