import React from "react";
import { Fragment } from "react";

import classes from "./Header.module.scss";
import logoSVG from "../../assets/logo.svg";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div>
          <img src={logoSVG} alt="Logo" />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
