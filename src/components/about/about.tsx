import React from "react";
import { Fieldset } from "primereact/fieldset";
import "./about.scss";

export const AboutMe = () => {
  return (
    <section id="about">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Hello!</h1>
          <p>
            My name is Zoë, I'm a developer student at Medieinstitutet in
            Stockholm, Sweden. I am passionate about Web Development and I am
            currently studying E-commerce within web development. Before this
            school I had no previous experience with programming but I have
            always loved computers. Immediately when I started this course I
            knew I had ended up in the right place. My school is providing basic
            knowledge in both back and frontend development such as HTML,
            CSS/SCSS, Javascript, Typescript, API, Database, PHP and React. I am
            eager to learn and challenge myself to grow my knowledge. I am
            looking for LIA internship for autumn 2023 Between 2023-10-16 and
            2023-12-24.
          </p>
        </div>
      </div>
    </section>
  );
};
