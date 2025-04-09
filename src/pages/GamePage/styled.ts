import styled from "styled-components";

export const GamepageStyled = styled.main`
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Orbitron", sans-serif;

  h1 {
    font-size: 4rem;
    letter-spacing: 6px;
    margin-bottom: 1rem;
    color: #00ffe7;
    text-shadow: 0 0 12px #00ffe7;
  }

  .characters {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }

  .card {
    perspective: 1000px;
    width: 220px;
    height: 350px;
    cursor: pointer;
  }

  .inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s ease;
    transform-origin: center center;
  }

  .card:hover .inner {
    transform: rotateY(180deg);
    box-shadow: 0 0 12px #00ffe7;
    border-radius: 12px;
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 12px;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 12px #00ffe766;
    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;
    box-sizing: border-box;
  }

  .back {
    justify-content: center;
  }

  .front h3,
  .back h3 {
    color: #00ffe7;
    margin: 0.5rem 0;
    height: 44px;
  }

  .front p,
  .back p {
    font-size: 0.9rem;
    color: #ccc;
  }

  .back {
    transform: rotateY(180deg);
  }

  .badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #00ffe7;
    color: black;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 0.75rem;
    box-shadow: 0 0 6px #00ffe7aa;
  }

  .image-wrapper {
    width: 100%;
    height: 197.22px; /* altura do Rayzor */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .image-wrapper img {
    width: auto;
    height: 100%;
    object-fit: contain;
  }

  .Button {
    margin-top: 25px;
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
