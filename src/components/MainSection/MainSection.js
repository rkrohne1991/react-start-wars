import React from "react";
import { Fragment } from "react";

import MoviesList from "../MoviesList/MoviesList";
import classes from "./MainSection.module.scss";

const MainSection = () => {
  return (
    <Fragment>
      <main className={classes.mainSection}>
        <MoviesList />
      </main>
    </Fragment>
  );
};

export default MainSection;
