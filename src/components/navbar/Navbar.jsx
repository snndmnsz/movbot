import React from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/images/image1.png";
import Movie from "../../assets/icons/Movie";
import Suggestions from "../../assets/icons/Suggestions";
import Collections from "../../assets/icons/Collections";
import Home from "../../assets/icons/Home";
import Profile from "../../assets/icons/Profile";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img  src={logo} alt="logo" />
        <div className={styles.navbar__title}>MOVBOT</div>
        <div className={styles.navbar__account}>FREE TRIAL</div>
      </div>

      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.navbar__link__selected : styles.navbar__link
            }
          >
            <Home/>Home
          </NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink
            to="/suggestions"
            className={({ isActive }) =>
              isActive ? styles.navbar__link__selected : styles.navbar__link
            }
          >
            <Suggestions />
            Suggestions
          </NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink
            to="/my-watch-list"
            className={({ isActive }) =>
              isActive ? styles.navbar__link__selected : styles.navbar__link
            }
          >
            <Movie />
            WatchList
          </NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink
            to="/collections"
            className={({ isActive }) =>
              isActive ? styles.navbar__link__selected : styles.navbar__link
            }
          >
            <Collections /> Collections
          </NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? styles.navbar__link__selected : styles.navbar__link
            }
          >
            <span className={styles.navbar__link__username}>Symbiote</span>
            <Profile className={styles.profile} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
