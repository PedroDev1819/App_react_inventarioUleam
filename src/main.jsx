import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CEquipmentProviderWrapper } from "./contexts/computerEquipment.context.jsx";

createRoot(document.getElementById("root")).render(
  <CEquipmentProviderWrapper>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </CEquipmentProviderWrapper>
);
