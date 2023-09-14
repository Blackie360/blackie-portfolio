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
    },
  },
};

const Header = () => {
  return (
    <div className='pt-2 bg-slate-100'>
      <motion.div
        className='transform translate-x-[-100%] opacity-0'
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 '>
          <div className=' '>
            <div>
              <span role='img' aria-label='Wave emoji'>
                👋
              </span>
              <div>
                <p className='text-xl font-semibold'>Hello, I am</p>
                <h1 className='text-4xl font-bold'>Felix Jumason</h1>
              </div>
            </div>
          </div>
          <div className='block max-w-[15rem] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
            <div className='card-header'>
              <h2>Web UI</h2>
              <h2>Developer</h2>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className='profile relative'
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <div className='h-60 w-60 rounded-full border-4 border-blue-600'>
        
          <img src={images.phelix} alt='phelix' className='' />
        </div>
      </motion.div>
      <motion.img
        src={images.circle}
        className='overlay'
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      <motion.div
        variants={scaleVariants}
        animate='whileInView'
        className='circles'
      >
        {[images.cpp, images.js, images.css].map((circle, index) => (
          <div key={`circle-${index}`}>
            <img src={circle} alt='circle' className='w-16 h-16' />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
