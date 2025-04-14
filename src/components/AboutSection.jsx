import { AboutContainer } from "../styles/AboutSection.js";

import thumbnail from "../assets/thumbnail.png";

export const AboutSection = () => {
  return (
    <AboutContainer>
      <div className="VideoBox">
        <img src={thumbnail} alt="Gameplay preview" />
        <button className="PlayButton">▶</button>
      </div>

      <div className="ContentBox">
        <h4 className="Subtitle">SOBRE</h4>
        <h2 className="Title">O JOGO</h2>
        <p className="Description">
          Star Survivor é um rogue-like de sobrevivência no espaço com mecânicas
          frenéticas, hordas infinitas de inimigos e dezenas de combinações de
          upgrades. Pilote naves lendárias, desbloqueie novos heróis e lute para
          salvar a galáxia em partidas rápidas e intensas.
        </p>
        <button className="LearnMoreButton">SAIBA MAIS</button>
      </div>
    </AboutContainer>
  );
};
