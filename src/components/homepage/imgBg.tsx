import zoeName from "../../assets/homepage/name-site.png";
import devName from "../../assets/homepage/dev-site.png";
import profileImg from "../../assets/homepage/zoe-profile.png";
import { SocialMediaLinks } from "./socialLinks";

export const BgImg = () => {
  return (
    <div className="imgContainer">
      <div className="wrapper">
        <figure className="nameText">
          <img src={zoeName} alt="Zoe keceli mesaros in gold letters" />
        </figure>
        <figure className="profileImg">
          <img
            className="profileImg"
            src={profileImg}
            alt="Web developer Zoë"
          />
        </figure>
        <figure className="devName">
          <img src={devName} alt="web developer in gold letters" />
        </figure>
        <SocialMediaLinks />
      </div>
    </div>
  );
};
