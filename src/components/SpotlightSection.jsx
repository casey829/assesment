// import React from 'react'
// import { Img } from 'react-image';

// function SpotlightSection() {

//   const SpotlightImages = [
//       {id:1, src:"/tailor.jpg", alt:"a tailor"},
//       {id:2, src:"/hatlady.jpg", alt:"a lady wearing a traditional hat"},
//       {id:3, src:"/player.jpg", alt:"a player sitting on a basketball"},
//       {id:4, src:"/view.jpg", alt:"a view of a temple"},
//       {id:5, src:"/traditionallady.jpg", alt:"a lady wearing a traditional attire"}
//   ]

    
//   return (
// <section className="flex absolute w-[1695px] h-[276px] top-[676px] ">
//       <div className="container mx-auto px-5">
//         <h2 className="text-2xl font-kanit font-light text-[#26272d] mb-6">
//           Recent spotlight
//         </h2>
        
//         <div className="flex space-x-5 overflow-x-auto pb-4">
//           {SpotlightImages.map((image) => (
//             <div 
//               key={image.id} 
//               className="min-w-[323px] h-[220px] rounded-lg overflow-hidden "
//             >
//               < Img 
//                 src={image.src} 
//                 alt={image.alt} 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default SpotlightSection;
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
    <section className="absolute top-[676px] left-[80px] w-[calc(100%-160px)] max-w-[1695px] h-[276px] mx-auto ">
      <div className=" mx-auto px-6 max-w-[1800px] ">
        <h2 className="text-2xl font-kanit font-light text-[#26272d] mb-8">
          Recent spotlight
        </h2>
        
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto scrollbar-hide">
            {SpotlightImages.map((image) => (
              <div 
                key={image.id} 
                className="flex-shrink-0 w-[200px] h-[136px] sm:w-[280px] sm:h-[190px] md:w-[323px] md:h-[220px]"
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
        </div>
      </div>
    </section>
  );
}

export default SpotlightSection;