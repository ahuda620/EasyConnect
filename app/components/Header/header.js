"use client";

import styles from "./header.module.css";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFileLines,
  faBookmark,
  faRightFromBracket,
  faMagnifyingGlass,
  faBars,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1092);
  const [menuVisible, setMenuVisible] = useState(false);
  const { user, error, isLoading } = useUser();
  //const user = false;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1092);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuVisible = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className={styles.wrapper}>
      <img
        src="companyLogo.png"
        alt="Company Logo"
        className={styles.companyLogo}
      ></img>

      <ul className={styles.centerNavLinks}>
        <li>
          <a href="#">Placeholder</a>
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
        <div className={styles.userLoggedIn}>
          <div className={styles.userProfileContainer}>
            <p>Welcome, {user.given_name}!</p>
            <img src={user.picture}></img>
            {/* <div className={styles.dropDownMenuTriangle}></div>
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
            </div> */}
          </div>
        </div>
      ) : (
        <ul className={styles.userNotLoggedIn}>
          <li>
            <a href="/api/auth/login">Login</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      )}

      {isMobile && (
        <button className={styles.mobileMenuToggle} onClick={handleMenuVisible}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}

      {isMobile && (
        <nav
          className={`${styles.mobileMenu}
        ${menuVisible ? styles.visible : ""}`}
        >
          <ul>
            {user ? (
              //Maybe add profile icon to the top right
              <li>
                <a href="/api/auth/logout">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  Logout
                </a>
              </li>
            ) : (
              <>
                <li>
                  <a href="/api/auth/login">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    Login
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faPenToSquare} />
                    Signup
                  </a>
                </li>
              </>
            )}
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
              <a href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Placeholder
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Placeholder
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Placeholder
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Placeholder
              </a>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
}
