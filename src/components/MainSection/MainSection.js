import React from "react";
import { gql, useQuery } from "@apollo/client";

import loaderSVG from "../../assets/loader.svg";
import MoviesList from "../MoviesList/MoviesList";
import classes from "./MainSection.module.scss";

const GET_FILMS = gql`
  query GetFilms {
    films @rest(type: "Film", path: "films") {
      results
    }
  }
`;

const Content = () => {
  if (!localStorage.getItem("Movies")) {
    const { loading, error, data } = useQuery(GET_FILMS);

    if (loading) {
      return (
        <div className={classes["loader-container"]}>
          <img src={loaderSVG} alt="Loader" />
        </div>
      );
    }

    if (error) {
      return (
        <div className={classes["loader-container"]}>
          <div>Something went wrong! {error}</div>
        </div>
      );
    }

    localStorage.setItem("Movies", JSON.stringify(data.films.results));

    return <MoviesList films={data.films.results} />;
  } else {
    const storage = localStorage.getItem("Movies");
    const jsonObject = JSON.parse(storage);
    // console.log(jsonObject);

    return <MoviesList films={jsonObject} />;
  }
};

const MainSection = () => {
  return (
    <main className={classes.mainSection}>
      <Content />
    </main>
  );
};

export default MainSection;
