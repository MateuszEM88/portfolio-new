import React from "react";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";

const Hero = () => {
  return (
    <div className="home flex max-md:pt-20 flex-col h-full items-center mb-8   text-primaryText dark:text-darkText dark:bg-mainBgDark bg-cover bg-grayscale">
      <div className=" flex flex-row h-h70 justify-between md:mt-8 items-center  transition-shadow duration-300 dark:hover:shadow-indigo-900  rounded-lg">
        <div className="flex flex-col md:flex-row md:w-4/5 justify-around items-center">
          {/* <div className="absolute right-80 top-60 w-96 md:ml-24 md:mr-8 rounded-lg   opacity-0 animate-show animation-delay-1000">
            <img src={hero} alt="hero" className="absolute" />
            <img src={hero} alt="hero" className="absolute rotate-6 invert" />
            <img src={hero} alt="hero" className="absolute rotate-12 sepia" />
          </div> */}
          <div className="flex  justify-center flex-col w-4/5 ">
            <h2 className="text-2xl text-indigo-500 mt-2 opacity-0 animate-appear animation-delay-1200">
              Hello! I am
            </h2>
            <h1 className="inline-flex max-sm:text-3xl text-4xl md:text-5xl lg:text-6xl  font-semibold h-20 pt-2 my-4 overflow-x-hidden animate-type whitespace-nowrap text-brand-accent ">
              Mateusz Marek
            </h1>
            <p className="text-md text-justify my-4 opacity-0 animate-fadeIn animation-delay-1000">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              commodi, possimus consequatur minus sint distinctio pariatur
              obcaecati animi velit fuga eligendi deleniti facere quas. Impedit
              ipsam totam harum officia autem fuga magni consequuntur velit
              vitae laborum dignissimos a, reiciendis blanditiis?
            </p>
            <button className="w-40 rounded-lg mt-4 h-12 bg-indigo-500 text-white font-semibold">
              Contact me!
            </button>
          </div>
        </div>

        <div className="flex flex-col invisible md:visible">
          <a href="https://www.linkedin.com/in/mateusz-marek-b81272247/">
            <img src={linkedin} alt="linkedin" className="w-10 h-10 p-0.5" />
          </a>
          <a href="https://github.com/MateuszEM88">
            <img src={github} alt="github" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
