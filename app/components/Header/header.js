"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFileLines,
  faBookmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { user, error, isLoading } = useUser();
  // console.log(user);

  return (
    <header className={styles.container}>
      <img
        src="companyLogo.png"
        alt="Company Logo"
        className={styles.companyLogo}
      ></img>
      <ul className={styles.centerNavLinks}>
        <li>
          <a href="../../test">Test</a>
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
      {user ? (
        <div className={styles.userProfileContainer}>
          <div className={styles.userLoggedIn}>
            <p>Welcome, {user.given_name}!</p>
            <img src={user.picture}></img>
            <div className={styles.dropDownMenuTriangle}></div>
            <div className={styles.profileDropDownMenu}>
              <nav>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    Profile
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFileLines} />
                    Applications
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBookmark} />
                    Saved Jobs
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    Logout
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <ul className={styles.userNotLoggedIn}>
          <li>
            <Link href="/api/auth/login">Login</Link>
          </li>
          <li>
            <Link href="#">Sign Up</Link>
          </li>
        </ul>
      )}
    </header>
  );
}
