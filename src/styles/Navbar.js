import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #0e0f11;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  font-family: "Orbitron", sans-serif;
  position: absolute;
  width: 100%;
  height: 80px;
  z-index: 100;

  .Logo {
    display: flex;
    align-items: center;

    img {
      width: 220px;
    }
  }

  .Nav {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    list-style: none;

    li {
      width: 160px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
	  cursor: pointer;
    }

    .NavItem {
      color: #fff;
      text-decoration: none;
      font-size: 0.9rem;
      font-family: "Orbitron", sans-serif;
      transition: color 0.3s ease;
    }

    .NavItem:hover {
      color: #00ffe0;
    }

    .NavIndicator {
      position: absolute;
      bottom: 0;
      width: 160px;
      height: 2px;
      background: #00ffe0;
      transition: left 0.3s ease;
      z-index: 0;
      pointer-events: none;
    }
  }

  .PlayButton {
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

    &:hover {
      background-color: #00ffe0;
      color: black;
    }
  }
`;

export const PlayButton = styled.button``;
