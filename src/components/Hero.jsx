import React from "react";
import AnimationSpan from "./AnimationSpan";

const Hero = () => {
  return (
    <div className="home flex  flex-col h-full text-primaryText dark:text-darkText bg-[url('/src/components/img/9.jpg')]">
      <div className="flex h-full flex-col md:flex-row  justify-center items-center">
        <div className="flex h-full justify-center items-center  flex-col">
          <h1 className="inline-flex max-sm:text-5xl text-8xl p-4 font-semibold whitespace-nowrap text-brand-accent">
            <AnimationSpan text="M" />
            <AnimationSpan text="A" />
            <AnimationSpan text="T" />
            <AnimationSpan text="E" />
            <AnimationSpan text="U" />
            <AnimationSpan text="S" />
            <AnimationSpan text="Z &nbsp;" />
            <AnimationSpan text="M" />
            <AnimationSpan text="A" />
            <AnimationSpan text="R" />
            <AnimationSpan text="E" />
            <AnimationSpan text="K" />
          </h1>
          <h2 className="text-2xl p-2  font-semibold md:w-3/4 opacity-0 animate-fadeIn animation-delay-1000">
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
