import React from "react";
import "../homepage.scss";

export class HomePage extends React.Component {
  render() {
    return (
      <main className="homePage">
        <GenerateLinks />
        <figure className="helloText">
          <img src="./assets/Hello.png" alt="pink neon developer logo" />
        </figure>
        <figure className="neonText">
          <img src="./assets/zoeneon.png" alt="pink neon developer logo" />
        </figure>
        <figure className="neonDev">
          <img src="./assets/neonDevblue.png" alt="pink neon developer logo" />
        </figure>
      </main>
    );
  }
}

const SocialLinks = [
  {
    Name: "CV",
    iconName: "fa-solid fa-file-arrow-down fa-stack-1x fa-inverse",
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
