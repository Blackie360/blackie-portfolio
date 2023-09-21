import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, Client, client } from '../client';

const Plan = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-2xl flex justify-center font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className={`bg-${skill.bgColor} p-4 border shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className="">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden">
                <img
                  src={urlFor(skill.icon).url()}
                  alt={skill.name}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Plan;
