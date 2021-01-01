import React from "react";
import ReactDOM from "react-dom";

import {App} from "./App";
import HeroSection from "./components/Hero";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App/>
    <HeroSection/>
  </React.StrictMode>,
  rootElement
);
