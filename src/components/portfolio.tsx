import React from "react";
import "./portfolio.scss";
import "./reset/reset.scss";
import "./navigation/nav.scss";
import { Navigation } from "./navigation/nav";
import { HomePage } from "./homepage/homepage";
import { AboutMe } from "./about/about";
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";

function Portfolio() {
  return (
    <div className="Portfolio">
      <Navigation />
      <HomePage />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Portfolio;
