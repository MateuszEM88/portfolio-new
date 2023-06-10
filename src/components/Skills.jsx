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
import node from "./img/node.png";
import mongodb from "./img/mongodb.png";

const Skills = () => {
  const aos_duration = 400;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="skills flex flex-col py-20 items-center  justify-center text-primaryText dark:text-darkText dark:bg-mainBgDark">
      <h1 className="text-4xl mb-8" data-aos="fade-up" data-aos-duration="1000">
        <pre>&lt;skills&gt;</pre>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4">
        <div className="flex flex-col m-4 justify-center items-center">
          <img
            data-aos="flip-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration={aos_duration}
            className="h-16 w-16 m-2"
            src={html}
            alt="html"
          />
          <p
            className="text-xl font-bold p-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            HTML5
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            recusandae dolor repellendus commodi quos natus corporis fugiat id
            aperiam similique?
          </p>
        </div>
        <div className="flex flex-col m-4 justify-center items-center">
          <div className="flex flex-row justfiy-center items-center">
            <img
              data-aos="flip-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration={aos_duration}
              className="h-16 w-16 m-2"
              src={css}
              alt="css"
            />
            <img
              data-aos="flip-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration={aos_duration}
              className="h-16 w-16 m-2"
              src={tailwind}
              alt="tailwind"
            />
            <img
              data-aos="flip-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration={aos_duration}
              className="h-16 w-16 m-2"
              src={sass}
              alt="sass"
            />
          </div>
          <p
            className="text-xl font-bold p-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            CSS3 + TAILWIND + SASS
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            recusandae dolor repellendus commodi quos natus corporis fugiat id
            aperiam similique?
          </p>
        </div>
        <div className="flex flex-col m-4 justify-center items-center">
          <img
            data-aos="flip-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration={aos_duration}
            className="h-16 w-16 m-2"
            src={javascript}
            alt="javascript"
          />
          <p
            className="text-xl font-bold p-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            JavaScript
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            recusandae dolor repellendus commodi quos natus corporis fugiat id
            aperiam similique?
          </p>
        </div>
        <div className="flex flex-col m-4 justify-center items-center">
          <div className="flex flex-row justfiy-center items-center">
            <img
              data-aos="flip-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration={aos_duration}
              className="h-16 w-16 m-2"
              src={react}
              alt="react"
            />
            <img
              data-aos="flip-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration={aos_duration}
              className="h-16 w-16 m-2"
              src={redux}
              alt="redux"
            />
          </div>

          <p
            className="text-xl font-bold p-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            React + Redux
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            recusandae dolor repellendus commodi quos natus corporis fugiat id
            aperiam similique?
          </p>
        </div>
        <div className="flex flex-col m-4 justify-center items-center">
          <div className="flex flex-row justfiy-center items-center">
            <img
              data-aos="flip-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration={aos_duration}
              className="h-16 w-16 m-2"
              src={node}
              alt="node"
            />
            <img
              data-aos="flip-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration={aos_duration}
              className="h-16 w-16 m-2"
              src={express}
              alt="express"
            />
          </div>

          <p
            className="text-xl font-bold p-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            Node + Express
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            recusandae dolor repellendus commodi quos natus corporis fugiat id
            aperiam similique?
          </p>
        </div>
        <div className="flex flex-col m-4 justify-center items-center">
          <img
            data-aos="flip-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration={aos_duration}
            className="h-16 w-16 m-2"
            src={mongodb}
            alt="mongodb"
          />
          <p
            className="text-xl font-bold p-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            MongoDB
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            recusandae dolor repellendus commodi quos natus corporis fugiat id
            aperiam similique?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
