import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/tailwind.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "react-medium-image-zoom/dist/styles.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
