export const NavBar = () => {
  const NavArray = ["About me", "Skills", "Projects", "Contact"];
  const NavList = NavArray.map((item, index) => <li key={index}>{item}</li>);
  return <ul>{NavList}</ul>;
};
