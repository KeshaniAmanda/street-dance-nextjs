import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // 👈 add this

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>   {/* 👈 wrap App */}
    <App />
  </BrowserRouter>
);