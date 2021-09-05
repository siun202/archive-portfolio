import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="flex items-center mt-10 md:mt-0">
        <h2 className="text-text text-4xl">
          <span className="text-neongreen font-fira">01.</span> About me
        </h2>
        <div className="relative !ml-10 h-1 w-96">
          <Image src="/line.svg" alt="line" objectFit="contain" layout="fill" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row ">
        <h3 className="text-textdark md:w-1/2 mt-10 text-2xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            architecto maiores nisi, deleniti repellendus id. Porro inventore,
            ducimus, in voluptate voluptates est enim deleniti illo deserunt
            itaque dolorem dicta velit?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            nemo, accusantium placeat numquam porro rem ut quo officia dicta ad
            cum possimus delectus fuga magnam mollitia repellendus explicabo sit
            commodi?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            nemo, accusantium placeat numquam porro rem ut quo officia dicta ad
            cum possimus delectus fuga magnam mollitia repellendus explicabo sit
            commodi?
          </p>
        </h3>

        <div className="ml-0 md:mt-0 md:ml-20 mt-20">
          <Image
            src="/Me.svg"
            alt="Avneesh Agarwal"
            objectFit="contain"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
