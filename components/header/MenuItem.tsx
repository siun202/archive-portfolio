import * as React from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem: React.FC = () => {
  return (
    <motion.ul
      className="list-none flex-col mb-5 flex cursor-pointer pl-10 bg-bgblue min-h-screen mt-0 -mr-3 space-y-5 z-50 backdrop-blur-md"
      variants={variants}
    >
      <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className="text-neongreen">1. </span> About
        </Link>
      </li>
      <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          duration={500}
        >
          <span className="text-neongreen">2. </span>Work
        </Link>
      </li>
      <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
        <span className="text-neongreen">3. </span>Blog
      </li>
      <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
        <span className="text-neongreen">4. </span>Contact
      </li>
    </motion.ul>
  );
};

export default MenuItem;
