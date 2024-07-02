import React, { useContext } from "react";
import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { nanoid } from "nanoid";

import MoviesContext from "../../context/MoviesContext";

function Movies(props) {
  const { title = "Latest Movies" } = props;
  const { movies, setMovies } = useContext(MoviesContext);

  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "Jigsaw",
      year: 2021,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movie__title}>{title}</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
