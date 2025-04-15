import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #0e0f11;
  padding: 2rem 5%;
  color: #c5cdd8;
  font-family: "Rajdhani", sans-serif;

  .TopBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    border-bottom: 1px solid #333;
    padding-bottom: 1.5rem;
  }

  .Cont {
    display: flex;
    align-items: center;

    .Logo {
      img {
        width: 220px;
      }
    }

    .LanguageSelect {
      select {
        background-color: #1a1c20;
        color: #fff;
        border: none;
        padding: 0.4rem 0.6rem;
        font-size: 0.9rem;
        border-radius: 5px;
        font-family: inherit;
      }
    }
  }

  .LegalLinks {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    a {
      color: #a0a7b4;
      text-decoration: none;
      font-size: 0.85rem;

      &:hover {
        color: #fff;
      }
    }
  }

  .SocialIcons {
    display: flex;
    gap: 0.75rem;

    img {
      width: 22px;
      height: 22px;
    }
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

    &:hover {
      background-color: #00ffe0;
      color: black;
    }
  }

  .BottomBar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 1.5rem;
    font-size: 0.8rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .Rating {
    display: flex;
    align-items: center;
    gap: 1rem;

    .age {
      background-color: #ffd100;
      color: #000;
      font-weight: bold;
      font-size: 1.4rem;
      padding: 0.4rem 0.7rem;
      border-radius: 5px;
    }

    .info {
      font-size: 0.8rem;
      color: #ccc;
      line-height: 1.3;
    }
  }

  @media (max-width: 1024px) {
    .TopBar {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.5rem;
    }

    .Cont {
      flex-direction: column;
      gap: 1rem;

      .Logo {
        img {
          width: 180px;
        }
      }

      .LanguageSelect {
        select {
          font-size: 0.85rem;
          padding: 0.4rem 0.5rem;
        }
      }
    }

    .LegalLinks {
      justify-content: center;
      gap: 0.8rem;
      font-size: 0.8rem;
      flex-wrap: wrap;
    }

    .CTAButton {
      font-size: 0.85rem;
      padding: 0.5rem 1.2rem;
    }

    .SocialIcons {
      justify-content: center;
      img {
        width: 20px;
        height: 20px;
      }
    }

    .BottomBar {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      text-align: center;

      .Rating {
        flex-direction: column;
        align-items: center;

        .age {
          font-size: 1.2rem;
          padding: 0.3rem 0.6rem;
        }

        .info {
          font-size: 0.75rem;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .Cont .Logo img {
      width: 160px;
    }

    .CTAButton {
      font-size: 0.8rem;
      padding: 0.4rem 1rem;
    }

    .LegalLinks {
      font-size: 0.75rem;
    }

    .BottomBar {
      font-size: 0.75rem;
    }
  }
`;
