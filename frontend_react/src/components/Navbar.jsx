import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import images from '../constants/images';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="bg-gray-100 p-4 flex justify-center">
      <div className="container mx-auto flex justify-between items-center">
      <div className="text-black text-3xl font-bold">
          <img
            src={images.logo}
            alt="logo"
            className="w-20 h-20 md:w-16 md:h-16 lg:w-20 lg:h-20" 
          />
        </div>


        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black text-2xl focus:outline-none"
          >
            {open ? 'Close' : <AiOutlineMenu />}
          </button>
        </div>
        <div className={`md:flex md:items-center ${open ? 'block' : 'hidden'}`}>
          <ul className="md:flex space-x-4 ">
            <li>
              <a
                href="#home"
                className="text-black hover:text-gray-200 flex justify-center"
                onClick={closeMobileMenu} 
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-black hover:text-gray-200"
                onClick={closeMobileMenu} 
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-black hover:text-gray-200"
                onClick={closeMobileMenu} 
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-black hover:text-gray-200"
                onClick={closeMobileMenu} // Close the mobile menu on click
              >
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
