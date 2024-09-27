import styles from "./homePage.module.css";
import SearchBar from "./components/SearchBar/searchBar.js";

export default function Homepage() {
  return (
    <main className={styles.container}>
      <div className={styles.searchContainer}>
        <SearchBar></SearchBar>
      </div>
    </main>
  );
}
