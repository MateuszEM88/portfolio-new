import React, { useEffect } from "react";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";

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
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="w-full h-full"
        >
          <Card />
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="w-full h-full"
        >
          <Card />
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="w-full h-full"
        >
          <Card />
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="w-full h-full"
        >
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
