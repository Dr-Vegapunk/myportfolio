import React from 'react';
import Images from '@/components/images/page';
import Navbars from '@/components/navbar/page';
import { Button, Card, CardBody, Image, Progress } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import ContactForm from '@/components/contactForm/page';
import ViewPortfolio from '@/components/viewPortfolio/page';

const MyPortfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to via-indigo-400 ">
      <Navbars />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 shadow-2xl rounded-lg">
          <div className="md:w-1/2 mt-8 ml-4 ">
            <Card className="shadow-2xl " >
              <CardBody className="p-10 bg-gradient-to-r from-indigo-500 to-blue-200">
                <h1 className="text-2xl font-bold mb-4 animate-bounce">Ishan Karki</h1>
                <p className="text-lg">
                  Hello, I am an aspiring MERN stack developer from Kathmandu, Nepal. I'm eagerly seeking internship opportunities to apply and expand my skills.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="md:w-1/2 ml-20 mb-6">
            <Images /> 
          </div>
        </div>
        <div className='flex flex-col gap-10 justify-center'>
  <div className='bg-gradient-to-r from-indigo-500 to-blue-200 p-5 rounded-3xl shadow-2xl mt-8 flex flex-col items-center'>
    <Card className='w-[50%] p-6 bg-gradient-to-r from-blue-200 to bg-indigo-400'>
      <CardBody>
      <div className='flex flex-col items-center mb-4'><h2 className='text-2xl font-bold mb-2 flex items-center'>About me <Icon icon="icon-park-solid:avatar" className='w-6 h-6 mx-2' /></h2></div>
    <div><p className='text-lg text-gray-900'>Hello everyone, I am an aspiring MERN stack developer with a passion for creating innovative solutions and continuously learning new technologies. I am eager to apply my skills and expand my knowledge in the field of web development.</p></div>
    <Button color="primary" className='mt-6 w-[30%] mx-auto '>View Portfolio</Button>
    
  
      </CardBody>
    </Card>
    </div>
    <div className='bg-gradient-to-r from-indigo-500 to-blue-200 p-5 rounded-3xl shadow-2xl mt-8 flex flex-col items-center'>
    <Card className='w-[50%] p-6 bg-gradient-to-r from-blue-200 to bg-indigo-400'>
      <CardBody>
        <div className='flex flex-col items-center mb-4'><h2 className='text-2xl font-bold mb-2 flex items-center'>Education <Icon icon="zondicons:education" className='w-6 h-6 mx-2'/></h2></div>
        <div><p className='text-lg text-gray-900'>Bachelor of technology in computing system engineering</p></div>
        <div><p className='text-lg text-gray-900'>University of Sunderland in ISMT, Nepal</p></div>
      </CardBody>
    </Card>
  </div>
</div>
        <div className='flex flex-col shadow-2xl items-center'>
          <div className='shadow-xl w-[50%] flex flex-col rounded-lg mb-6 p-8 mt-8 bg-gradient-to-r from-indigo-500 to-blue-400 items-center'>
            <p className='text-3xl font-bold text-center mt-10 flex items-center mb-4 '>Skills <Icon icon="carbon:skill-level-basic" className='w-6 h-6 mx-2' /></p>
            <div className='flex flex-row justify-center gap-10 '>
              <div>
                <p className='text-lg text-center mt-5 flex items-center'>HTML <Icon icon="logos:html-5" className='w-6 h-6 mx-3 animate-bounce' /></p>
                <Progress value={80} className='mt-5 w-48 progress-bar' />
              </div>
              <div>
                <p className='text-lg text-center mt-5 flex items-center'>CSS <Icon icon="logos:css-3" className='w-6 h-6 mx-3 animate-bounce' /></p>
                <Progress value={70} className='mt-5 w-48 progress-bar' />
              </div>
            </div>
            <div className='flex flex-row justify-center gap-10'>
              <div>
                <p className='text-lg text-center mt-5 flex items-center'>JavaScript <Icon icon="logos:javascript" className='w-6 h-6 mx-3 animate-bounce rounded' /></p>
                <Progress value={60} className='mt-5 w-48 progress-bar' />
              </div>
              <div>
                <p className='text-lg text-center mt-5 flex items-center'>React <Icon icon="vscode-icons:file-type-reactjs" className='w-6 h-6 mx-3 animate-spin' /></p>
                <Progress value={50} className='mt-5 w-48 progress-bar' />
              </div>
            </div>
            <div className='flex flex-row justify-center gap-10'>
              <div>
                <p className='text-lg text-center mt-5 flex items-center'>Node.js <Icon icon="logos:nodejs-icon-alt" className='w-6 h-6 mx-3 animate-spin' /></p>
                <Progress value={40} className='mt-5 w-48 progress-bar' />
              </div>
              <div>
                <p className='text-lg text-center mt-5 flex items-center'>MongoDB <Icon icon="skill-icons:mongodb" className='w-6 h-6 mx-3 animate-bounce'/></p>
                <Progress value={30} className='mt-5 w-48 progress-bar ' />
              </div>
            </div>
          </div>
          </div>
          <div className='flex flex-col shadow-2xl items-center'>
          <div className='shadow-xl w-[100%] flex flex-col rounded-lg mb-6 p-8 mt-8 bg-gradient-to-r from-indigo-500 to-blue-400 items-center'>
            <p className='text-3xl font-bold text-center mt-10 flex items-center mb-6'>Portfolio <Icon icon="dashicons:portfolio"  className='w-6 h-6 mx-2' /></p>
            
              <div>
             <ViewPortfolio />
             </div>
            </div>
          
          </div>

          <div className='bg-gradient-to-r from-indigo-500 to-blue-200 p-5 rounded-3xl shadow-2xl mt-8 flex flex-col items-center'>
    <Card className='w-[50%] p-8 bg-gradient-to-r from-blue-200 to bg-indigo-400'>
      <CardBody>
        <div className='flex flex-col items-center mb-4'><h2 className='text-2xl font-bold mb-2 flex items-center'>Contact me <Icon icon="material-symbols-light:contact-mail-rounded"  className='w-6 h-6 mx-2'/></h2></div>
           <div className=''>
           <ContactForm />
            </div> 
            <div className='mt-6'> 
              <p className='flex  items-center text-gray-900 font-medium'>Or you can mail me <Icon icon="dashicons:email-alt2" className='mx-2 animate-bounce'/> at : Ishankarki7624@gmail.com</p>
              <p className='flex  items-center text-gray-900 font-medium'>Or call me <Icon icon="basil:mobile-phone-solid" className='mx-2 animate-bounce'/> at : 9865455167</p>
            </div>
      </CardBody>
    </Card>
  </div>


    </div>
    </div>
  );
};

export default MyPortfolio;