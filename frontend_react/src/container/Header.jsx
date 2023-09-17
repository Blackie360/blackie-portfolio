import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { images } from '../constants';

const Header = () => {
  const imageSrc = images.kenyan; // Replace with your image source

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
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
    {/* On large screens, the image is larger on the left */}
    <div className="md:flex md:items-center md:justify-between">
      {/* Image section */}
      <motion.div
        className="md:w-1/2 rounded-full overflow-hidden w-64 h-64 mb-6 md:mb-0 md:mr-4"
        initial="initial"
        animate="animate"
        variants={imageVariants}
      >
        <img
          src={imageSrc}
          alt="Header"
          className="w-full h-full object-cover grayscale"
        />
      </motion.div>
  
      {/* Content section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl font-bold">Hello 👋 <br />I am Felix Jumas</h1>
        <p className="text-lg">Frontend Developer</p>
  
        {/* Buttons */}
        <div className="my-4 space-x-4 flex justify-center">
          <button className="border border-black bg-white hover:bg-blue-600 text-black font-bold py-2 px-4 rounded">
            Download CV
          </button>
          <button className="border border-black bg-white hover:bg-blue-600 text-black font-bold py-2 px-4 rounded">
            Contact Info
          </button>
        </div>
  
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
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
