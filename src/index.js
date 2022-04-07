import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Router";

const rootElement = document.getElementById("root");

ReactDOM.render(
  
    <React.StrictMode>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </React.StrictMode>
  ,
  rootElement
);
