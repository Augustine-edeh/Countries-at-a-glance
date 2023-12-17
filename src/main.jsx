import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CountryDetailContextProvider } from "./store/country-detail-context";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountryDetailContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountryDetailContextProvider>
  </React.StrictMode>
);
