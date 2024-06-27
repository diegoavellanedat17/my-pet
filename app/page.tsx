"use client";
import Link from "next/link";
import styles from "../src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Pet</h1>
      <p>Manage your pet's vaccination dates and more!</p>
      <Link href="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}
