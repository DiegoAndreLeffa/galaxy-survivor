import styled from "styled-components";

export const HomepageStayled = styled.main`
  .Container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .Title {
    font-size: 4rem;
    letter-spacing: 6px;
    margin-bottom: 1rem;
    color: #00ffe7;
    text-shadow: 0 0 12px #00ffe7;
  }

  .Subtitle {
    font-size: 1.2rem;
    max-width: 600px;
    margin-bottom: 2rem;
    color: #cccccc;
  }

  .PixelArt {
    width: 250px;
    height: auto;
    margin-bottom: 2rem;
    image-rendering: pixelated;
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
