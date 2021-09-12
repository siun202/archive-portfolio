import Image from "next/image";
import React from "react";
import data from "../public/data.json";
import Title from "./Title";

const About = () => {
  return (
    <div id="about">
      <Title num={1} title="About me" />

      <div className="flex flex-col md:flex-row">
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

        <div className="ml-0 md:mt-0 md:ml-20 mt-20 w-80 h-80 relative rounded-full border-2 border-neongreen">
          <Image
            src={data.image}
            alt={data.name}
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
