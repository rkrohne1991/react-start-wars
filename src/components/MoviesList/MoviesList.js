import React, { useState } from "react";
import AddMovie from "../AddMovie/AddMovie";
import Movie from "../Movie/Movie";

import classes from "./MoviesList.module.scss";

const MoviesList = (props) => {
  const [movies, setMovies] = useState(props.films);

  const addedMovie = (data) => {
    const addMovies = [...movies, data];
    setMovies(addMovies);
    localStorage.setItem("Movies", JSON.stringify(addMovies));
  };

  return (
    <section className={classes["movies-section"]}>
      <ul className={classes["movies-list"]}>
        {movies.map((film) => (
          <Movie
            key={film.episode_id}
            title={film.title}
            planets={film.planets}
          />
        ))}
      </ul>
      <AddMovie onAddedMovie={addedMovie} />
    </section>
  );
};

export default MoviesList;
