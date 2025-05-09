import React from "react";
import "./App.css";
import { NavBar, HeroSection } from "./components";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <NavBar />
      <HeroSection />
      </BrowserRouter>
    
  );
}

export default App;
