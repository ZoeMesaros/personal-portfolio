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
    iconName: "fa-brands fa-github fa-stack-1x fa-inverse",
    Link: "https://github.com/ZoeMesaros",
  },
];

export const GenerateLinks = () => (
  <>
    {SocialLinks.map((links, index) => (
      <div className="linkIcon" key={index}>
        <a href={links.Link} target="_blank" rel="noopener noreferrer">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className={links.iconName}></i>
          </span>
        </a>
      </div>
    ))}
  </>
);
