import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { urlFor, client } from '../client';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold">Skills & Experiences</h2>

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
              className="w-20 h-20 rounded-full flex items-center justify-center border-4 border-black-600" // Increase the size to w-12 and h-12 for larger icons
            >
              <img
                src={urlFor(skill.icon)}
                alt={skill.name}
                className="w-8 h-8 rounded-full" // Set the width and height to the desired size
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
