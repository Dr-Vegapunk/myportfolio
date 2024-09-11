import { cn } from '@nextui-org/react';
import React from 'react';


const Images = () => {
  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden shadow-xl">
      <div
        title="image1"
        className={cn(
          "w-full h-full bg-cover bg-center transition-all duration-300",
          "bg-[url('/ishan.jpg')]",
          "hover:bg-[url('/ishan1.jpeg')]",
          "before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-30 before:z-10",
          "hover:before:bg-opacity-0"
        )}
      >
        <div className="absolute bottom-0 left-0 p-2 sm:p-4 z-20 text-white">
          <h2 className="text-sm sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Ishan's Portfolio</h2>
          <p className="text-xs sm:text-sm md:text-base">Aspiring MERN Stack Developer</p>
        </div>
      </div>
    </div>
  );
};


export default Images;