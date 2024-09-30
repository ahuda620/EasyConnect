"use client";

import styles from "./header.module.css";

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
  window.addEventListener("resize", () => {
    console.log(window.innerWidth); // Logs the viewport width every time the window is resized
  });

  return (
    <header className={styles.container}>
      <div className={styles.companyLogoContainer}>
        <img
          src="companyLogo.png"
          alt="Company Logo"
          className={styles.companyLogo}
        ></img>
      </div>
      <div className={styles.centerNavLinks}>
        <ul>
          <li>
            <a href="../../test">Test</a>
          </li>
          {/* <li>
            <a href="#">Placeholder</a>
          </li>
          <li>
            <a href="#">Placeholder</a>
          </li>
          <li>
            <a href="#">Placeholder</a>
          </li> */}
        </ul>
      </div>
      {user ? (
        <div className={styles.userLoggedIn}>
          <div className={styles.userProfileContainer}>
            <p>Welcome, {user.given_name}!</p>
            <img src={user.picture}></img>
            <div className={styles.dropDownMenuTriangle}></div>
            <div className={styles.profileDropDownMenu}>
              <nav>
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFileLines} />
                      Applications
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faBookmark} />
                      Saved Jobs
                    </a>
                  </li>
                  <li>
                    <a href="/api/auth/logout">
                      <FontAwesomeIcon icon={faRightFromBracket} />
                      Logout
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.userNotLoggedIn}>
          <ul>
            <li>
              <a href="/api/auth/login">Login</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
