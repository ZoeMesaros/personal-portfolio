import React from "react";

const NavLinks = [
  {
    Name: "#home",
    IconName: "fa-solid fa-house fa-sm",
    IconNameSmall: "fa-solid fa-house fa-xs",
  },
  {
    Name: "#about",
    IconName: "fa-solid fa-circle-user fa-xs",
    IconNameSmall: "fa-solid fa-circle-user fa-xxs",
  },
  {
    Name: "#skills",
    IconName: "fa-solid fa-star fa-sm",
    IconNameSmall: "fa-solid fa-star fa-xs",
  },
  {
    Name: "#projects",
    IconName: "fa-solid fa-pen-to-square fa-sm",
    IconNameSmall: "fa-solid fa-pen-to-square fa-xs",
  },
  {
    Name: "#contact",
    IconName: "fa-solid fa-envelope fa-sm",
    IconNameSmall: "fa-solid fa-envelope fa-xs",
  },
];

export const Navigation = () => (
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
