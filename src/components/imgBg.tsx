import helloImg from "../assets/hello.png";
import neonName from "../assets/neonName.png";
import neonDev from "../assets/devBlue.png";

export const BgImg = () => {
  return (
    <div className="imgContainer">
      <figure className="helloText">
        <img src={helloImg} alt="white text saying hello" />
      </figure>
      <figure className="neonText">
        <img src={neonName} alt="Zoe keceli mesaros in pink neon letters" />
      </figure>
      <figure className="neonDev">
        <img src={neonDev} alt="web developer in blue neon letters" />
      </figure>
    </div>
  );
};
