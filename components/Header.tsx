import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../hooks/useDimensions";
import MenuToggle from "./header/MenuToggle";
import { Navigation } from "./header/Navigation";
import { useRef } from "react";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav className="py-3 px-24 md:sticky md:flex justify-between items-center">
      <Image
        width={75}
        height={75}
        objectFit="contain"
        src="/logo.svg"
        alt="logo"
      />

      <motion.nav
        className="absolute top-2 md:hidden left-0 w-full"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>

      <ol className=" space-x-8 md:flex hidden">
        <li className="text-text cursor-pointer border-b-2 border-transparent hover:border-neongreen">
          <span className="text-neongreen">1. </span> About
        </li>
        <li className="text-text cursor-pointer border-b-2 border-transparent hover:border-neongreen">
          <span className="text-neongreen">2. </span>Work
        </li>
        <li className="text-text cursor-pointer border-b-2 border-transparent hover:border-neongreen">
          <span className="text-neongreen">3. </span>Blog
        </li>
        <li className="text-text cursor-pointer border-b-2 border-transparent hover:border-neongreen">
          <span className="text-neongreen">4. </span>Contact
        </li>
      </ol>
    </nav>
  );
};

export default Header;
