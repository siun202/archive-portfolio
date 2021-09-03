import Image from "next/image";

const Header = () => {
  return (
    <nav className="py-3 px-24 sticky flex justify-between items-center">
      <Image
        width={75}
        height={75}
        objectFit="contain"
        src="/logo.svg"
        alt="logo"
      />
      <ol className="flex space-x-8">
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
