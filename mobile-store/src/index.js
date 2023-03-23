import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContext from "./contextAPI/context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <AppContext>
    <App />
  </AppContext>
);
