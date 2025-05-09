import React from 'react';
import { Img } from 'react-image';

function SpotlightSection() {
  const SpotlightImages = [
    { id: 1, src: "/tailor.jpg", alt: "a tailor" },
    { id: 2, src: "/hatlady.jpg", alt: "a lady wearing a traditional hat" },
    { id: 3, src: "/player.jpg", alt: "a player sitting on a basketball" },
    { id: 4, src: "/view.jpg", alt: "a view of a temple" },
    { id: 5, src: "/traditionallady.jpg", alt: "a lady wearing a traditional attire" }
  ];

  return (
    <section className="absolute top-[676px] left-[65px] w-[calc(100%-160px)] max-w-[1695px] h-[276px] mx-auto">
      <div className="mx-auto px-6 max-w-[1800px]">
        <h2 className="text-2xl font-kanit font-light text-[#26272d] mb-8">
          Recent spotlight
        </h2>
        
        <div className="relative group"> {/* Added group for hover states */}
          <div className="flex gap-5 overflow-x-auto pb-4 
              [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
              hover:cursor-grab active:cursor-grabbing">
            {SpotlightImages.map((image) => (
              <div 
                key={image.id} 
                className="flex-shrink-0 w-[200px] h-[136px] sm:w-[280px] sm:h-[190px] md:w-[323px] md:h-[220px]
                rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <Img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                  loader={<div className="bg-gray-100 w-full h-full animate-pulse" />}
                  unloader={<div className="bg-gray-100 w-full h-full flex items-center justify-center">Image unavailable</div>}
                />
              </div>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 flex items-center">
            <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 text-white bg-black/30 rounded-full p-1">
              ←
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 text-white bg-black/30 rounded-full p-1">
              →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpotlightSection;