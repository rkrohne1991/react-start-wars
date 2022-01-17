import React, { useRef } from "react";

import classes from "./AddMovieContent.module.scss";

const AddMovieContent = (props) => {
  const movieTitle = useRef("");
  const addPlanet = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const movie = {
      title: movieTitle.current.value,
      planet: addPlanet.current.value,
    };

    props.onAddMovie(movie);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="movieTitle">Movie Title</label>
        <input
          type="text"
          id="movieTitle"
          placeholder="Please enter the tittle of the movie"
          ref={movieTitle}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="addPlanet">Add Planet</label>
        <input
          type="text"
          id="addPlanet"
          placeholder="Seacrh for the the planet in database"
          ref={addPlanet}
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovieContent;
