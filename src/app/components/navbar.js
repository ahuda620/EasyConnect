import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <>
      <img
        src="/images/easy-connect-high-resolution-logo-transparent.png"
        alt="Company Logo"
        className={styles.logo}
      ></img>
      <ul className={styles.main}>
        <li>Find a Job</li>
        <li>Placeholder</li>
        <li>Placeholder</li>
        <li>Placeholder</li>
      </ul>
      <ul className={styles.login}>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </>
  );
}
