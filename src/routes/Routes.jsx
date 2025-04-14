import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/Homepage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
