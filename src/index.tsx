import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./css/meyer-reset.css";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </React.StrictMode>
);

console.log("Works");
