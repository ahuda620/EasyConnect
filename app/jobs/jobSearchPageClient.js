"use client";

import styles from "./jobSearchPageClient.module.css";
import SearchBar from "../components/SearchBar/searchBar";
import { useState, useEffect } from "react";

export default function JobSearchPage({ jobListings, jobListingDetails }) {
  return (
    <>
      <div className={styles.searchBarWrapper}>
        <SearchBar></SearchBar>
        <div className={styles.sortButtonsWrapper}>
          <button>Placeholder</button>
          <button>Placeholder</button>
          <button>Placeholder</button>
          <button>Placeholder</button>
          <button>Placeholder</button>
          <button>Placeholder</button>
          <button>Placeholder</button>
          <button>Placeholder</button>
          <button>Placeholder</button>
          <button>Placeholder</button>
        </div>
      </div>
      <div className={styles.pageContentWrapper}>
        <div className={styles.jobListingsPanelWrapper}>
          <div className={styles.jobListingWrapper}></div>
        </div>
        <div className={styles.jobListingDetailPanelWrapper}></div>
      </div>
    </>
  );
}
