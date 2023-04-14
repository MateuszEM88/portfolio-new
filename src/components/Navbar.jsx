import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";

import sun from "./img/sun.png";
import moon from "./img/moon.png";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const handleClick = () => setOpen(!open);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="w-full bg-opacity-50 py-6 max-md:border-b-2 border-indigo-500 max-md:h-24 max-md:sticky max-md:top-0 max-md:dark:bg-mainBgDark z-20 max-md:bg-white">
      <div
        className={`max-md:w-screen max-md:h-screen fixed backdrop-blur-md ${
          open ? "visible" : "hidden"
        }`}
      ></div>
      <div className="flex max-md:w-2/3 justify-around items-center">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className=" rounded-full p-1 mr-8"
        >
          {theme === "light" ? (
            <img src={sun} alt="me" width="32" height="32" />
          ) : (
            <img src={moon} alt="me" width="32" height="32" />
          )}
        </button>
        <ul className="flex max-md:hidden font-semibold text-darkText  items-center cursor-pointer">
          <div className="hover:rotate-12 duration-300">
            <li className=" mx-2 px-4 hover:bg-indigo-500 hover:text-white md:duration-300 opacity-0 animate-fadeIn">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </li>
          </div>
          <div className="hover:rotate-12 duration-300">
            <li className="mx-2 px-4 hover:bg-indigo-500 hover:text-white md:duration-300 opacity-0 animate-fadeIn animation-delay-200">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Works
              </Link>
            </li>
          </div>
          <div className="hover:rotate-12 duration-300">
            <li className="mx-2 px-4 hover:bg-indigo-500 hover:text-white md:duration-300 opacity-0 animate-fadeIn animation-delay-400">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Skills
              </Link>
            </li>
          </div>
          <div className="hover:rotate-12 duration-300">
            <li className="mx-2 px-4 hover:bg-indigo-500 hover:text-white md:duration-300 opacity-0 animate-fadeIn animation-delay-600">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://rozprogramowany.dev/"
              >
                Blog
              </a>
            </li>
          </div>
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden mr-4 z-20 absolute top-6 right-6 max-sm:right-2"
        >
          <Hamburger
            color={theme === "light" ? "#000000" : "#939598"}
            toggled={open}
            toggle={setOpen}
          />
        </div>
        <div
          className={`z-10 fixed md:hidden transform duration-700 bg-white dark:bg-mainBgDark flex flex-col top-0 right-0 w-3/4 h-screen justify-center text-center ${
            open ? "flex" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col font-semibold dark:text-darkText  text-2xl items-center cursor-pointer">
            <li className=" py-4">
              <Link
                onClick={handleClick}
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </li>

            <li className=" py-4 ">
              <Link
                onClick={handleClick}
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Works
              </Link>
            </li>

            <li className=" py-4 ">
              <Link
                onClick={handleClick}
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Skills
              </Link>
            </li>

            <li className=" py-4 ">Blog</li>
          </ul>
          <div className="flex flex-col">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mateusz-marek-b81272247/"
            >
              <img src={linkedin} alt="linkedin" className="w-10 h-10 p-0.5" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MateuszEM88"
            >
              <img src={github} alt="github" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
