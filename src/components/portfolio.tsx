import React from "react";
import { normalize } from "path";
import "../portfolio.scss";
import "../reset.scss";
import { NavBar } from "./nav";
import { MyComponentClass } from "./nav";

function Portfolio() {
  return (
    <div className="Portfolio">
      <figure>
        <img src="./assets/zoeneon.png" alt="pink neon developer logo" />
      </figure>
      <NavBar />
      <MyComponentClass />
    </div>
  );
}

export default Portfolio;
