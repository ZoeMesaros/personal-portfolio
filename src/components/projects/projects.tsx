import "./projects.scss";
import { projectData } from "./projects-data";
import { getImageUrl } from "./utils";

export const Projects = () => {
  const projectItems = projectData.map((project) => {
    return (
      <a key={project.id} href={project.url} target="_blank">
        <img src={getImageUrl(project.imgSrc)} />
      </a>
    );
  });
  return <section id="projects">{projectItems}</section>;
};
