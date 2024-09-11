import { cn } from '@nextui-org/react';
import React from 'react';

const Images = () => {
  return (
    <div className="w-[60%] md:w-[60%] sm:w-[70%] h-96 md:h-96 sm:h-40 relative rounded-lg overflow-hidden shadow-xl ml-20">
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
        <div className="absolute bottom-0 left-0 p-4 z-20 text-white">
          <h2 className="text-2xl md:text-2xl sm:text-sm font-bold mb-2">Ishan's Portfolio</h2>
          <p className="text-sm md:text-sm sm:text-xs">Aspiring MERN Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Images;