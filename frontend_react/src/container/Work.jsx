import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor, Client, client } from '../client';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilteredWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilteredWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    // You can implement filter logic here based on the selected item
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Portfolio Section</h2>

      {/* Filter Buttons */}
      <div className="flex space-x-4">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`p-2 px-4 text-center cursor-pointer border rounded ${
              activeFilter === item ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Work Cards */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
      >
        {filterWork.map((work, index) => (
          <div key={index} className="bg-white p-4 border rounded shadow-md">
            <img src={urlFor(work.imgUrl)} alt={work.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-semibold mb-2">{work.name}</h3>
            <p className="text-gray-600">{work.description}</p>
            <div className="mt-4 flex space-x-2">
              <a href={work.githubUrl} target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="text-gray-700 hover:text-blue-500" />
              </a>
              <a href={work.demoUrl} target="_blank" rel="noopener noreferrer">
                <AiFillEye className="text-gray-700 hover:text-blue-500" />
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
