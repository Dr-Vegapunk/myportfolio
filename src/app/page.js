'use client'
import React, { useRef } from 'react';
import Images from '@/components/images/page';
import Navbars from '@/components/navbar/page';
import { Button, Card, CardBody, Progress } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import ContactForm from '@/components/contactForm/page';
import ViewPortfolio from '@/components/viewPortfolio/page';

const MyPortfolio = () => {
  const homeRef = useRef(null);
  const aboutRef=useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-400" ref={homeRef}>
      <Navbars aboutRef={aboutRef} homeRef={homeRef} contactRef={contactRef} portfolioRef={portfolioRef} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 shadow-2xl rounded-lg">
          <div className="w-full sm:w-1/2 mt-4 mb-4">
            <Card className="shadow-2xl h-full">
              <CardBody className="p-4 sm:p-6 md:p-10 bg-gradient-to-r from-indigo-500 to-blue-200">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 animate-bounce">Ishan Karki</h1>
                <p className="text-sm sm:text-base md:text-lg">
                  Hello, I am an aspiring MERN stack developer from Kathmandu, Nepal. I'm eagerly seeking internship opportunities to apply and expand my skills.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="w-full sm:w-1/5 md:ml-14 md:w-1/5 mb-4  lg:w-3/12 mt-4">
            <div className="w-full max-h-full sm:h-full">
              <Images />
            </div>
          </div>
        </div>
        

        <div className='flex flex-col gap-10 justify-center mt-8'>
          <div className='bg-gradient-to-r from-indigo-500 to-blue-200 p-5 rounded-3xl shadow-2xl flex flex-col items-center'>
            <Card className='w-full md:w-3/4 p-6 bg-gradient-to-r from-blue-200 to-indigo-400'>
              <CardBody>
                <div className='flex flex-col items-center mb-4' ref={aboutRef}>
                  <h2 className='text-xl md:text-2xl font-bold mb-2 flex items-center'>About me <Icon icon="icon-park-solid:avatar" className='w-6 h-6 ml-2' /></h2>
                </div>
                <p className='text-sm md:text-lg text-gray-900'>Hello everyone, I am an aspiring MERN stack developer with a passion for creating innovative solutions and continuously learning new technologies. I am eager to apply my skills and expand my knowledge in the field of web development.</p>
                <Button color="primary" className='mt-6 w-full md:w-1/3 mx-auto'>View Portfolio</Button>
              </CardBody>
            </Card>
          </div>

          <div className='bg-gradient-to-r from-indigo-500 to-blue-200 p-5 rounded-3xl shadow-2xl flex flex-col items-center'>
            <Card className='w-full md:w-3/4 p-6 bg-gradient-to-r from-blue-200 to-indigo-400'>
              <CardBody>
                <div className='flex flex-col items-center mb-4'>
                  <h2 className='text-xl md:text-2xl font-bold mb-2 flex items-center'>Education <Icon icon="zondicons:education" className='w-6 h-6 ml-2'/></h2>
                </div>
                <p className='text-sm md:text-lg text-gray-900'>Bachelor of technology in computing system engineering</p>
                <p className='text-sm md:text-lg text-gray-900'>University of Sunderland in ISMT, Nepal</p>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className='flex flex-col shadow-2xl items-center mt-8'>
          <div className='shadow-xl w-full md:w-3/4 flex flex-col rounded-lg mb-6 p-4 md:p-8 bg-gradient-to-r from-indigo-500 to-blue-400 items-center'>
            <p className='text-xl md:text-2xl font-bold text-center mt-6 flex items-center mb-4'>Skills <Icon icon="carbon:skill-level-basic" className='w-6 h-6 ml-2' /></p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
              {[
                { name: 'HTML', icon: 'logos:html-5', value: 80 },
                { name: 'CSS', icon: 'logos:css-3', value: 70 },
                { name: 'JavaScript', icon: 'logos:javascript', value: 60 },
                { name: 'React', icon: 'vscode-icons:file-type-reactjs', value: 50 },
                { name: 'Node.js', icon: 'logos:nodejs-icon-alt', value: 40 },
                { name: 'MongoDB', icon: 'skill-icons:mongodb', value: 30 },
              ].map((skill, index) => (
                <div key={index}>
                  <p className='text-sm md:text-lg text-center mt-3 flex items-center justify-center'>
                    {skill.name} <Icon icon={skill.icon} className='w-6 h-6 ml-2 animate-bounce' />
                  </p>
                  <Progress value={skill.value} className='mt-2 w-full progress-bar' />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col shadow-2xl items-center mt-8' ref={portfolioRef}>
          <div className='shadow-xl w-full flex flex-col rounded-lg mb-6 p-4 md:p-8 bg-gradient-to-r from-indigo-500 to-blue-400 items-center'>
            <p className='text-xl md:text-2xl font-bold text-center mt-6 flex items-center mb-4'>Portfolio <Icon icon="dashicons:portfolio" className='w-6 h-6 ml-2' /></p>
            <ViewPortfolio />
          </div>
        </div>

        <div className='bg-gradient-to-r from-indigo-500 to-blue-200 p-5 rounded-3xl shadow-2xl mt-8 flex flex-col items-center'>
          <Card className='w-full md:w-3/4 p-4 md:p-8 bg-gradient-to-r from-blue-200 to-indigo-400'>
            <CardBody>
              <div className='flex flex-col items-center mb-4' ref={contactRef}>
                <h2 className='text-xl md:text-2xl font-bold mb-2 flex items-center'>Contact me <Icon icon="material-symbols-light:contact-mail-rounded" className='w-6 h-6 ml-2'/></h2>
              </div>
              <ContactForm />
              <div className='mt-6'>
                <p className='flex items-center text-sm md:text-base text-gray-900 font-medium'>
                  Or mail me <Icon icon="dashicons:email-alt2" className='mx-2 animate-bounce'/> at: Ishankarki7624@gmail.com
                </p>
                <p className='flex items-center text-sm md:text-base text-gray-900 font-medium'>
                  Or call me <Icon icon="basil:mobile-phone-solid" className='mx-2 animate-bounce'/> at: 9865455167
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;