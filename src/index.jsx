//React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

//Local Imports
import App from "./jsx/App";
import { FetchedDataProvider } from "./jsx/context/FetchedDataContext";
import "./css/meyer-reset.css";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <FetchedDataProvider>
      <App />
    </FetchedDataProvider>
  </HashRouter>
);
