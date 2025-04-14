import { Hero } from "../components/Hero";
import { NavBar } from "../components/Navbar";
import { LastNews } from "../components/LatestNews";
import { AboutSection } from "../components/AboutSection";
import { CharactersSection } from "../components/CharactersSection";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LastNews />
      <AboutSection />
      <CharactersSection />
      <Footer />
    </>
  );
};
