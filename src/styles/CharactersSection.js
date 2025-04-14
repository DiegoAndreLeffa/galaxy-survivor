import styled from "styled-components";

export const CharactersContainer = styled.section`
  background-color: #0e0f11;
  padding: 4rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 4rem;
  flex-wrap: wrap;

  .LeftContent {
    width: 600px;
  }

  .Tagline {
    color: #00ffe0;
    font-family: "Orbitron", sans-serif;
    letter-spacing: 4px;
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .Title {
    font-size: 3rem;
    font-family: "Orbitron", sans-serif;
    color: #c5cdd8;
    margin-bottom: 1rem;
  }

  .Description {
    font-family: "Rajdhani", sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #c5cdd8;
    margin-bottom: 2rem;
    max-width: 500px;
  }

  .Button {
    background-color: transparent;
    border: 2px solid #00ffe0;
    color: white;
    padding: 0.75rem 2rem;
    font-family: "Orbitron", sans-serif;
    font-weight: bold;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 0.9rem;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #00ffe0;
      color: black;
    }
  }

  .CharacterImage {
    flex: 1;
    max-width: 500px;
    height: auto;
    object-fit: contain;
  }
`;
