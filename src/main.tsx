import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const el = document.getElementById("root");

// @typescript-eslint/no-non-null-assertion のwarnを避ける為if文を追加
if (el) {
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
