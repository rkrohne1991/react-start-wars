import React from "react";
import { Fragment } from "react";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <p>COPYRIGHT © 2019 MIRUMEE SOFTWARE</p>
      </footer>
    </Fragment>
  );
};

export default Footer;
