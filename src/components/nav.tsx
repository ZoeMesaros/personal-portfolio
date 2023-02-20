import React from "react";
import { ReactDOM } from "react";

const NavLinks = [
  {
    Name: "#home",
    IconName: "fa-solid fa-house fa-sm",
  },
  {
    Name: "#about",
    IconName: "fa-solid fa-circle-user",
  },
  {
    Name: "#skills",
    IconName: "fa-solid fa-star fa-sm",
  },
  {
    Name: "#projects",
    IconName: "fa-solid fa-pen-to-square fa-sm",
  },
  {
    Name: "#contact",
    IconName: "fa-solid fa-envelope fa-sm",
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
