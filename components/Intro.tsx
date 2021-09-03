import React from "react";

const Intro = () => {
  return (
    <div className="space-y-5 mt-20 h-[80vh]">
      <h3 className="text-neongreen font-fira text-3xl">Hi, my name is</h3>
      <h1 className="text-text font-extrabold text-8xl">Avneesh Agarwal</h1>
      <h2 className="text-textdark text-6xl">I build awesome websites!</h2>
      <h4 className="w-3/5 text-textdark">
        I&rsquo;m a <span className="text-neongreen">Frontend Developer</span>{" "}
        focused on creating amazing UIs to solve business problems around the
        globe. I’m a school kid participating in Hackathons and solving problems
        to build something cool :D
      </h4>
      <button className="py-2 px-5 !mt-10 hover:bg-neongreen/80 hover:text-text duration-75 delay-75 border-neongreen border-2 text-neongreen rounded-lg">
        Reach out to me!
      </button>
    </div>
  );
};

export default Intro;
