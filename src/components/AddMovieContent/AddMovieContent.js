import React from "react";
// import { gql, useQuery } from "@apollo/client";

import classes from "./AddMovieContent.module.scss";
import useInput from "../../hooks/use-input";
import newId from "../../utils/new-id";

// function not working
// it suppose to get the results on input change
// display the dropdown and show the results
// hardcoded query on its own is working
// const searchPlanets = (value) => {
//   const SEARCH_PLANETS = gql`
//     query SearchQuery {
//       search @rest(type: "Planet", path: "planets/?search=${value}}") {
//         results
//       }
//     }
//   `;

//   const { loading, error, data } = useQuery(SEARCH_PLANETS);

//   if (error) {
//     //to do: display search error
//   }

//   if (
//     !loading &&
//     !error &&
//     data &&
//     data.planets &&
//     data.planets.results
//   ) {
//     // display no results if results = 0
//     // take all results and add to array
//   }
// };

const titleValidation = (value) => {
  if (value.trim().length >= 3) {
    return value.charAt(0) === value.charAt(0).toUpperCase();
  }
};

const isNotEmpty = (value) => value.trim().length > 0;

const AddMovieContent = (props) => {
  const {
    value: movieTitleValue,
    isValid: movieTitleIsValid,
    hasError: movieTitleHasError,
    valueChangeHandler: movieTitleChangeHandler,
    inputBlurHandler: movieTitleBlurHandler,
    reset: resetMovieTitle,
  } = useInput(titleValidation);

  const {
    value: planetNameValue,
    isValid: planetNameIsValid,
    hasError: planetNameHasError,
    valueChangeHandler: planetNameChangeHandler,
    inputBlurHandler: planetNameBlurHandler,
    reset: resetPlanetName,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (movieTitleIsValid && planetNameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const movie = {
      title: movieTitleValue,
      episode_id: parseInt(newId()),
      planet: [planetNameValue],
    };

    props.onAddMovie(movie);
    resetMovieTitle();
    resetPlanetName();
  };

  const btnClasses = `${classes["form__button"]} ${
    !formIsValid ? classes["form__button-disabled"] : ""
  }`;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["form__control-group"]}>
        <label htmlFor="movieTitle">Movie Title</label>
        <input
          type="text"
          id="movieTitle"
          placeholder="Please enter the tittle of the movie"
          value={movieTitleValue}
          onChange={movieTitleChangeHandler}
          onBlur={movieTitleBlurHandler}
        />
        {movieTitleHasError && (
          <p className={classes["form__error"]}>
            Movie tittle name must start with a capital letter.
          </p>
        )}
      </div>
      <div className={classes["form__control-group"]}>
        <label htmlFor="addPlanet">Add Planet</label>
        <input
          type="text"
          id="addPlanet"
          placeholder="Seacrh for the the planet in database"
          value={planetNameValue}
          onChange={planetNameChangeHandler}
          onBlur={planetNameBlurHandler}
        />
        {planetNameHasError && (
          <p className={classes["form__error"]}>This field is required</p>
        )}
      </div>
      <div className={classes["form__actions"]}>
        <button className={btnClasses} disabled={!formIsValid}>
          Add Movie
        </button>
      </div>
    </form>
  );
};

export default AddMovieContent;
