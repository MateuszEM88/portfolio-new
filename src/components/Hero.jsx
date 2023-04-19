import React from "react";
import AnimationSpan from "./AnimationSpan";

const Hero = () => {
  return (
    <div className="home flex max-md:pt-16 flex-col w-screen h-full text-primaryText dark:text-darkText dark:bg-mainBgDark bg-cover bg-grayscale">
      <div className="flex h-full flex-col md:flex-row  justify-center items-center">
        <div className="flex h-full justify-center max-md:justify-start  flex-col ">
          <h3 className="inline-flex text-3xl p-2 py-4 font-semibold overflow-x-hidden animate-type whitespace-nowrap text-brand-accent ">
            <AnimationSpan text="H" />
            <AnimationSpan text="e" />
            <AnimationSpan text="l" />
            <AnimationSpan text="l" />
            <AnimationSpan text="o" />
            <AnimationSpan text="! " />
            &nbsp;My name is
          </h3>

          <h1 className="inline-flex max-sm:text-6xl text-7xl p-2 py-6 font-semibold overflow-x-hidden animate-type whitespace-nowrap text-brand-accent ">
            <AnimationSpan text="M" />
            <AnimationSpan text="A" />
            <AnimationSpan text="T" />
            <AnimationSpan text="E" />
            <AnimationSpan text="U" />
            <AnimationSpan text="S" />
            <AnimationSpan text="Z" />
          </h1>
          <h2 className="text-2xl p-2  font-semibold md:w-1/2 opacity-0 animate-fadeIn animation-delay-1000">
            I'm&nbsp;
            <span className="text-indigo-500">WEB DEVELOPER</span> who can
            transform Your ideas into pixel-perfect web experiences.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
