import React, { useState } from "react";

import classes from "./AddMovie.module.scss";
import arrowOpen from "../../assets/arrow-open.svg";
import arrowClose from "../../assets/arrow-close.svg";
import AddMovieContent from "../AddMovieContent/AddMovieContent";

const AddMovie = (props) => {
  const [contentIsActive, setContentIsActive] = useState(false);

  const toggleContentHandler = () => {
    setContentIsActive(!contentIsActive);
  };

  const btnClasses = `${classes["add-movie__button"]} ${
    contentIsActive ? classes["add-movie__button-active"] : ""
  }`;

  const addMovieHandler = (movie) => {
    props.onAddedMovie(movie);
    setContentIsActive(false);
  };

  return (
    <section className={classes["add-movie__section"]}>
      <div className={classes["add-movie__container"]}>
        <div className={classes["add-movie__header"]}>
          <div className={classes["add-movie__title"]}>Add Movie</div>
          <button onClick={toggleContentHandler} className={btnClasses}>
            <img
              className={classes.logo}
              src={!contentIsActive ? arrowOpen : arrowClose}
              alt="Open Modal"
            />
          </button>
        </div>
        {contentIsActive && (
          <div className={classes["add-movie__content"]}>
            <AddMovieContent onAddMovie={addMovieHandler} />
          </div>
        )}
      </div>
    </section>
  );
};

export default AddMovie;
