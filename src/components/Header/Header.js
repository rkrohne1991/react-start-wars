import React from "react";
import { Fragment } from "react";

import classes from "./Header.module.scss";
import logoSVG from "../../assets/logo.svg";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img className={classes.logo} src={logoSVG} alt="Logo" />
      </header>
    </Fragment>
  );
};

export default Header;
