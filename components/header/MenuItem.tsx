import * as React from "react";
import { motion } from "framer-motion";

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
      className="list-none flex-col mb-5 flex cursor-pointer items-end bg-bgblue min-h-screen -mr-3 space-y-5 z-50 backdrop-blur-md"
      variants={variants}
    >
      <li className="text-text cursor-pointer border-b-2 text-xl border-transparent hover:border-neongreen">
        <span className="text-neongreen">1. </span> About
      </li>
      <li className="text-text cursor-pointer border-b-2 text-xl border-transparent hover:border-neongreen">
        <span className="text-neongreen">2. </span>Work
      </li>
      <li className="text-text cursor-pointer border-b-2 text-xl border-transparent hover:border-neongreen">
        <span className="text-neongreen">3. </span>Blog
      </li>
      <li className="text-text cursor-pointer border-b-2 text-xl border-transparent hover:border-neongreen">
        <span className="text-neongreen">4. </span>Contact
      </li>
    </motion.ul>
  );
};

export default MenuItem;
