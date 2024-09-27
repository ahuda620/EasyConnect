import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <img
        src="companyLogo.png"
        alt="Company Logo"
        className={styles.companyLogo}
      ></img>
      <ul className={styles.centerNavLinks}>
        <li>
          <a href="#">Find a Job</a>
        </li>
        <li>
          <a href="#">Placeholder</a>
        </li>
        <li>
          <a href="#">Placeholder</a>
        </li>
        <li>
          <a href="#">Placeholder</a>
        </li>
      </ul>
      <ul className={styles.rightNavLinks}>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </header>
  );
}
