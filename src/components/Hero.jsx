import { HeroSection, Background, ExploreTag } from "../styles/Hero.js";

export const Hero = () => {
  return (
    <HeroSection>
      <Background />
      <div className="Content">
        <h4 className="Tagline">LIBERTE SEU CAÇADOR INTERIOR</h4>
        <h1 className="Title">GALAXY SURVIVOR</h1>
        <p className="Description">
          Galaxy Survivor estará disponível em breve! Pilote sua nave lendária,
          enfrente hordas alienígenas e salve a galáxia!
        </p>
        <button className="CTAButton">JOGUE AGORA</button>
      </div>
      <ExploreTag>
        <p>Explorar</p>
      </ExploreTag>
    </HeroSection>
  );
};
