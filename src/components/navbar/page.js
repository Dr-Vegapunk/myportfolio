'use client'
import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Navbars() {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
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
        <p className="font-bold text-inherit">WebApp Developer</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link  href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" color="foreground">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Download CV
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
