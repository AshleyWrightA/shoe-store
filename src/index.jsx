//React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Local Imports
import App from "./jsx/App";
import "./css/meyer-reset.css";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/shoe-store/">
    <App />
  </BrowserRouter>
);
