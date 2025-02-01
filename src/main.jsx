import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ApiProvider from "./components/Api.jsx"; // Import the provider component
import { BrowserRouter } from "react-router-dom";
import PinterestCard from "./pages/Pintrestcard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ApiProvider>
      <App />
    </ApiProvider>
    </BrowserRouter>
  </StrictMode>
);
