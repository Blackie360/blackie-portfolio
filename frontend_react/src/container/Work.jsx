import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor, client } from '../client';
import { images } from '../constants'; // Import your icons here

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  // Icon mapping
  const iconMap = {
    'UI/UX': images.ui, 
    'Web App': images.web, 
    'Mobile App': images.flutter2, 
    'React JS': images.react, 
    'All': images.all, 
  };

  return (
    <div id="portfolio" className='bg-gray-100'>
      <h2 className="text-3xl gap-2 font-bold mb-4 flex justify-center"><span className='text-orange-500'>Portfolio </span> Section</h2>

      <div className="flex space-x-4 text-black justify-center">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`p-2 px-4 text-center cursor-pointer border border-black bg-white hover:bg-gray-800 text-black font-bold py-2  rounded ${
              activeFilter === item ? 'bg-purple-500 text-black' : 'bg-white text-black'
            }`}
          >
            <img src={iconMap[item]} alt={item} className="w-10 h-10 mr-2 flex justify-center" />
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
      >
        {filterWork.map((work, index) => (
          <div key={index} className="bg-white p-4 border rounded shadow-md group hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <img src={urlFor(work.imgUrl)} alt={work.name} className="w-full h-40 object-cover mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <div className="flex justify-center space-x-4">
              <a href={work.projectLink} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: [0, 0.9] }}
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.25 }}
                >
                  <AiFillEye className="text-3xl" />
                </motion.div>
              </a>
              <a href={work.codetLink} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: [0, 0.9] }}
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.25 }}
                >
                  <AiFillGithub className="text-3xl" />
                </motion.div>
              </a>
            </div>
            <div className="text-center mt-4">
              <h4 className="text-lg font-semibold mb-2">{work.title}</h4>
              <p className="text-gray-600">{work.description}</p>
              <div className="flex justify-center mt-4">
                <div className="app__work-tag bg-gray-300 px-2 py-1 rounded">
                  <p className="text-sm text-gray-700">{work.tags[1]}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
