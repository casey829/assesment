import React from "react";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <section className=" absolute w-[544px] h-[417px] top-[128px] left-[525px] gap-[32px]">
      <div className="font-kanit font-light text-[32px] leading-[40px] tracking-[-0.02em] text-center">
        <h1 className="text-[32px] font-kanit text-[#747579]">
          Welcome, Shutterstar ⭐️
        </h1>
        <p className="text-[32px] font-kanit font-light text-[#26272d]">
          Quick tips before you begin
        </p>
      </div>
      <div className="flex w-[544px] mt-[32px]">
        <h1 className="font-kanit font-light text-[#747579] text-[18px] mb-8 tracking-normal text-center">
          SPOTLIGHT is one of our community activities where we feature talented
          African photographers like you, sharing their photography story with
          the world.
        </h1>
      </div>
      <p className="font-kanit font-light text-[18px] mb-4 tracking-normal text-center">
        Please pay attention to the following:
      </p>
      <div className="max-w-lg mx-auto text-center mb-10">
        <p className="font-kanit font-light text-[18px] leading-[26px] tracking-normal text-[#747579] mb-[10px]">
          <span className="text-[#26272D]">1. Your Story:</span>The quality of
          your answers to the questions.
        </p>
        <p className="font-kanit font-light text-[18px] leading-[26px] tracking-normal text-[#747579] mb-[10px]">
          <span className="text-[#26272D]">2. Versatility:</span> Photo
          submission variants showing your versatility.
        </p>
        <p className="font-kanit font-light text-[18px] leading-[26px] tracking-normal text-[#747579]">
          <span className="text-[#26272D]"> 3. Creativity & technique:</span>{" "}
          Composition, lighting, editing, etc
        </p>
      </div>
      <div className="flex justify-center">
        <Button className="text-[18px] w-[164px] h-[51px] gap-[10px] rounded-[100px] border-[1.5px] border-[#E0E0E0] py-[12px] px-[40px] bg-[#FAFAFA] text-[#26272D]">
          Get started
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
