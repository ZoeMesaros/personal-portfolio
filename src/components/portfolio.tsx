import React from "react";
import "../scss/portfolio.scss";
import "../scss/reset.scss";
import "../scss/nav.scss";
import { CreateNav } from "./nav";
import { HomePage } from "./homepage";

function Portfolio() {
  return (
    <div className="Portfolio">
      <CreateNav />
      <HomePage />
    </div>
  );
}

export default Portfolio;
