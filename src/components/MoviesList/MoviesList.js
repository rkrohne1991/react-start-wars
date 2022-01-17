import React from "react";
import AddMovie from "../AddMovie/AddMovie";
import Movie from "../Movie/Movie";

import classes from "./MoviesList.module.scss";

const MoviesList = (props) => {
  return (
    <section className={classes["movies-section"]}>
      <ul className={classes["movies-list"]}>
        {props.films.map((film) => (
          <Movie
            key={film.episode_id}
            title={film.title}
            planets={film.planets}
          />
        ))}
      </ul>
      <AddMovie />
    </section>
  );
};

export default MoviesList;
