import React from "react";
import ReactDOM from "react-dom";
import "./scss/App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n/config";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
