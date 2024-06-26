import styles from "../styles/Home.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()} My-Pet. All rights reserved.</p>
  </footer>
);

export default Footer;
