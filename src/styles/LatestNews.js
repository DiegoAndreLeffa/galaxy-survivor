import styled from "styled-components";

export const NewsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 4rem 5%;
  background-color: #0e0f11;
  gap: 15rem;
  flex-wrap: wrap;

  .SideTitle {
    flex: 1;
    max-width: 350px;

    h2 {
      font-size: 4.8rem;
      font-family: "Orbitron", sans-serif;
      color: #c5cdd8;
      margin-bottom: 2rem;
      border-top: 2px solid #444;
      padding-top: 1rem;
    }
  }

  .ViewAllLink {
    font-family: "Rajdhani", sans-serif;
    font-size: 1rem;
    color: #00ffe0;
    text-decoration: none;
    border-bottom: 1px solid #444;
    padding-bottom: 0.3rem;
    display: inline-block;

    &:hover {
      color: #00b2a9;
    }
  }

  .NewsList {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex: 3;
    flex-wrap: wrap;
    cursor: pointer;
  }

  .NewsCard {
    background-color: #111217;
    padding: 0;
    max-width: 300px;
    overflow: hidden;
    border-radius: 20px 0 20px 0;
    transition: transform 0.3s ease;
    flex: 1 1 280px;
  }

  .NewsImage {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-bottom: 2px solid #00ffe0;
    transition: transform 0.4s ease;
    border-radius: 20px 0 0 0;
  }

  .NewsCard:hover .NewsImage {
    transform: scale(1.1);
  }

  .NewsLabel {
    display: inline-block;
    background-color: transparent;
    border: 2px solid #00ffe0;
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    font-weight: bold;
    margin: 0.5rem 0;
    color: #ffffff;
    font-family: "Orbitron", sans-serif;
  }

  .NewsText {
    font-size: 1rem;
    font-weight: bold;
    font-family: "Rajdhani", sans-serif;
    color: #ffffff;
  }

  .NewsDate {
    font-size: 0.85rem;
    color: #aaa;
    font-family: "Rajdhani", sans-serif;
    margin-top: 0.5rem;
  }

  /* ========== TABLETS (<= 1024px) ========== */
  @media (max-width: 1024px) {
    gap: 5rem;
    .SideTitle h2 {
      font-size: 3rem;
    }

    .NewsList {
      justify-content: center;
    }

    .NewsCard {
      max-width: 100%;
      flex: 1 1 45%;
    }
  }

  /* ========== CELULARES (<= 480px) ========== */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 3rem;
    padding: 3rem 1.5rem;

    .SideTitle {
      max-width: 100%;
      text-align: center;

      h2 {
        font-size: 2.5rem;
      }
    }

    .ViewAllLink {
      text-align: center;
      display: block;
      margin-top: 1rem;
      font-size: 0.95rem;
    }

    .NewsList {
      flex-direction: column;
      align-items: center;
    }

    .NewsCard {
      max-width: 100%;
    }

    .NewsText {
      font-size: 0.95rem;
    }

    .NewsLabel {
      font-size: 0.7rem;
    }

    .NewsDate {
      font-size: 0.8rem;
    }
  }
`;
