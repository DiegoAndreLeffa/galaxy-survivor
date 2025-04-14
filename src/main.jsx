import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
