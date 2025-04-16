"use client"; 

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      
      
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
          href={link.href}
          key={link.key}
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          {link.label}
        </a>
        ))}
      </ul>

      
      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>

      
      <button 
        className="lg:hidden focus:outline-none" 
        onClick={() => {
          setIsOpen(!isOpen);
          console.log("Menu toggled:", isOpen); 
        }}
      >
        <Image 
          src={isOpen ? "/close.svg" : "/menu.svg"} 
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
        />
      </button>

      
      <div className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg lg:hidden p-4 transition-all duration-300 
        ${isOpen ? "block opacity-100" : "hidden opacity-0"}`}>
        <ul className="flex flex-col gap-6 text-gray-900 dark:text-white">
          {NAV_LINKS.map((link) => (
            <Link 
              href={link.href} 
              key={link.key} 
              className="text-gray-900 dark:text-white font-medium text-lg py-2 border-b border-gray-300"
              onClick={() => setIsOpen(false)} 
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
