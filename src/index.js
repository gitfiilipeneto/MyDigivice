import React from "react";
import ReactDOM from "react-dom";

import {App} from "./App";
import HeroSection from "./components/Hero";
import NavBar from "./components/defaultNavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <NavBar/> */}
    <App/>
    {/* <HeroSection/> */}
  </React.StrictMode>,
  rootElement
);
