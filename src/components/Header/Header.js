import React from "react";

import classes from "./Header.module.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
    </header>
  );
};

export default Header;
