import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
  }
}
}

const Header = () => {
  return (
    <div className='pt-16'> 
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className=''>
          <div className='flex items-center justify-center h-screen'>
            <div>
              <span>👋</span>
              <div>
                <p className='text-xl font-semibold'>Hello, I am</p>
                <h1 className='text-4xl font-bold'>Felix Jumason</h1>
              </div>
            </div>
          </div>
          <div className=''>
            <p>web</p>
            <br />
            <p>ui/</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='profile'
      >
        <img src={images.phelix} alt='phelix' className='rounded-full w-32 h-32' />
      </motion.div>
      <motion.img
      whileInView={{scale: [0, 1]}}
      transition={{ duration: 1, ease: 'easeInOut'}}
      src={images.circle}
      className='ovarlay'
       />
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='circles'
      >
        {[images.cpp, images.js, images.css, ].map((circle, index) => (
          <div key={`cirle-index
          `}>
            <img src={circle} alt='circle' className='w-16 h-16' />

          </div>
        ))}

      </motion.div>
    </div>
  );
};

export default Header;
