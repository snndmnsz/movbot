import React from "react";
import styles from "./movieDetails.module.css";
import { useParams } from "react-router-dom";
import bigBanner from "../../assets/images/avg1.png";
import poster2 from "../../assets/images/avg2.png";
import Return from "../../assets/icons/Return";
import { Link } from "react-router-dom";
function MovieDetails() {
  const { id } = useParams();

  return (
    <div className={styles.details__container}>
      <Link to="/suggestions" className={styles.return__button}>
        <Return /> Go Back
      </Link>
      <div className={styles.details}>
        <div className={styles.details__banner}>
          <img className={styles.details__image} src={bigBanner} alt="poster" />
          <div className={styles.details__title}>Avengers: Endgame</div>
        </div>
        <div className={styles.details__info}>
          <div className={styles.details__info__poster}>
            <img className={styles.poster} src={poster2} alt="poster" />
          </div>
          <div className={styles.details__info__text}>
            <h2 className={styles.details__info__text__subTitle}>
              Part of the journey is the end.
            </h2>
            <p className={styles.details__info__text__description}>
              After the devastating events of Avengers: Infinity War (2018), the
              universe is in ruins. With the help of remaining allies, the
              Avengers assemble once more in order to reverse Thanos' actions
              and restore balance to the universe.
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
