import React, { useState } from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "./projectData";

const PortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="portfolio-carousel">
      <div className="carousel-container d-flex align-items-center">
        <Button className="carousel-control prev mr-2" onClick={handlePrev}>
          Prev
        </Button>
        <div className="carousel-inner d-flex overflow-hidden">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
              style={{
                minWidth: "18rem",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank">
                    Go to Project
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <Button className="carousel-control next ml-2" onClick={handleNext}>
          Next
        </Button>
      </div>
      <ProgressBar
        now={(currentIndex + 1) * (100 / projects.length)}
        label={`${currentIndex + 1}/${projects.length}`}
        className="mt-2"
      />
    </div>
  );
};

export default PortfolioCarousel;
