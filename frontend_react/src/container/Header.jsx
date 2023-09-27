import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { images } from '../constants';

const Header = () => {
  const imageSrc = images.phelix; 

  const imageVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div id='home' className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
    
    <div className="md:flex md:items-center md:justify-between">
      
      <motion.div
        className="md:w-1/2 rounded-full overflow-hidden w-64 h-64 mb-6 md:mb-0 md:mr-4"
        initial="initial"
        animate="animate"
        variants={imageVariants}
      >
        <img
          src={imageSrc}
          alt="Header"
          className="w-full h-full "
        />
      </motion.div>
  
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-xl font-sans">Hello 👋  I am </h1>
        <h1 className='text-2xl font-bold'>Felix Jumason</h1>
        <p className="text-2xl font-serif">Frontend Developer</p>
  
        {/* Buttons */}
        <div className="my-4 space-x-4 flex justify-center">
          <button className="border border-black bg-white hover:bg-gray-800 text-black font-bold py-2 px-4 rounded">
           <a href="https://felix-jumason.netlify.app/home.html" >View CV </a>
          </button>
          <button className="border border-black bg-white hover:bg-gray-800 text-black font-bold py-2 px-4 rounded">
            <a href='mailto:felixkent360@gmail.com'>HIRE ME </a> 
          </button>
        </div>
  
        {/* Social Icons */}
        <h3 className='flex justify-center text-xl'>let's connect </h3>
        <div className="flex justify-center space-x-4">
          <a
            href="https://twitter.com/360_gamerx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-500 hover:bg-gray-800"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B17FBBYeRQW607HbhqFkkSA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-500 hover:bg-gray-800"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/Blackie360"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-500 hover:bg-gray-800"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/p.h.el.i.x/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-500 hover:bg-gray-800"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Header;
