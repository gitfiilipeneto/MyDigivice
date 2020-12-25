import React from 'react';
import ReactDOM from 'react-dom';
import HeroSection from './components/Hero.jsx';
import Digimons from './components/ApiRender.jsx'



ReactDOM.render(
  <React.StrictMode>
    <Digimons/>
    <HeroSection/>
  </React.StrictMode>,
  document.getElementById('root')
);

