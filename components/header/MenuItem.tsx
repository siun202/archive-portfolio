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

const MenuItem: React.FC<any> = () => {
  return (
    <motion.li
      className="list-none flex-col mb-5 flex cursor-pointer items-end bg-bgblue h-screen -mr-3 space-y-5"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
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
    </motion.li>
  );
};

export default MenuItem;
