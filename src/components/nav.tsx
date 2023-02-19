import React from "react";
import { ReactDOM } from "react";

const NavLinks = [
  {
    Name: "#home",
    IconName: "fa-solid fa-house fa-xs",
  },
  {
    Name: "#about",
    IconName: "fa-solid fa-user fa-xs",
  },
  {
    Name: "#skills",
    IconName: "fa-solid fa-star fa-xs",
  },
  {
    Name: "#projects",
    IconName: "fa-solid fa-pen-to-square fa-xs",
  },
  {
    Name: "#contact",
    IconName: "fa-solid fa-envelope fa-xs",
  },
];

export const CreateNav = () => (
  <ul className="navUl">
    {NavLinks.map((links, index): any => (
      <li key={"Navitem_" + index}>
        <a href={links.Name}>
          <i className={links.IconName}></i>
        </a>
      </li>
    ))}
  </ul>
);
