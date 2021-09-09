import React from "react";
import Image from "next/image";

interface ButtonProps {
  link: string;
  icon: string;
  name: string;
}

const ContactButtons: React.FC<ButtonProps> = ({ link, name, icon }) => {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="py-2 px-5 flex items-center duration-100 border-neongreen border-2 text-neongreen rounded-lg fill-current"
      >
        <Image src={`/logos/${icon}`} alt={name} width={25} height={25} />
        <span className="ml-2">{name}</span>
      </a>
    </div>
  );
};

export default ContactButtons;
