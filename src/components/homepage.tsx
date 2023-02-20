import React from "react";
import "../scss/homepage.scss";
import helloImg from "../assets/hello.png";
import neonName from "../assets/neonName.png";
import neonDev from "../assets/devBlue.png";
import { GenerateLinks } from "./socialLinks";

export const HomePage = () => {
  return (
    <main id="home">
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
};
