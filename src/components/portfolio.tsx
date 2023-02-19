import React from "react";
import { normalize } from "path";
import "../portfolio.scss";
import "../reset.scss";
import "../nav.scss";
import { NavBar } from "./nav";
import { HomePage } from "./homepage";

function Portfolio() {
  return (
    <div className="Portfolio">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default Portfolio;
