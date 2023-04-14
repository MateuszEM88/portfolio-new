import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import html from "./img/html.png";
import css from "./img/css.png";
import sass from "./img/sass.png";
import tailwind from "./img/tailwind.png";
import javascript from "./img/javascript.png";
import react from "./img/react.png";
import git from "./img/git.png";
import express from "./img/express.png";
import redux from "./img/redux.png";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="skills flex flex-col pt-20 items-center  justify-center text-primaryText dark:text-darkText dark:bg-mainBgDark">
      <h1 className="text-4xl mb-8" data-aos="fade-up" data-aos-duration="1000">
        <pre>&lt;skills&gt;</pre>
      </h1>

      <div className="w-full flex flex-col lg:flex-row mb-8 justify-around">
        <div className="flex flex-col max-sm:w-full w-4/5 mx-auto  justify-around items-center rounded-lg">
          <div className="flex flex-row flex-wrap justify-around w-full h-3/4 p-4">
            <img
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="100"
              className="h-16 w-16 m-2"
              src={html}
              alt="html"
            />
            <img
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="200"
              className="h-16 w-16 m-2"
              src={css}
              alt="css"
            />
            <img
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
              className="h-16 w-16 m-2"
              src={sass}
              alt="sass"
            />
            <img
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="400"
              className="h-16 w-16 m-2"
              src={tailwind}
              alt="tailwind"
            />
            <img
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="h-16 w-16 m-2"
              src={javascript}
              alt="javascript"
            />
            <img
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="h-16 w-16 m-2"
              src={react}
              alt="react"
            />
            <img
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
              className="h-16 w-16 m-2"
              src={git}
              alt="git"
            />
            <img
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              className="h-16 w-16 m-2"
              src={express}
              alt="github"
            />
            <img
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="900"
              className="h-16 w-16 m-2"
              src={redux}
              alt="npm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
