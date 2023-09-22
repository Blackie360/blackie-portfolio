import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { urlFor, client } from '../client';

const Skills = () => {
  
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    
    const skillsQuery = '*[_type == "skills"]';

    

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
    <br />
      <h2 className="text-2xl font-bold flex justify-center">Skills & Tools</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center gap-2"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{ backgroundColor: skill.bgColor }}
              className="w-20 h-20 rounded-full flex items-center justify-center border-4 border-black-600 hover:bg-gray-700"             >
              <img
                src={urlFor(skill.icon)}
                alt={skill.name}
                className="w-8 h-8 rounded-full  cursor-pointer" 
              />
            </div>
            <div className="app__work-tag bg-gray-300 px-2 py-1 rounded">

            <p className="text-gray">{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Skills;
