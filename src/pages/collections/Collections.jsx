import React from "react";
import styles from "./collections.module.css";
import Searh from "../../assets/icons/Search";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CollectionsCard from "../../components/collectionsCard/CollectionsCard";

function Collections() {
  const searchInput = useRef("");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch("");
    setSearch(searchInput.current.value);
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=a71c5db8606b6db2fc26b6dc71ed1b52&language=en-US&query=${searchInput.current.value}&page=1&include_adult=false`;

    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    searchInput.current.value = "";
  };

  return (
    <div className={styles.collections__container}>
      <div className={styles.collections__title__container}>
        <h1 className={styles.collections__title}>Collections</h1>
        <p className={styles.collections__text}>
          This is where you can search for movies and select and rate movies you
          have watched before, we will then use this rating in the
          recommendation section.
        </p>
        <form onSubmit={searchHandler}>
          <div className={styles.collections__search__container}>
            <div className={styles.collections__search__input}>
              <Searh />
              <input
                className={styles.collections__search}
                type="text"
                placeholder="Search"
                ref={searchInput}
              />
            </div>
            <button
              className={styles.collections__search__button}
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
        {movies.length > 0 && (
          <div>
            Showing total {movies.length} results for <strong>{search}</strong>{" "}
            search.
          </div>
        )}
      </div>

      <div className={styles.collection__movies}>
        {movies.map((movie) => {
          if (movie.vote_average > 0) {
            return <CollectionsCard key={movie.id} movie={movie} />;
          }
        })}
      </div>
    </div>
  );
}

export default Collections;
