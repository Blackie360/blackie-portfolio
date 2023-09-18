import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../client'

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);


  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-2xl text-center mb-8">
  The greatest <span className="text-orange-600 font-semibold">ideas</span> are the{' '}
  <span className="text-orange-600 font-semibold">simplest.</span>
</h2>

      <div className="flex flex-wrap justify-center">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="bg-white rounded-lg shadow-lg p-4 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} assName="w-full h-auto rounded-lg" />
            
            <h2 className="text-xl font-semibold mt-2">{about.title}</h2>
            <p className="text-gray-600">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
