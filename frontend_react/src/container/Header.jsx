import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants';

const Header = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
            Welcome to <span className="text-red-500">Oasis</span> <span className='text-blue-500'>Telecommunication</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto lg:mx-0 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your Reliable Internet Service Provider
          </p>
        </div>
        <div className="lg:w-1/2 mt-10">
          <motion.img
            src={images.oasis}
            alt="Oasis Telecommunication"
            className="rounded-full h-32 w-32 mx-auto lg:mx-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1}}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
