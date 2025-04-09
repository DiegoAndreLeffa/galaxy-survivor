import { useNavigate } from "react-router-dom";
import { HomepageStayled } from "./styled";
import nave from "../../assets/nave.png";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomepageStayled>
      <div className="Container">
        <img className="PixelArt" src={nave} alt="Nave espacial" />
        <h1 className="Title">Galaxy Survivor</h1>
        <span className="Subtitle">
          Enfrente ondas infinitas de inimigos cósmicos nesse game inspirado em
          Vampire Survivors com visual pixelado!
        </span>
        <button className="Button" onClick={() => navigate("/game")}>
          Jogar Agora
        </button>
      </div>
    </HomepageStayled>
  );
};
