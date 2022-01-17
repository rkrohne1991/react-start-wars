import React from "react";

import classes from "./Header.module.scss";
import logoSVG from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logoSVG} alt="Logo" />
    </header>
  );
};

export default Header;
