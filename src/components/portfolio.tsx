import React from "react";
import "./portfolio.scss";
import "./reset/reset.scss";
import "./navigation/nav.scss";
import { Navigation } from "./navigation/nav";
import { HomePage } from "./homepage/homepage";
import { AboutMe } from "./about/about";

function Portfolio() {
  return (
    <div className="Portfolio">
      <Navigation />
      <HomePage />
      <AboutMe />
    </div>
  );
}

export default Portfolio;
