import React from 'react'
import { motion } from 'framer-motion'
import {images} from '../constants/images'
const Header = () => {
  return (
    <div>
      <motion.div
      whileInView={{x: [-100, 0], opacity: [0, 1]}}
      transition={{duration: 1}}
      className=''
      >
        <div>
          <div className='flex items-center justify-center h-screen'>
            <div>
              <span>👋</span>
              <div>
                <p className=' text-xl font-semibold'>Hello, I am </p>
                <h1 className='text-4xl font-bold'> Felix Jumason </h1>
              </div>
            </div>
          </div>
        </div>

      </motion.div>

    </div>
  )
}

export default Header