import helloImg from "../../assets/homepage/hello.png";
import neonName from "../../assets/homepage/neonName.png";
import profileImg from "../../assets/homepage/profile.png";
import neonDev from "../../assets/homepage/devBlue.png";
import { SocialMediaLinks } from "./socialLinks";

export const BgImg = () => {
  return (
    <div className="imgContainer">
      <div className="wrapper">
        <figure className="helloText">
          <img src={helloImg} alt="white text saying hello" />
        </figure>
        <figure className="neonText">
          <img src={neonName} alt="Zoe keceli mesaros in pink neon letters" />
        </figure>
        <figure className="profileImg">
          <img
            className="profileImg"
            src={profileImg}
            alt="Web developer Zoë"
          />
        </figure>
        <figure className="neonDev">
          <img src={neonDev} alt="web developer in blue neon letters" />
        </figure>
        <SocialMediaLinks />
      </div>
    </div>
  );
};
