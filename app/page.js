import styles from "./homePage.module.css";
import SearchBar from "./components/SearchBar/searchBar.js";

export default function Homepage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroContainer}>
        <p className={styles.heroTitle}>
          Lorem ipsum dolor
          <br /> sit amet.
        </p>
        <p className={styles.heroText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br /> Nisi mollitia error eum itaque voluptatem ea!
        </p>
      </div>
      <div className={styles.searchContainer}>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}
