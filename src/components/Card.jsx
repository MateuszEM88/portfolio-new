import React from "react";
import projects from "../data";
import blog from "./img/blog.png";
import link from "./img/external-link.png";
import ButtonSkill from "./ButtonSkill";

const Card = () => {
  return (
    <div className="group w-full border-t-2 md:h-56 py-4 mx-2 flex flex-row max-md:flex-col justify-around  text-primaryText dark:text-darkText ">
      <img
        src={blog}
        alt="project view"
        className="flex w-1/4 max-md:w-full max-md:px-4 items-center justify-center px-4"
      />

      <div className="flex flex-col items-center max-md:w-full md:w-1/2">
        <h1 className="mb-4 p-2 w-full flex font-semibold max-md:justify-center max-sm:text-xl text-3xl">
          My personal blog.
        </h1>
        <div className="flex max-md:invisible max-md:absolute flex-wrap items-center">
          {" "}
          <ButtonSkill text="Html"></ButtonSkill>
          <ButtonSkill text="Css"></ButtonSkill>
          <ButtonSkill text="React"></ButtonSkill>
          <ButtonSkill text="Next.js"></ButtonSkill>
          <ButtonSkill text="Tailwind.css"></ButtonSkill>
          <ButtonSkill text="GraphQl"></ButtonSkill>
        </div>
      </div>
      <div className="flex flex-row text-xl max-md:w-full w-1/4 font-semibold items-center justify-center">
        <h1 className="p-2">Live</h1>
        <img src={link} alt="link" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Card;
