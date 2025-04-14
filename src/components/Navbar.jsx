import { HeaderContainer } from "../styles/Navbar.js";
import { useState } from "react";

import logo from "../assets/logo.png";

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

  return (
    <HeaderContainer>
      <div className="Logo">
        <img src={logo} alt="Galaxy Survivor Logo" />
      </div>
      <ul
        className="Nav"
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
          <div className="NavIndicator" style={{ left: `${active * 160}px` }} />
        )}
      </ul>
      <button className="PlayButton">JOGUE AGORA</button>
    </HeaderContainer>
  );
};
