import React from "react";
import { ReactDOM } from "react";

export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

const NavArray = ["About me", "Skills", "Projects", "Contact"];

export const NavBar = () => {
  const NavList = NavArray.map((item, index) => (
    <a href={"#" + item}>
      <li key={"Navitem_" + index}>{item}</li>
    </a>
  ));
  return <ul>{NavList}</ul>;
};
