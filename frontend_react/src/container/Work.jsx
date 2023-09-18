import React, {useState, useEffect} from 'react'
import {AiFillGithub, AifillEye} from 'react-icons/ai'
import {motion} from 'framer-motion'
import {urlFor, Client} from '../client'

const Work = () => {
  const [activeFilter, setactivefilter] = useState('All')
  const handleWorkFilter = (item) => {

  }
  return (
 <> 
 <h2>portfolio section </h2>
 <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
 </>


 
  )
}

export default Work