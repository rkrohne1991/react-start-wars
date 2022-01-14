import React from "react";
import Header from "./components/Header/header";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer/Footer";

import classes from "./App.module.scss";

const App = () => {
  return (
    <div className={classes.mainApp}>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default App;
