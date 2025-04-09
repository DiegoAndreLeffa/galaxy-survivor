import { GamepageStyled } from "./styled";
import { Character, characters } from "./characters";
import { useNavigate } from "react-router-dom";

export const GamePage = () => {
  const navigate = useNavigate();

  return (
    <GamepageStyled>
      <h1>Galaxy Survivor</h1>
      <p>
        Em um universo devastado pela guerra entre civilizações estelares, os
        últimos sobreviventes da colônia de Arkanis enfrentam uma ameaça
        desconhecida que consome galáxias inteiras. Você é um dos últimos
        pilotos da frota de defesa interestelar.
      </p>
      <p>
        Sua missão: enfrentar enxames infinitos de criaturas cósmicas e
        descobrir a origem do "Vácuo Vivo", uma entidade ancestral que devora
        sistemas solares inteiros.
      </p>
      <p>
        Sobreviva o máximo que puder. Evolua. Reúna recursos. E descubra que, às
        vezes, o verdadeiro inimigo está dentro da própria galáxia.
      </p>

      <h2>Personagens Jogáveis</h2>
      <div className="characters">
        {characters.map((char: Character, i: number) => (
          <div
            className="card"
            key={i}
            onClick={() => navigate(`/personagem/${char.id}`)}
          >
            <div className="inner">
              <div className="front">
                <span className="badge">{char.classType}</span>
                <div className="image-wrapper">
                  <img src={char.image} alt={char.name} />
                </div>
                <h3>{char.name}</h3>
                <p>{char.front}</p>
              </div>

              <div className="back">
                <h3>{char.name}</h3>
                <p>{char.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="Button" onClick={() => navigate("/")}>
        Voltar
      </button>
    </GamepageStyled>
  );
};
