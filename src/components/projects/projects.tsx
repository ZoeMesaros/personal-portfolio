import "./projects.scss";
import { projectData } from "./projects-data";
import { getImageUrl } from "./utils";

export const Projects = () => {
  const projectItems = projectData.map((project) => {
    return (
      <div key={project.id} className="projectCard">
        <a href={project.url} target="_blank">
          <img src={getImageUrl(project.imgSrc)} />
        </a>
        <p className="desc">{project.desc}</p>
      </div>
    );
  });
  return (
    <section id="projects">
      <h1 className="projectsHeader">My projects</h1>
      <div className="wrapper">{projectItems}</div>
    </section>
  );
};
