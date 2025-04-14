import { useEffect, useState } from "react";
import { CharactersContainer } from "../styles/CharactersSection.js";

import capitan from "../assets/characters/capitao.png";
import nova from "../assets/characters/nova.png";
import argo from "../assets/characters/argo.png";
import nyra from "../assets/characters/nyra.png";
import zed from "../assets/characters/turu.png";
import rex from "../assets/characters/rex.png";

const characters = [capitan, nova, argo, zed, nyra, rex];

export const CharactersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % characters.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CharactersContainer>
      <div className="LeftContent">
        <h4 className="Tagline">MAESTRIA</h4>
        <h2 className="Title">SEUS PILOTOS</h2>
        <p className="Description">
          Os pilotos lendários possuem habilidades únicas, naves customizadas e
          estilos de combate variados. Domine cada um deles e encontre a
          combinação perfeita para enfrentar qualquer ameaça no espaço profundo.
        </p>
        <button className="Button">PARA O HANGAR</button>
      </div>

      <img
        className="CharacterImage"
        src={characters[currentIndex]}
        alt="Piloto em destaque"
      />
    </CharactersContainer>
  );
};
