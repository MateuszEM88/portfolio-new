import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../data";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="portfolio pt-6  flex flex-col items-center justify-around text-primaryText dark:text-darkText dark:bg-mainBgDark">
      <h1 className="text-4xl mb-8" data-aos="fade-up" data-aos-duration="1000">
        <pre>&lt;projects&gt;</pre>
      </h1>
      <div className="flex justify-center items-center  flex-wrap w-full">
        {projects.map((project) => {
          return (
            <div className="flex flex-row items-center justify-center max-md:m-4 md:m-8 relative w-full">
              <img
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                src={project.img}
                alt="project view"
                className="flex filter grayscale hover:grayscale-0 md:w-3/4 lg:w-1/2 max-md:w-full max-md:px-4 md:mr-12 px-4"
              />
              <div
                key={project.id}
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                className=" absolute h-full md:w-3/4 lg:w-1/2 max-md:w-full max-md:px-4 md:mr-12 px-4"
              >
                <div className="group opacity-80  w-full bg-mainBg dark:bg-containerDark   h-full  flex flex-row max-md:flex-col justify-around  text-primaryText dark:text-darkText ">
                  <div className="flex flex-col items-center w-full">
                    <h1 className="mb-4 p-2 w-full flex font-semibold max-md:justify-center max-sm:text-2xl text-3xl">
                      {project.name}
                    </h1>
                    <div className="flex justify-center w-full flex-wrap ">
                      {project.tech.map((tech, index) => {
                        return (
                          <button
                            key={index}
                            className="m-1 px-2  rounded-full "
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
