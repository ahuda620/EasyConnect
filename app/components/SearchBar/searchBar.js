import styles from "./searchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <input
        type="search"
        placeholder="Search for a Job..."
        name="jobSearch"
      ></input>
      <input type="submit" value="Search"></input>
    </div>
  );
}
