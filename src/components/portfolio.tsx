import React from "react";
import "../scss/portfolio.scss";
import "../scss/reset.scss";
import "../scss/nav.scss";
import { CreateNav } from "./nav";
import { HomePage } from "./homepage";
import { AboutMe } from "./about";

function Portfolio() {
  return (
    <div className="Portfolio">
      <CreateNav />
      <HomePage />
      <AboutMe />
    </div>
  );
}

export default Portfolio;
