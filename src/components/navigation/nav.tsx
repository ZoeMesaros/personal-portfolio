import React from "react";

const NavLinks = [
  {
    Id: 0,
    Name: "#home",
    IconName: "fa-solid fa-house fa-sm",
    IconNameSmall: "fa-solid fa-house fa-xs",
  },
  {
    Id: 1,
    Name: "#about",
    IconName: "fa-solid fa-circle-user fa-xs",
    IconNameSmall: "fa-solid fa-circle-user fa-xxs",
  },
  {
    Id: 2,
    Name: "#skills",
    IconName: "fa-solid fa-star fa-sm",
    IconNameSmall: "fa-solid fa-star fa-xs",
  },
  {
    Id: 3,
    Name: "#projects",
    IconName: "fa-solid fa-pen-to-square fa-sm",
    IconNameSmall: "fa-solid fa-pen-to-square fa-xs",
  },
  {
    Id: 4,
    Name: "#contact",
    IconName: "fa-solid fa-envelope fa-sm",
    IconNameSmall: "fa-solid fa-envelope fa-xs",
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
