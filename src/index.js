import React from 'react';
import ReactDOM from 'react-dom';
import HeroSection from './components/Hero.jsx';
import Pokenames from './components/ApiRender.jsx';



ReactDOM.render(
  <React.StrictMode>
    <Pokenames/>
    <HeroSection/>
  </React.StrictMode>,
  document.getElementById('root')
);

