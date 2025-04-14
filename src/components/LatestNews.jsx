import { NewsContainer } from "../styles/LatestNews.js";

import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";

export const LastNews = () => {
  const news = [
    {
      title: "Laboratório dos Desenvolvedores...",
      date: "9 de abr. de 2025",
      image: `${news1}`,
    },
    {
      title: "Por que o seu feedback é importante...",
      date: "8 de abr. de 2025",
      image: `${news2}`,
    },
    {
      title: "Problemas de login resolvidos",
      date: "3 de abr. de 2025",
      image: `${news3}`,
    },
  ];

  return (
    <NewsContainer>
      <div className="SideTitle">
        <h2>ÚLTIMAS NOTÍCIAS</h2>
        <a className="ViewAllLink" href="#">
          Ver Todas As Notícias →
        </a>
      </div>

      <ul className="NewsList">
        {news.map((item, index) => (
          <li className="NewsCard" key={index}>
            <img className="NewsImage" src={item.image} alt={item.title} />
            <span className="NewsLabel">ATUALIZAÇÃO</span>
            <h4 className="NewsText">{item.title}</h4>
            <p className="NewsDate">📅 {item.date}</p>
          </li>
        ))}
      </ul>
    </NewsContainer>
  );
};
