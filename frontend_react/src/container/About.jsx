import React from 'react';
import { motion } from 'framer-motion'; 
import { images } from '../constants';

const abouts = [
  {title:'Frontend Development ', description: 'front end development is the development of those elements of a website that the customer sees and interacts with directly. It is a combination of programming skills (knowing which program to choose and when to use it), HTML, CSS and JavaScript.', imgUrl: images.router},
  {title:'Frontend Development ', description: 'front end development is the development of those elements of a website that the customer sees and interacts with directly. It is a combination of programming skills (knowing which program to choose and when to use it), HTML, CSS and JavaScript.', imgUrl: images.router},
  {title:'Frontend Development ', description: 'front end development is the development of those elements of a website that the customer sees and interacts with directly. It is a combination of programming skills (knowing which program to choose and when to use it), HTML, CSS and JavaScript.', imgUrl: images.router},

];

const About = () => {
  

  return (
   <>
   <h2 className='text-xl'> The greatest <span className='text-orange-600 '> ideas </span>are the <span className='text-orange-600 '>simplest.</span></h2>
   <div>
    {abouts.map((about, index) => (
      <motion.div
      whileInView={{opacity: 1}}
      whileHover={{scale: 1.1}}
      transition={{duration: 0.5, type: 'tween'}}
      className=''
      key={about.title + index}
      >
        <img src={about.imgUrl} alt={about.title}/>
        <h2>{about.title}</h2>
        <p>{about.description}</p>
      </motion.div>
    ))}
   </div>
   </>
  );
};

export default About;
