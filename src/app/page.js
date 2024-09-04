import Images from '@/components/images/page'
import Navbars from '@/components/navbar/page'
import { Card, CardBody } from '@nextui-org/react'


import React from 'react'

const MyPortfolio = () => {
  return (
    <div className='bg-blue-100 relative'>
      <div>
      <Navbars/>
      </div>
      <div>
        <Images/>
      </div>
        <div className=''>
        <Card className='w-[50%] h-[50%] mx-8 mt-8 p-20 mb-8 shadow-2xl'  >
            <CardBody>
               <p className="text-xl font-bold relative z-20 mt-2 text-black">
                  Hello, I am <strong>Ishan Karki</strong> an aspiring MERN stack developer from kathmandu Nepal, I'm eagerly seeking internship opportunities to apply and expand my skills. 
                </p>
            </CardBody>
   
           </Card>
        </div>
        <div className='bg-gray-600 mt-12'>
          <div className='w-[30%] absolute right-11 mt-8'>
          <p className="text-xl font-bold relative z-20 mt-2 text-black">
                  Hello, I am <strong>Ishan Karki</strong> an aspiring MERN stack developer from kathmandu Nepal, I'm eagerly seeking internship opportunities to apply and expand my skills. 
                </p>
          </div>
        
               
            
   
           
        </div>
          
  
    </div>
    
    
    
    
  )
}

export default MyPortfolio