import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My-Pet</title>
        <meta
          name="description"
          content="Manage your pet's health and vaccination schedule with My-Pet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h2>Welcome to My-Pet</h2>
        <p>Manage your pet's health and vaccination schedule effortlessly.</p>
        <button
          onClick={() => (window.location.href = "/")}
          className={styles.ctaButton}
        >
          Login
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
