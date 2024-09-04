import { cn } from '@nextui-org/react'
import React from 'react'

const Images = () => {
  return (
    
        <div className="max-w-xs w-[30%]  stickey right-12 mt-4">
          <div>
          <div title='image1'
        	 className={cn(
               "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url('/ishan.jpg')] bg-cover",
          
                // Preload hover image by setting it in a pseudo-element
                "before:bg-[url('/ishan1.jpeg')] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                "hover:bg-[url('/ishan1.jpeg')]",
                "hover:after:content-[url('/ishan1.jpg')] hover:after:absolute hover:after:inset-0 hover:after:bg-white hover:after:opacity-0",
                "transition-all duration-300"
                       )}
        
          >
              {/* <div className="text relative z-50">
                 <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                       Ishan's Portfolio
                  </h1>
                  <p className="font-normal text-base text-gray-50 relative my-4">
                      Hello, As an aspiring MERN stack developer, I'm eagerly seeking internship opportunities to apply and expand my skills. 
                  </p>
        </div> */}
        
      </div>
      
    
    </div>
    
          </div>
    
  )
}

export default Images