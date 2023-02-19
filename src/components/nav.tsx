import React from "react";
import { ReactDOM } from "react";

const NavArray = [
  "fa-solid fa-house",
  "fa-solid fa-user",
  "fa-solid fa-star",
  "fa-solid fa-pen-to-square",
  "fa-solid fa-envelope",
];

export const NavBar = () => {
  const NavList = NavArray.map((item, index) => (
    <a href={"#" + item}>
      <li key={"Navitem_" + index}></li>
      <i className={item}></i>
    </a>
  ));

  return <ul className="navUl">{NavList}</ul>;
};
