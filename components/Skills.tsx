import Image from "next/image";
import data from "../public/data.json";

const Skills = () => {
  return (
    <div id="skills" className="mt-20">
      <div className="flex items-center mt-20 md:mt-0">
        <h2 className="text-text text-xl md:text-4xl">
          <span className="text-neongreen font-fira">02.</span> Skills
        </h2>
        <div className="relative !ml-10 h-1 w-60 md:w-96">
          <Image src="/line.svg" alt="line" objectFit="contain" layout="fill" />
        </div>
      </div>

      <div className="flex  space-x-10">
        {data.skills.map((skill, i) => (
          <div key={i} className="cursor-pointer">
            <a href={skill.link}>
              <Image src={skill.src} alt={skill.name} width={75} height={75} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
