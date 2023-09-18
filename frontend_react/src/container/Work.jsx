import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor, Client, client } from '../client';

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
