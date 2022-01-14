import React from "react";
import Movie from "../Movie/Movie";

import classes from "./MoviesList.module.scss";

const MoviesList = () => {
  return (
    <ul className={classes["movies-list"]}>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </ul>
  );
};

export default MoviesList;
