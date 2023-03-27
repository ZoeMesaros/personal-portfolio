import "./projects.scss";
import { projectData } from "./projects-data";
import { getImageUrl } from "./utils";

export const Projects = () => {
  const projectItems = projectData.map((project) => {
    return (
      <div className="projectCard">
        <a key={project.id} href={project.url} target="_blank">
          <img src={getImageUrl(project.imgSrc)} />
          <p className="desc">{project.desc}</p>
        </a>
      </div>
    );
  });
  return (
    <section id="projects">
      <h1>My projects</h1>
      <div className="wrapper">{projectItems}</div>
    </section>
  );
};
