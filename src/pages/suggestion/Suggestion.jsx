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

  //   adult: false
  // backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
  // genre_ids: (3) [28, 12, 878]
  // id: 634649
  // media_type: "movie"
  // original_language: "en"
  // original_title: "Spider-Man: No Way Home"
  // overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
  // popularity: 10552.154
  // poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
  // release_date: "2021-12-15"
  // title: "Spider-Man: No Way Home"
  // video: false
  // vote_average: 8.3
  // vote_count: 9461

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
            />
          );
        })}
      </div>
    </div>
  );
}

export default Suggestion;
