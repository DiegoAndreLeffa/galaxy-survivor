import { createGlobalStyle } from "styled-components";
import starsBg from "../assets/bg.png";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

  body {
    margin: 0;
    font-family: 'Orbitron', sans-serif;
    color: #fff;
    background: url(${starsBg});
    background-size:	 auto;
    background-position: 0 0;
    animation: moveStars 120s linear infinite;
    overflow-x: hidden;
  }

  @keyframes moveStars {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 -1000px;
    }
  }
`;
