import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants';
import { client, urlFor } from '../client';

// const abouts = [
//   {
//     title: 'Frontend Development',
//     description:
//       'Frontend development is the development of those elements of a website that the customer sees and interacts with directly. It is a combination of programming skills (knowing which program to choose and when to use it), HTML, CSS, and JavaScript.',
//     imgUrl: images.frontend,
//   },
//   {
//     title: 'Cybersecurity',
//     description:
//       'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks, damage, or unauthorized access.',
//     imgUrl: images.cyber,
//   },
//   {
//     title: 'Web Development',
//     description:
//       'Web development refers to building and maintaining websites and web applications. It involves coding, designing, and managing content.',
//     imgUrl: images.developer,
//   },
// ];
 


const About = () => {
const [abouts, setAbouts] = useState([])
useEffect(() =>{
  const query = '*[_type == "about"]';

  client.fetch(query)
  .then((data) => setAbouts(data))
  

}, [])

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
            <img
              src={urlFor(about.imgUrl)}
              alt={about.title}
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{about.title}</h2>
            <p className="text-gray-600">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
