import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="mt-10">
      <div className="flex">
        <h2 className="text-4xl text-text">
          <span className="text-neongreen font-fira">02.</span> Some Things I’ve
          Built
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

      <div className="flex flex-col items-center mt-10 md:mt-0 md:flex-row">
        <div className="relative w-[400px] h-[250px] md:w-[500px] md:h-[300px]">
          <Image
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1630774147/voyagger_iribur.png"
            alt="Voyagger"
            layout="fill"
            className=""
            objectFit="contain"
          />
        </div>

        <div className="md:ml-20 md:w-1/3">
          <h2 className="text-3xl font-semibold text-neongreen">Voyagger</h2>
          <p className="mt-5 text-textdark">
            These tough times have made us all aware of the importance of our
            loved ones and through this app, users can bring a smile to their
            family and friend&rsquo;s faces by sending them their favorite
            delicacy, medicines, or a simple heartfelt gift.
          </p>
          <div className="flex justify-between mt-3 font-fira">
            <p>Next.js</p>
            <p>Auth0</p>
            <p>Firebase</p>
            <p>TailwindCSS</p>
          </div>

          <div className="flex space-x-4 mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.voyagger.tech/"
              className="py-2 px-5 hover:bg-neongreen/90 flex items-center hover:border-neongreen/90 hover:backdrop-blur-lg hover:text-white duration-100 border-neongreen border-2 text-neongreen rounded-lg"
            >
              <Image src="/github.svg" alt="github" height={20} width={20} />
              <span className="ml-2">GitHub</span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/avneesh0612/voyagger"
              className="py-2 px-5 hover:bg-neongreen/90 flex items-center hover:border-neongreen/90 hover:backdrop-blur-lg hover:text-white duration-100 border-neongreen border-2 text-neongreen rounded-lg"
            >
              <Image
                src="/external-link.svg"
                alt="externallink"
                height={20}
                width={20}
              />
              <span className="ml-2">Visit</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
