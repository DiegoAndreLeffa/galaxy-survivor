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

  .LeftSection,
  .CenterSection,
  .RightSection {
    display: flex;
    align-items: center;
	height: 100%;
  }

  .Logo img {
    width: 220px;
  }

  .PlayButton {
    background-color: transparent;
    border: 2px solid #00ffe0;
    color: white;
    padding: 0.5rem 1.2rem;
    font-family: "Orbitron", sans-serif;
    font-weight: bold;
    font-size: 0.85rem;
    text-transform: uppercase;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #00ffe0;
      color: black;
    }
  }

  .CenterSection {
    display: none;
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

  .MobileMenuIcon {
    display: none;
    color: white;
    cursor: pointer;
    z-index: 101;
    margin-left: 1rem;
  }

  @media (max-width: 1024px) {
    .Logo img {
      width: 180px;
    }
  }

  @media (max-width: 1024px) {
    justify-content: space-between;

    .CenterSection {
      display: flex;
      flex: 1;
      justify-content: center;
    }

    .Nav {
      display: none;
    }

    .MobileMenuIcon {
      display: block;
    }

    .Nav.Open {
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      background: #0e0f11;
      flex-direction: column;
      display: flex;
      padding: 1rem 0;
      gap: 10px;
      z-index: 99;
      height: auto;

      li {
        width: 100%;
        justify-content: center;
        padding: 0.75rem 0;
      }

      .NavItem {
        font-size: 1rem;
      }

      .NavIndicator {
        display: none;
      }
    }

    .RightSection {
      flex: 1;
      justify-content: flex-end;
    }

    .LeftSection {
      flex: 1;
    }
  }

  @media (max-width: 420px) {
    .Logo img {
      width: 140px;
    }

    .PlayButton {
      font-size: 0.75rem;
      padding: 0.3rem 0.8rem;
    }

    .MobileMenuIcon svg {
      width: 20px;
      height: 20px;
    }
  }

  .mobile-only {
    display: none;
  }

  .desktop-only {
    display: flex;
  }

  @media (max-width: 1024px) {
    .mobile-only {
      display: flex;
      justify-content: center;
      flex: 1;
    }

    .desktop-only {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    .RightSection {
      flex: 1;
      flex-wrap: wrap;
      gap: 1rem;
      max-width: 100%;
    }

    .MobileMenuIcon {
      margin-left: 0;
    }

    .PlayButton.desktop-only {
      font-size: 0.8rem;
      padding: 0.4rem 1rem;
    }
  }
`;
