import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import NavBar from "./components/defaultNavBar";
import { BrowserRouter } from 'react-router-dom'
import Routes from "./routes/Router";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes/>
    </BrowserRouter>

  </React.StrictMode>,
  rootElement
);
