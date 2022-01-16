import React from "react";
import Movie from "../Movie/Movie";

import classes from "./MoviesList.module.scss";

const MoviesList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.films.map((film) => (
        <Movie key={film.episode_id} title={film.title} />
      ))}
    </ul>
  );
};

export default MoviesList;
