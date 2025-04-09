import { Route, Routes } from "react-router-dom";

import { GamePage } from "../pages/GamePage/GamePage";
import { HomePage } from "../pages/HomePage/HomePage";
import { CharacterDetails } from "../pages/CharacterDetailsPage/CharacterDetails";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/personagem/:id" element={<CharacterDetails />} />
    </Routes>
  );
};
