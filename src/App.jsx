import React from "react";
import "./App.css";
import { NavBar, HeroSection, SpotlightSection, ScrollToTop } from "./components";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop /> 
    <NavBar />
    <HeroSection />
    <SpotlightSection />
  </BrowserRouter>
    
  );
}

export default App;

