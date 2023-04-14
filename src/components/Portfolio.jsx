import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../data";
import arrow from "./img/right-arrow.png";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="portfolio max-sm:mx-4 m-8 pt-24 flex flex-col items-center justify-around text-primaryText dark:text-darkText dark:bg-mainBgDark">
      <h1 className="text-4xl mb-8" data-aos="fade-up" data-aos-duration="1000">
        <pre>&lt;projects&gt;</pre>
      </h1>
      <div className="flex justify-center items-center flex-wrap w-full">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="w-full h-full"
            >
              <div className="group w-full border-t-2 md:h-56 py-4 mx-2 flex flex-row max-md:flex-col justify-around  text-primaryText dark:text-darkText ">
                <img
                  src={project.img}
                  alt="project view"
                  className="flex w-1/4 max-md:w-full max-md:px-4 items-center justify-center px-4"
                />

                <div className="flex flex-col items-center max-md:w-full md:w-1/2">
                  <h1 className="mb-4 p-2 w-full flex font-semibold max-md:justify-center max-sm:text-xl text-3xl">
                    {project.name}
                  </h1>
                  <div className="flex w-full max-md:invisible max-md:absolute flex-wrap ">
                    {project.tech.map((tech, index) => {
                      return (
                        <button
                          key={index}
                          className="m-1 px-4 color-indigo-500 rounded-full text-indigo-500 "
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-row text-xl max-md:w-full w-1/4 font-semibold items-center justify-center">
                  <img src={arrow} alt="link" className="w-12 h-12" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
