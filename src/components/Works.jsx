import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../data";

export default function Works() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="portfolio pt-6  flex flex-col items-center justify-around text-primaryText dark:text-darkText dark:bg-mainBgDark">
      <h1 className="text-4xl mb-8" data-aos="fade-up" data-aos-duration="1000">
        <pre>&lt;projects&gt;</pre>
      </h1>
      <div className="grid grid-cols-1   m-4">
        {projects.map((project) => {
          return (
            <div className="transition-shadow text-justify duration-300 flex flex-col md:flex-row rounded-lg p-0 p-4 md:m-8 mb-12">
              <img
                className="p-4 md:w-1/2 object-contain"
                src={project.img}
                alt=""
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
              />
              <div
                className="flex flex-col w-full items-center md:w-1/2 justify-center p-4 "
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
              >
                <h1 className="text-2xl font-bold p-4">{project.name}</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis molestiae cumque exercitationem fugiat maiores
                  deleniti in eligendi tempora temporibus, esse facere.
                  Excepturi laborum tempore alias est qui consectetur, culpa
                  nesciunt?
                </p>
                <div className="flex flex-row flex-wrap m-4">
                  {project.tech.map((tech, index) => {
                    return (
                      <button
                        key={index}
                        className="m-1 text-secondary p-2 border-2 rounded-md border-secondary "
                      >
                        {tech}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
