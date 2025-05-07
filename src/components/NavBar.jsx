import { Button } from "bootstrap";
import React from "react";
import { Img } from "react-image";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="bg-white py-4 px-5 flex justify-between items-center">
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <Img src="/src/assets/logo.svg" alt="PHOTOALBUM Logo" className="h-4 " />
      </Link>
    </div>
    
    <nav className="flex items-center space-x-10">
      <Link to="/" className="text-[#26272d] font-kanit font-light text-base">Home</Link>
      <Link to="/community" className="text-[#26272d] font-kanit font-light text-base">Community</Link>
      <Link to="/stories" className="text-[#26272d] font-kanit font-light text-base">Stories</Link>
      <Link to="/contact" className="text-[#26272d] font-kanit font-light text-base">Contact</Link>
    </nav>
    <div className="flex items-center space-x-3">
        
      </div>
    
   
  </header>
  );
}

export default NavBar;
