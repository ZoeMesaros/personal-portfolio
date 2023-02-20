import React from "react";
import "../scss/homepage.scss";
import helloImg from "../assets/hello.png";
import neonName from "../assets/neonName.png";
import neonDev from "../assets/devBlue.png";
import { GenerateLinks } from "./socialLinks";

export class HomePage extends React.Component {
  render() {
    return (
      <main id="home">
        <section className="linkLines">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
        </section>
        <GenerateLinks />
        <figure className="helloText">
          <img src={helloImg} alt="pink neon developer logo" />
        </figure>
        <figure className="neonText">
          <img src={neonName} alt="pink neon developer logo" />
        </figure>
        <figure className="neonDev">
          <img src={neonDev} alt="pink neon developer logo" />
        </figure>
      </main>
    );
  }
}
