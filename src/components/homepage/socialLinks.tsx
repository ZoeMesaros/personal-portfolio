const SocialLinks = [
  {
    Id: 0,
    Name: "CV",
    iconName: "fa-solid fa-file-arrow-down fa-stack-1x fa-inverse",
    Link: "https://docs.google.com/document/d/1NjCYVMQfduoGCQ_GD-19v7oJkVxnZqK18x-jojlRQjc/export?format=pdf",
  },
  {
    Id: 1,
    Name: "LinkedIn",
    iconName: "fa-brands fa-linkedin fa-stack-1x fa-inverse",
    Link: "https://www.linkedin.com/in/zoe-km/",
  },
  {
    Id: 2,
    Name: "GitHub",
    iconName: "fa-brands fa-github fa-stack-1x fa-inverse",
    Link: "https://github.com/ZoeMesaros",
  },
];

const GenerateLinks = () => (
  <>
    {SocialLinks.map((links, Id) => (
      <a
        className="bigLinks"
        key={Id}
        href={links.Link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className={links.iconName}></i>
        </span>
      </a>
    ))}
  </>
);

const GenerateLinksSmall = () => {
  return (
    <a className="smallLinks" href={SocialLinks[0].Link}>
      <span className="fa-stack">
        <i className="fa fa-circle fa-stack-2x"></i>
        <i className={SocialLinks[0].iconName}></i>
      </span>
    </a>
  );
};

export const SocialMediaLinks = () => {
  return (
    <div className="linkIcon">
      <GenerateLinks />
      <GenerateLinksSmall />
    </div>
  );
};
