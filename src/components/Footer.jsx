import { FooterContainer } from "../styles/Footer.js";

import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="TopBar">
        <div className="Cont">
          <div className="Logo">
            <img src={logo} alt="Galaxy Survivor Logo" />
          </div>

          <div className="LanguageSelect">
            <select>
              <option>Português (Brasil)</option>
              <option>English</option>
              <option>Español</option>
            </select>
          </div>
        </div>

        <div className="LegalLinks">
          <a href="#">Política de Privacidade</a>
          <a href="#">EULA</a>
          <a href="#">Suporte</a>
          <a href="#">Carreiras</a>
          <a href="#">Cookies</a>
        </div>

        <div className="SocialIcons">
          <a href="#">{/* <img src="/icons/x.svg" alt="X" /> */}</a>
          <a href="#">
            {/* <img src="/icons/instagram.svg" alt="Instagram" /> */}
          </a>
          <a href="#">
            {/* <img src="/icons/facebook.svg" alt="Facebook" /> */}
          </a>
          <a href="#">{/* <img src="/icons/youtube.svg" alt="YouTube" /> */}</a>
          <a href="#">{/* <img src="/icons/discord.svg" alt="Discord" /> */}</a>
        </div>

        <button className="CTAButton">JOGUE AGORA</button>
      </div>

      <div className="BottomBar">
        <div className="Copyright">
          © 2019 - 2025 Star Survivor. Todos os direitos reservados.
        </div>

        <div className="Rating">
          <div className="age">12</div>
          <div className="info">
            Violência
            <br />
            Interação de usuários
            <br />
            Compras on-line (inclui itens aleatórios)
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
