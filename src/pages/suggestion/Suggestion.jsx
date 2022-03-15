import React from "react";
import styles from "./suggestion.module.css";
import MovieCard from "../../components/movieCard/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Suggestion() {
  const url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=a71c5db8606b6db2fc26b6dc71ed1b52";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: url,
      responseType: "stream",
    }).then(function (response) {
      //console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className={styles.suggestion__container}>
      <h1 className={styles.title}>Suggestions</h1>
      <div className={styles.card__containers}>
        {movies && movies.map((movie) => {
          return (
            <MovieCard
              title={movie.title}
              poster={movie.poster_path}
              rating={parseInt(movie.vote_average) >= 8 ? "Best match" : movie.vote_average }
              movieId={movie.id}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Suggestion;
