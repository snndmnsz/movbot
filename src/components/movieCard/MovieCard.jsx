import React from "react";
import Add from "../../assets/icons/Add";
import { Link } from "react-router-dom";
import styles from "./movieCard.module.css";
import Star from "../../assets/icons/Star";
import Eye from "../../assets/icons/Eye";


function MovieCard({ title, poster, rating, movieId }) {

  return (
    <div className={styles.card}>
      <Link to={`/movie/${movieId}`} >
        <div className={styles.card__search}><Eye/>View Details</div>
        <p className={styles.card__rating}>
          <Star />
          {rating}
        </p>
        <img className={styles.card__image} src={`https://image.tmdb.org/t/p/original/${poster}`} alt="poster" />
      </Link>
      <h3 className={styles.card__title}>{title}</h3>
      <button className={styles.card__button}>
        <Add className={styles.card__button__icon}/> Add to my Watch List
      </button>
    </div>
  );
}

export default MovieCard;
