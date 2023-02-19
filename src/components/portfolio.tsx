import React from "react";
import "../portfolio.scss";
import "../reset.scss";
import "../nav.scss";
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
