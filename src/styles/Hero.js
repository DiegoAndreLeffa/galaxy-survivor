import styled from "styled-components";

import bg from "../assets/bg.png";

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .Content {
    position: relative;
    z-index: 1;
    max-width: 860px;
    padding: 2rem;
  }

  .Tagline {
    font-family: "Orbitron", sans-serif;
    color: #00ffe0;
    font-size: 1rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  .Title {
    font-size: 4rem;
    font-weight: 800;
    letter-spacing: 3px;
    font-family: "Orbitron", sans-serif;
    margin-bottom: 1rem;
  }

  .Description {
    font-size: 1.1rem;
    line-height: 1.6;
    font-family: "Rajdhani", sans-serif;
    margin-bottom: 2rem;
  }

  .CTAButton {
    background-color: transparent;
    border: 2px solid #00ffe0;
    color: white;
    padding: 0.5rem 1.5rem;
    font-family: "Orbitron", sans-serif;
    font-weight: bold;
    font-size: 0.9rem;
    text-transform: uppercase;
    border-radius: 10px;
    cursor: pointer;
	width: 210px;
    height: 55px;

    &:hover {
      background-color: #00ffe0;
      color: black;
    }
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  filter: brightness(0.4);
  z-index: 0;

  animation: moveStars 120s linear infinite;
  
  @keyframes moveStars {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 -1000px;
    }
  }
`;

export const ExploreTag = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  color: #00ffe0;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 5px;
  font-size: 0.85rem;
  text-transform: uppercase;
  z-index: 2;

  p {
    background-color: black;
    padding: 10px 20px;
    border-radius: 20px 20px 0 0;
    border: 1px solid transparent;
  }
`;
