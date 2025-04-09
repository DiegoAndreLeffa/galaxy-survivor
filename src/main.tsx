import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./style/globalStyle.ts";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
