'use client'
import React, {useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";



export default function Navbars({aboutRef, homeRef, contactRef, portfolioRef}) {
  
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };


  const downloadCV = () => {
    const url = '/Ishan_Karki_cv.pdf'; // assuming the PDF file is stored in the public folder
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Ishan_Karki_cv.pdf';
        a.click();
      });
  };
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
      <div 
          onClick={toggleZoom} 
          className={`cursor-pointer transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}
        >
        <Image src="./logo1.png"  viewBox="0 0 36 36"   className="mr-4 h-[50px] w-[50px]"></Image>
        </div>
        <p className="font-bold text-inherit">Ishan Karki</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={activeItem==='home'}>
          <Link  href="#" aria-current="page" onClick={()=>{
            homeRef.current.scrollIntoView({behavior:'smooth'});
            handleItemClick('home')}}
            color={activeItem === 'home' ? 'text-blue-600' : 'foreground'} >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem==='about'} >
          <Link  color={activeItem === 'about' ? 'text-blue-600' : 'foreground'} onClick={()=>{
            aboutRef.current.scrollIntoView({behavior:'smooth'});
            handleItemClick('about')
          }}
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem==='portfolio'}>
          <Link color={activeItem === 'portfolio' ? 'text-blue-600' : 'foreground'}  onClick={()=>{
            portfolioRef.current.scrollIntoView({behavior:'smooth'});
            handleItemClick('portfolio')
          }}>
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem === 'contact'}>
          <Link color={activeItem === 'contact' ? 'text-blue-600' : 'foreground'} onClick={()=>{
            contactRef.current.scrollIntoView({behavior:'smooth'});
            handleItemClick('contact')
          }}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button  color="primary" variant="flat" onClick={downloadCV}>
            Download CV
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
