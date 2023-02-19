import React from "react";
import { ReactDOM } from "react";
import "../homepage.scss";

export class HomePage extends React.Component {
  render() {
    return (
      <main className="homePage">
        <figure>
          <img src="./assets/zoe_profile_me.png" alt="" />
        </figure>
        <figure className="helloText">
          <img src="./assets/Hello.png" alt="White hello text" />
        </figure>
        <figure className="neonText">
          <img src="./assets/zoeneon.png" alt="pink neon developer logo" />
        </figure>
      </main>
    );
  }
}
