import { useParams, useNavigate } from "react-router-dom";
import { characters } from "../GamePage/characters";
import { CharacterDetailsStyled } from "./styled";

export const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = characters.find((c) => c.id === id);

  if (!character) {
    return (
      <CharacterDetailsStyled>
        <p>Personagem não encontrado.</p>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </CharacterDetailsStyled>
    );
  }

  return (
    <CharacterDetailsStyled>
      <h1>{character.name}</h1>
      <p>
        <strong>Classe:</strong> {character.classType}
      </p>

      <div className="imgs">
        <img src={character.image} alt={character.name} />
        {character.shipImage && (
          <img src={character.shipImage} alt={character.ship || "Nave"} />
        )}
      </div>

      {character.lore && (
        <p>
          <strong>História:</strong> {character.lore}
        </p>
      )}
      {character.ship && (
        <p>
          <strong>Nave:</strong> {character.ship}
        </p>
      )}
      {character.special && (
        <p>
          <strong>Habilidade Inicial:</strong> {character.special}
        </p>
      )}
      {character.passive && (
        <p>
          <strong>Habilidade Passiva:</strong> {character.passive}
        </p>
      )}
      {character.style && (
        <p>
          <strong>Estilo de Jogo:</strong> {character.style}
        </p>
      )}
      {character.quote && (
        <p>
          <strong>Frase:</strong> <em>{character.quote}</em>
        </p>
      )}

      <div className="button">
        <button className="Button" onClick={() => navigate("/game")}>
          Voltar
        </button>
      </div>
    </CharacterDetailsStyled>
  );
};
