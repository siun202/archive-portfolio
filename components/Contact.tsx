import React from "react";
import Image from "next/image";
import ContactButtons from "./ContactButtons";

const Contact = () => {
  return (
    <div className="mx-auto mt-20 flex flex-col items-center -ml-20">
      <div className="flex items-center mt-20 md:mt-0 mx-auto  space-x-10">
        <div className="relative h-1 w-60 md:w-60">
          <Image src="/line.svg" alt="line" objectFit="contain" layout="fill" />
        </div>
        <h2 className="text-text text-xl md:text-4xl">Get in Touch</h2>
        <div className="relative h-1 w-60 md:w-60">
          <Image src="/line.svg" alt="line" objectFit="contain" layout="fill" />
        </div>
      </div>
      <div className="flex space-x-8 items-center mt-10">
        <ContactButtons
          name="GitHub"
          icon="github.svg"
          link="https://github.com/avneesh0612"
        />
        <ContactButtons
          name="Instagram"
          icon="instagram.svg"
          link="https://instagram.com/avneesh.codes"
        />
        <ContactButtons
          name="Email ID"
          icon="mail.svg"
          link="mailto:avneeshagarwal0612@gmail.com"
        />
        <ContactButtons
          name="LinkedIn"
          icon="linkedin.svg"
          link="https://www.linkedin.com/in/avneesh-agarwal-78312b20a/"
        />
        <ContactButtons
          name="Hashnode"
          icon="hashnode.svg"
          link="https://avneesh0612.hashnode.dev/"
        />
      </div>
    </div>
  );
};

export default Contact;
