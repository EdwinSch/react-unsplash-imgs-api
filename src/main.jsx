import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Global context provider
import { AppProvider } from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
