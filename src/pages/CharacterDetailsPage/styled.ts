import styled from "styled-components";

export const CharacterDetailsStyled = styled.main`
  font-family: "Orbitron", sans-serif;
  color: white;
  max-width: 1000px;
  margin: 0 auto;

  .back-button {
    background-color: #00ffe7;
    color: #000;
    border: none;
    padding: 0.6rem 1.2rem;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 0 10px #00ffe7aa;
    transition: 0.3s;
    margin-bottom: 2rem;

    &:hover {
      background-color: #00ccbb;
      box-shadow: 0 0 15px #00ffe7;
    }
  }

  h1 {
    font-size: 2.5rem;
    color: #00ffe7;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 12px #00ffe7;
  }

  h2 {
    color: #00ffe7;
    margin-top: 2rem;
  }

  p {
    font-size: 1rem;
    color: #ccc;
    margin-bottom: 1rem;
  }

  .image-section {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .imgs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 2rem 0;

    img {
      max-width: 300px;
      width: 100%;
      height: auto;
      border-radius: 12px;
      object-fit: contain;
    }
  }

  em,
  strong {
    color: #00ffe7;
    display: block;
    margin-top: 1rem;
    font-style: italic;
  }

  .button {
    display: flex;
    justify-content: center;
  }

  .Button {
    background-color: #00ffe7;
    color: #000;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 0 10px #00ffe7;
    transition: 0.3s;

    &:hover {
      background-color: #00ccbb;
      box-shadow: 0 0 20px #00ffe7;
    }
  }
`;
