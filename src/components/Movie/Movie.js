import React from "react";

import arrowOpen from "../../assets/arrow-open.svg";
import classes from "./Movie.module.scss";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <div className={classes["movie__header"]}>
        <div className={classes["movie__title"]}>{props.title}</div>
        <button className={classes["movie__button"]}>
          <img className={classes.logo} src={arrowOpen} alt="Open Modal" />
        </button>
      </div>
    </li>
  );
};

export default Movie;
