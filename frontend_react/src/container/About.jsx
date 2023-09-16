import React from 'react';
import { motion } from 'framer-motion'; 
import { images } from '../constants';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      id='about'
      className="bg-gray-100 p-6 rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:order-2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            <span className="text-red-500">Oasis</span> <span className="text-blue-500">Telecommunication</span>
          </h2>
          <p className="text-gray-600">
            Oasis Telecommunication is a leading Internet Service Provider (ISP) committed to delivering high-speed internet
            and exceptional services to our customers.
          </p>
        </div>
        <div className="lg:w-1/2 lg:order-1 mt-10">
          <motion.img
            src={images.transmission}
            alt="Oasis Telecommunication"
            className="rounded-full h-48 w-48 mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
