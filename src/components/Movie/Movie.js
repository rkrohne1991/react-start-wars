import React, { useState } from "react";

import arrowOpen from "../../assets/arrow-open.svg";
import arrowClose from "../../assets/arrow-close.svg";
import classes from "./Movie.module.scss";
import MovieTable from "../MovieTable/MovieTable";

const Movie = (props) => {
  const [contentIsActive, setContentIsActive] = useState(false);

  const toggleContentHandler = () => {
    setContentIsActive(!contentIsActive);
    // console.log("clicked");
  };

  const btnClasses = `${classes["movie__button"]} ${
    contentIsActive ? classes["movie__button-active"] : ""
  }`;

  return (
    <li className={classes.movie}>
      <div className={classes["movie__header"]}>
        <div className={classes["movie__title"]}>{props.title}</div>
        <button onClick={toggleContentHandler} className={btnClasses}>
          <img
            className={classes.logo}
            src={!contentIsActive ? arrowOpen : arrowClose}
            alt="Open Modal"
          />
        </button>
      </div>
      {contentIsActive && (
        <div className={classes["movie__content"]}>
          <MovieTable planets={props.planets} />
        </div>
      )}
    </li>
  );
};

export default Movie;
