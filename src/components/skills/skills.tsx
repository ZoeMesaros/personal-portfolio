import React from "react";
import "./skills.scss";

export const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skillsHeader">Personal skills and tools</h1>
      <div className="container">
        <fieldset className="front">
          <legend>Frontend</legend>
          <p className="icons">
            <i className="fa-brands fa-html5 fa-xl"></i>
            <i className="fa-brands fa-css3-alt fa-xl"></i>
            <i className="fa-brands fa-sass fa-xl"></i>
            <i className="fa-brands fa-js fa-xl"></i>
            <i className="fi fi-brands-typescript"></i>
            <i className="fa-brands fa-react fa-xl"></i>
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
            <i className="fa-brands fa-figma fa-xl"></i>
            <i className="fa-brands fa-git-alt fa-xl"></i>
            <i className="fi fi-brands-photoshop"></i>
          </p>
        </fieldset>
      </div>
    </section>
  );
};
