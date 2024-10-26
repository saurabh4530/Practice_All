//@ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorBoundaries from "./components/ErrorBoundaries/ErrorBoundaries.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ErrorBoundaries>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundaries>

  // </React.StrictMode>,
);
