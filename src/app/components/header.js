import styles from "./header.module.css";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar></Navbar>
    </header>
  );
}
