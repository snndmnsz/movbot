import React from "react";
import styles from "./movieDetails.module.css";
import { useParams } from "react-router-dom";
import bigBanner from "../../assets/images/avg1.png";
import poster2 from "../../assets/images/avg2.png";
import Return from "../../assets/icons/Return";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
function MovieDetails() {
  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=a71c5db8606b6db2fc26b6dc71ed1b52`;
  const [movie, setMovie] = React.useState({});

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovie(res.data);
    });
  }, []);

  return (
    <div className={styles.details__container}>
      <Link to="/suggestions" className={styles.return__button}>
        <Return /> Go Back
      </Link>
      <div className={styles.details}>
        <div className={styles.details__banner}>
          <div className={styles.details__image}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="poster"
            />
          </div>

          <div className={styles.details__title}>{movie.original_title}</div>
        </div>
        <div className={styles.details__info}>
          <div className={styles.details__info__poster}>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="poster"
            />
          </div>
          <div className={styles.details__info__text}>
            <h2 className={styles.details__info__text__subTitle}>
              {movie.tagline}
            </h2>
            <p className={styles.details__info__text__description}>
              {movie.overview}
            </p>
            <div className={styles.details__info__text__rating}>9.7</div>
            <div className={styles.details__info__text__type}>Movie</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
