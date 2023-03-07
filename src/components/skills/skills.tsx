import React from "react";
import "./skills.scss";

export const Skills = () => {
  return (
    <section id="skills">
      <h1>Skills and tools used in school</h1>
      <div className="container">
        <fieldset className="front">
          <legend>Frontend</legend>
        </fieldset>
        <fieldset className="back">
          <legend>Backend</legend>
        </fieldset>
        <fieldset className="tools">
          <legend>Tools</legend>
        </fieldset>
      </div>
    </section>
  );
};
