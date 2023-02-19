import React from "react";

export class AboutMe extends React.Component {
  render() {
    return (
      <section id="about">
        <figure className="helloText">
          <img src="./assets/Hello.png" alt="pink neon developer logo" />
        </figure>
        <figure className="neonText">
          <img src="./assets/zoeneon.png" alt="pink neon developer logo" />
        </figure>
        <figure className="neonDev">
          <img src="./assets/neonDevblue.png" alt="pink neon developer logo" />
        </figure>
      </section>
    );
  }
}
