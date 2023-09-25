import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'; 
const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Your Logo</div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {open ? 'Close' : <AiOutlineMenu />} 
          </button>
        </div>
        <div className={`md:flex md:items-center ${open ? 'block' : 'hidden'}`}>
          <ul className="md:flex space-x-4">
            <li><a href="#home" className="text-white hover:text-blue-200">Home</a></li>
            <li><a href="#about" className="text-white hover:text-blue-200">About</a></li>
            <li><a href="#portfolio" className="text-white hover:text-blue-200">Portfolio</a></li>
            <li><a href="#skills" className="text-white hover:text-blue-200">Skills</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
