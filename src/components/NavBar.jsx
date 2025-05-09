import { Button } from "./ui/button";
import React from "react";
import { Img } from "react-image";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white py-4 w-full h-[56px]">
      <div className="relative mx-auto h-full max-w-[1512px] px-5">
        <div className="flex absolute items-center w-[145px] h-[15.43px] top-1/2 -translate-y-1/2 left-5 sm:left-[40px] lg:left-[60px] xl:left-[80.8px]">
          <Link to="/" className="flex items-center">
            <Img src="/src/assets/logo.svg" alt="PHOTOALBUM Logo" />
          </Link>
        </div>
        <nav className="flex relative text-[16px] text-[#26272D] items-center top-1/2 -translate-y-1/2 left-[180px] sm:left-[220px] md:left-[280px] lg:left-[329px] space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 w-[351px] h-[16px]">
          <Link to="/" className="text-[#26272d] font-kanit font-light text-base whitespace-nowrap">Home</Link>
          <Link to="#" className="text-[#26272d] font-kanit font-light text-base whitespace-nowrap">Community</Link>
          <Link to="#" className="text-[#26272d] font-kanit font-light text-base whitespace-nowrap">Stories</Link>
          <Link to="#" className="text-[#26272d] font-kanit font-light text-base whitespace-nowrap">Contact</Link>
        </nav>
        
        <div className="flex absolute items-center space-x-3 top-1/2 -translate-y-1/2 right-5 sm:right-[40px] lg:right-[60px] xl:right-[80.8px]">
          <Button 
            className="text-[#FFFFFF] kanit-regular bg-[#26272D] w-[107px] h-[48px] rounded-[100px] gap-[8px] px-[28px] py-[16px] flex items-center justify-center"
            onClick={() => alert('Join us clicked')}
          >
            Join us
          </Button>
          <Button 
            className="text-[#26272D] bg-[#F6F6F6] rounded-[100px] border border-[#A5A5A5] h-[48px] w-[130px] px-[20px] py-[16px] flex items-center justify-center"
            onClick={() => alert('Get featured clicked')}
          >
            Get featured
          </Button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;