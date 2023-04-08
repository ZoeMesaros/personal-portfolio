import React from "react";

const NavLinks = [
  {
    Id: 0,
    Name: "#home",
    IconName: "fa-solid fa-house",
    IconNameSmall: "fa-solid fa-house fa-sm",
  },
  {
    Id: 1,
    Name: "#about",
    IconName: "fa-solid fa-circle-user",
    IconNameSmall: "fa-solid fa-circle-user fa-xs",
  },
  {
    Id: 2,
    Name: "#skills",
    IconName: "fa-solid fa-star",
    IconNameSmall: "fa-solid fa-star fa-sm",
  },
  {
    Id: 3,
    Name: "#projects",
    IconName: "fa-solid fa-pen-to-square",
    IconNameSmall: "fa-solid fa-pen-to-square fa-sm",
  },
  {
    Id: 4,
    Name: "#contact",
    IconName: "fa-solid fa-envelope",
    IconNameSmall: "fa-solid fa-envelope fa-sm",
  },
];

export const Navigation = () => (
  <ul className="navUl">
    {NavLinks.map((links, Id): any => (
      <li key={Id}>
        <a href={links.Name}>
          <i className={links.IconName}></i>
        </a>
      </li>
    ))}
  </ul>
);
