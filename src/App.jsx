import React from "react";
import "./App.css";
import { NavBar, HeroSection, SpotlightSection } from "./components";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <NavBar />
      <HeroSection />
      <SpotlightSection />
      </BrowserRouter>
    
  );
}

export default App;
