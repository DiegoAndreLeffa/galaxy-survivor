import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #0e0f11;
  padding: 4rem 5%;
  gap: 3rem;
  flex-wrap: wrap;
  flex-direction: row;

  .VideoBox {
    position: relative;
    width: 550px;
    max-width: 100%;

    img {
      width: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  .PlayButton {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #0e0f11;
    color: white;
    font-size: 2rem;
    border: 3px solid white;
    border-radius: 15%;
    padding: 1rem 1.2rem;
    cursor: pointer;
    transition: 0.3s ease;
    width: 90px;
    z-index: 2;

    &:hover {
      background-color: #00ffe0;
      color: black;
      border-color: #00ffe0;
    }
  }

  .ContentBox {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .Subtitle {
    font-size: 0.9rem;
    color: #00ffe0;
    font-family: "Orbitron", sans-serif;
    letter-spacing: 3px;
    margin-bottom: 0.5rem;
  }

  .Title {
    font-size: 3rem;
    color: #c5cdd8;
    font-family: "Orbitron", sans-serif;
    margin-bottom: 1rem;
  }

  .Description {
    font-size: 1rem;
    color: #c5cdd8;
    font-family: "Rajdhani", sans-serif;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  .LearnMoreButton {
    background-color: transparent;
    border: 2px solid #00ffe0;
    color: #ffffff;
    padding: 0.75rem 2rem;
    border-radius: 10px;
    font-family: "Orbitron", sans-serif;
    font-weight: bold;
    font-size: 0.9rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #00ffe0;
      color: black;
    }
  }

  /* ========== TABLETS (≤ 1024px) ========== */
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;

    .ContentBox {
      align-items: center;
      text-align: center;
    }

    .Title {
      font-size: 2.5rem;
    }

    .Description {
      font-size: 0.95rem;
    }
  }

  /* ========== CELULARES (≤ 480px) ========== */
  @media (max-width: 480px) {
    padding: 3rem 1.5rem;

    .VideoBox {
      width: 100%;
    }

    .PlayButton {
      font-size: 1.5rem;
      width: 70px;
    }

    .Title {
      font-size: 2rem;
    }

    .Subtitle {
      font-size: 0.75rem;
    }

    .Description {
      font-size: 0.9rem;
    }

    .LearnMoreButton {
      font-size: 0.8rem;
      padding: 0.6rem 1.5rem;
    }
  }
`;
