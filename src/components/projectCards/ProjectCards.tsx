import React from "react";
import "./projectcards.scss";

export const ProjectCardsSection = () => {
  return (
    <main id="cards">
      <ul className="list">
        <li className="item">
          <div className="content">Item 1</div>
        </li>
        <li className="item">
          <div className="content">Item 2</div>
        </li>
        <li className="item">
          <div className="content">Item 3</div>
        </li>
        <li className="item">
          <div className="content">Item 4</div>
        </li>
        <li className="item">
          <div className="content">Item 5</div>
        </li>
      </ul>
    </main>
  );
};

export default ProjectCardsSection;
