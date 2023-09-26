import React from "react";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <header className="relative">
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 rounded-full border border-black border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 gap-2">
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            whileHover={{
              scale: 1.1,
              opacity: 0.7,
              transition: { duration: 0.3 },
            }} // Apply animation on hover
          >
            <a
              href="#home"
              className="nav-link"
            >
              Home
            </a>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            whileHover={{
              scale: 1.1,
              opacity: 0.7,
              transition: { duration: 0.3 },
            }}
          >
            <a
              href="#about"
              className="nav-link"
            >
              About
            </a>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            whileHover={{
              scale: 1.1,
              opacity: 0.7,
              transition: { duration: 0.3 },
            }}
          >
            <a
              href="#portfolio"
              className="nav-link"
            >
              Portfolio
            </a>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            whileHover={{
              scale: 1.1,
              opacity: 0.7,
              transition: { duration: 0.3 },
            }}
          >
            <a
              href="#skills"
              className="nav-link"
            >
              Skills
            </a>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
