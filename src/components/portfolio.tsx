import React from "react";
import { normalize } from "path";
import "../portfolio.scss";
import "../reset.scss";
import { NavBar } from "./nav";

function Portfolio() {
  return (
    <div className="Portfolio">
      <figure>
        <img src="./assets/zoeneon.png" alt="pink neon developer logo" />
      </figure>
      <NavBar />
    </div>
  );
}

export default Portfolio;
