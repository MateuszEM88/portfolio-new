import React from "react";
import AnimationSpan from "./AnimationSpan";
// import linkedin from "./img/linkedin.png";
// import github from "./img/github.png";

const Hero = () => {
  return (
    <div className="home flex max-md:pt-16 flex-col w-screen h-full text-primaryText dark:text-darkText dark:bg-mainBgDark bg-cover bg-grayscale">
      <div className="flex h-full flex-col md:flex-row  justify-center items-center">
        <div className="flex h-full justify-center max-md:justify-start  flex-col ">
          <h1 className="inline-flex text-3xl p-2 py-4 font-semibold overflow-x-hidden animate-type whitespace-nowrap text-brand-accent ">
            <AnimationSpan text="H" />
            <AnimationSpan text="e" />
            <AnimationSpan text="l" />
            <AnimationSpan text="l" />
            <AnimationSpan text="o" />
            <AnimationSpan text="! " />
            <AnimationSpan text="I" />
            <AnimationSpan text="'" />
            <AnimationSpan text="m" />
          </h1>
          <h1 className="inline-flex text-5xl lg:text-7xl p-2 py-6 font-semibold overflow-x-hidden animate-type whitespace-nowrap text-brand-accent ">
            <AnimationSpan text="M" />
            <AnimationSpan text="A" />
            <AnimationSpan text="T" />
            <AnimationSpan text="E" />
            <AnimationSpan text="U" />
            <AnimationSpan text="S" />
            <AnimationSpan text="Z" />
          </h1>
          <h2 className="text-5xl p-2 font-bold w-full opacity-0 animate-fadeIn animation-delay-1000">
            <span className="text-indigo-500">WEB DEVELOPER</span>
          </h2>
        </div>
      </div>

      {/* <div className="flex flex-col invisible md:visible">
        <a href="https://www.linkedin.com/in/mateusz-marek-b81272247/">
          <img src={linkedin} alt="linkedin" className="w-10 h-10 p-0.5" />
        </a>
        <a href="https://github.com/MateuszEM88">
          <img src={github} alt="github" className="w-10 h-10" />
        </a>
      </div> */}
    </div>
  );
};

export default Hero;
