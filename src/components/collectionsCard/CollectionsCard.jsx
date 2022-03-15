import React from "react";
import styles from "./collectionsCard.module.css";
import Star from "../../assets/icons/Star";
import Like from "../../assets/icons/Like";
import Dislike from "../../assets/icons/Dislike";
import Add from "../../assets/icons/Add";

function CollectionsCard({ movie }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <p className={styles.rating}>
          <Star />
          {movie.vote_average}
        </p>
        <img
          src={
            movie.backdrop_path !== null
              ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
              : `https://image.tmdb.org/t/p/original/${movie.poster_path}`
          }
          alt={movie.title}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{movie.title}</div>
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.green}`}>
          <Like />I watched and liked it
        </button>
        <button className={`${styles.button} ${styles.red}`}>
          <Dislike />I watched and didnt like it
        </button>
        <button className={styles.button}>
          <Add />
          Add to my Watch List
        </button>
      </div>
    </div>
  );
}

export default CollectionsCard;

// adult: false
// backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
// genre_ids: (3) [28, 12, 878]
// id: 634649
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
