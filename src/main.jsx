import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ApiProvider from "./components/Api.jsx"; 
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ApiProvider>
      <App />
    </ApiProvider>
    </BrowserRouter>
  </StrictMode>
);
