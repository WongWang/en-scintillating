'use client';

import { useState } from "react";
import Link from 'next/link';

const links = [
  { 
    name: 'Showcase',
    href: '/showcase',
  },
  {
    name: 'Docs',
    href: '/docs',
  },
  { 
    name: 'Pricing',
    href: '/pricing',
  },
  { 
    name: 'Feedback',
    href: '/feecback',
  },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className="block py-2 px-3 text-nord4 rounded-sm hover:text-nord6 lg:p-0"
            >{link.name}</Link>
          </li>
        );
      })}
    </>
  );
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="bg-nord0 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-3">
        <Link href="/" className="flex items-center space-x-1">
          <img src="/logo.png" className="h-9" alt="En-Scintillating Logo"/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-nord4">En-Scintillating</span>
        </Link>
        <div className="flex lg:order-2 space-x-3">
          <a href="https://b.bnds.one/" className="text-nord0 bg-nord6 hover:bg-nord4 font-medium rounded-lg text-sm px-4 py-2 self-center">Get started</a>
          <a href="https://b.bnds.one/" className="flex items-center">
            <img src="/GitHub_logo.png" className="h-9" alt="GitHub Logo"/>
          </a>
          <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-nord4 rounded-lg lg:hidden cursor-pointer" onClick={toggleMenu}>
            <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={(isMenuOpen ? "M3 3 L13 13 M13 3 L 3 13" : "M1 1h15M1 7h15M1 13h15")}/>
            </svg>
          </button>
        </div>
        <div className={(isMenuOpen ? '' : 'hidden ') + "items-center justify-between w-full lg:flex lg:w-auto lg:order-1"} id="navbar-sticky">
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-nord0 lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0">
            <NavLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
}