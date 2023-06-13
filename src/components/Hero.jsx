import React from "react";
import AnimationSpan from "./AnimationSpan";
import avatar from "./img/avatar.png";

const Hero = () => {
  return (
    <div className="home mt-12 flex  flex-col h-full text-primaryText dark:text-darkText">
      <div className="flex h-full flex-col lg:flex-row  justify-center items-center">
        <div className="flex w-full lg:w-1/2 justify-center items-center  flex-col">
          <p className="text-2xl font-semibold opacity-0 animate-fadeIn animation-delay-800">
            Hello! I am:
          </p>
          <h1 className="inline-flex max-sm:text-6xl text-9xl p-2 font-bold whitespace-nowrap text-brand-accent opacity-0 animate-fadeIn animation-delay-500">
            <AnimationSpan text="M" />
            <AnimationSpan text="a" />
            <AnimationSpan text="t" />
            <AnimationSpan text="e" />
            <AnimationSpan text="u" />
            <AnimationSpan text="s" />
            <AnimationSpan text="z &nbsp;" />
            {/* <AnimationSpan text="M" />
            <AnimationSpan text="A" />
            <AnimationSpan text="R" />
            <AnimationSpan text="E" />
            <AnimationSpan text="K" /> */}
          </h1>
          <h2 className="text-2xl p-4 text-justify font-semibold  opacity-0 animate-fadeIn animation-delay-1000">
            I'm&nbsp;
            <span className="text-indigo-500">WEB DEVELOPER</span> who can
            transform Your ideas into pixel-perfect web experiences.
          </h2>
        </div>
        <div className="flex w-3/4 md:w-1/2 lg:w-1/3 ">
          <img src={avatar} alt="" className="lg:p-8 animate-float" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
