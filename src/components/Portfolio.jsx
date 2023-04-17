import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../data";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="portfolio  flex flex-col items-center justify-around text-primaryText dark:text-darkText dark:bg-mainBgDark">
      <h1 className="text-4xl mb-8" data-aos="fade-up" data-aos-duration="1000">
        <pre>&lt;projects&gt;</pre>
      </h1>
      <div className="flex justify-center items-center  flex-wrap w-full">
        {projects.map((project) => {
          return (
            <div className="flex flex-row items-center justify-center m-8 relative w-full">
              <img
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                src={project.img}
                alt="project view"
                className="flex  w-1/2 max-md:w-full max-md:px-4 mr-12 items-center justify-center px-4"
              />
              <div
                key={project.id}
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                className="w-2/5 absolute right-12 my-auto"
              >
                <div className="group hover:outline hover:outline-indigo-500 duration-200 w-full bg-mainBg dark:bg-containerDark rounded-lg my-4 md:h-56 py-4 mx-2 flex flex-row max-md:flex-col justify-around  text-primaryText dark:text-darkText ">
                  <div className="flex flex-col items-center max-md:w-full">
                    <h1 className="mb-4 p-2 w-full flex font-semibold max-md:justify-center max-sm:text-xl text-3xl">
                      {project.name}
                    </h1>
                    <div className="flex w-full max-md:invisible max-md:absolute flex-wrap ">
                      {project.tech.map((tech, index) => {
                        return (
                          <button
                            key={index}
                            className="m-1 px-4 font-semibold color-indigo-500 rounded-full text-indigo-500 "
                          >
                            {tech}
                          </button>
                        );
                      })}
                    </div>
                  </div>
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
