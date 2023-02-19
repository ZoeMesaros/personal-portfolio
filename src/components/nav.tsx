import React from "react";
import { ReactDOM } from "react";

const NavArray = [
  "fa-solid fa-house fa-xs",
  "fa-solid fa-user fa-xs",
  "fa-solid fa-star fa-xs",
  "fa-solid fa-pen-to-square fa-xs",
  "fa-solid fa-envelope fa-xs",
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


const NavigationLinks = [
  {
    Name: "home",
    iconName: "fa-solid fa-house fa-xs",,
    Link: "https://docs.google.com/document/d/1NjCYVMQfduoGCQ_GD-19v7oJkVxnZqK18x-jojlRQjc/export?format=pdf",
  },
  {
    Name: "LinkedIn",
    iconName: "fa-brands fa-linkedin fa-stack-1x fa-inverse",
    Link: "https://www.linkedin.com/in/zoe-km/",
  },
  {
    Name: "GitHub",
    iconName: "fa-brands fa-github  fa-stack-1x fa-inverse",
    Link: "https://github.com/ZoeMesaros",
  },
];

const GenerateLinks = () => (
  <>
    {SocialLinks.map((links, index) => (
      <div className="linkIcon" key={index}>
        <a href={links.Link} target="_blank">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className={links.iconName}></i>
          </span>
        </a>
      </div>
    ))}
  </>
);