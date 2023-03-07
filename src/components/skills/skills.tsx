import React from "react";
import "./skills.scss";

export const Skills = () => {
  return (
    <section id="skills">
      <h1>Personal skills and tools</h1>
      <div className="container">
        <fieldset className="front">
          <legend>Frontend</legend>
          <p className="icons">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-sass"></i>
            <i className="fi fi-brands-js"></i>
            <i className="fi fi-brands-typescript"></i>
            <i className="fa-brands fa-react"></i>
          </p>
        </fieldset>
        <fieldset className="back">
          <legend>Backend</legend>
          <p className="icons">
            MySQL Workbench<i className="fi fi-brands-mysql"></i>
          </p>
        </fieldset>
        <fieldset className="tools">
          <legend>Tools</legend>
          <p className="icons">
            <i className="fa-brands fa-figma"></i>
            <i className="fa-brands fa-git-alt"></i>
            <i className="fi fi-brands-photoshop"></i>
          </p>
        </fieldset>
      </div>
    </section>
  );
};
