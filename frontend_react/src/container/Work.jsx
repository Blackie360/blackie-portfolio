import React from 'react';
import { motion } from 'framer-motion'; 
import { workItems } from '../constants';

const Work = () => {
  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div id='services' className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h2 className='text-3xl font-semibold text-gray-800 text-center mb-4'>Our Services</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {workItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial="initial"
            animate="animate"
            variants={imageVariants}
          >
            <img
              src={item.imgURL}
              alt={item.title}
              className="w-full h-30 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <br></br>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
