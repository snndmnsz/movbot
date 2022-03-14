import React from "react";
import styles from "./collections.module.css";
import Searh from "../../assets/icons/Search";
function Collections() {
  return (
    <div className={styles.collections__container}>
      <div className={styles.collections__title__container}>
        <h1 className={styles.collections__title}>Collections</h1>
        <p className={styles.collections__text}>
          This is where you can search for movies and select and rate movies you
          have watched before, we will then use this rating in the
          recommendation section.
        </p>
        <div className={styles.collections__search__container}>
          <div className={styles.collections__search__input}>
            <Searh />
            <input
              className={styles.collections__search}
              type="text"
              placeholder="Search"
            />
          </div>
          <button className={styles.collections__search__button}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Collections;
