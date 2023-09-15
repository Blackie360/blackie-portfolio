import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const Links = [
    { name: 'HOME', link: '#home' },
    { name: 'ABOUT', link: '#about' },
    { name: 'WORK', link: '#work' },
    { name: 'SKILLS', link: '/' },
    { name: 'CONTACT', link: '#contact' },
  ];
  const [open, setOpen] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(1); // Initial opacity is 1 (fully visible)

  // Add a scroll event listener to handle navbar opacity
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the new opacity based on scroll position
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = 100; // Adjust this value as needed
      const newOpacity = 1 - Math.min(scrollY / maxScroll, 1);
      setNavbarOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="shadow-md w-full fixed top-0 left-0"
      style={{ opacity: navbarOpacity }} // Set opacity based on state
    >
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          {/* Your logo and title */}
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`text-3xl absolute right-8 top-4 cursor-pointer md:hidden ${
            open ? 'top-6' : '' // Adjust top position for open and closed state
          }`}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
