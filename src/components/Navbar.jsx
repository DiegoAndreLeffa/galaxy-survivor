import { HeaderContainer } from "../styles/Navbar.js";
import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";

export const NavBar = () => {
  const navItems = [
    { label: "Sobre o Jogo", href: "#" },
    { label: "Personagens", href: "#" },
    { label: "Mapas", href: "#" },
    { label: "Universo", href: "#" },
    { label: "Novidades", href: "#" },
    { label: "Comunidade", href: "#" },
  ];

  const [active, setActive] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <div className="LeftSection">
        <div className="Logo">
          <img src={logo} alt="Galaxy Survivor Logo" />
        </div>
      </div>

      <div className="CenterSection mobile-only">
        <button className="PlayButton">JOGUE AGORA</button>
      </div>

      <div className="RightSection">
        <div
          className="MobileMenuIcon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars size={24} />
        </div>

        <ul
          className={`Nav ${isMobileMenuOpen ? "Open" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setActive(null);
          }}
        >
          {navItems.map((item, index) => (
            <li key={index} onMouseEnter={() => setActive(index)}>
              <a className="NavItem" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          {isHovered && active !== null && (
            <div
              className="NavIndicator"
              style={{ left: `${active * 160}px` }}
            />
          )}
        </ul>
      </div>

      <div className="desktop-only">
        <button className="PlayButton">JOGUE AGORA</button>
      </div>
    </HeaderContainer>
  );
};
