import React from "react";

const Contact = () => {
  return (
    <div className="contact flex flex-col justify-center items-center my-8 text-primaryText dark:text-darkText">
      <h1 className="text-4xl mb-8" data-aos="fade-up" data-aos-duration="1000">
        <pre>&lt;contact&gt;</pre>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 mb-8 wrap w-full">
        <a
          href="https://www.linkedin.com/in/mateusz-marek-b81272247/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <div className="flex items-center justify-center  h-20 bg-linkedin text-2xl">
            <p className="text-3xl font-semibold text-slate-200">Linkedin</p>
          </div>
        </a>
        <a
          href="https://twitter.com/rozprogramowany"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center  h-20 bg-github text-2xl">
            <p className="text-3xl font-semibold text-slate-200">Twitter</p>
          </div>
        </a>
        <a
          href="https://github.com/MateuszEM88"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center  h-20 bg-twitter text-2xl">
            <p className="text-3xl font-semibold text-slate-200">Github</p>
          </div>
        </a>
        <a
          href="mailto:mateuszEM1988@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center  h-20 bg-indigo-500 ">
            <p className="text-3xl font-semibold text-slate-200">Email</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
