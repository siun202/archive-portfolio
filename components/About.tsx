import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="flex">
        <h2 className="text-text text-4xl">
          <p className="text-neongreen font-fira">01.</p> About me
        </h2>
        <Image
          className="!ml-10"
          src="/line.svg"
          alt="line"
          height={1}
          objectFit="contain"
          width={400}
        />
      </div>

      <div className="flex">
        <h3 className="text-textdark w-1/2 mt-10 text-2xl">
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

        <div className="ml-20">
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
