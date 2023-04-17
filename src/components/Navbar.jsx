import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";

import sun from "./img/sun.png";
import moon from "./img/moon.png";

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
    <div className="w-full bg-opacity-50 py-6 max-md:border-b-2 border-indigo-500 max-md:h-24 max-md:sticky absolute max-md:top-0 max-md:dark:bg-mainBgDark z-20 max-md:bg-white">
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
            <img src={moon} alt="me" width="32" height="32" />
          ) : (
            <img src={sun} alt="me" width="32" height="32" />
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
            <li className="mx-2 px-4 hover:bg-indigo-500 hover:text-white md:duration-300 opacity-0 animate-fadeIn animation-delay-200">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
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
          className={`z-10 fixed md:hidden transform duration-700 bg-white dark:bg-mainBgDark overflow-y-hidden flex flex-col top-0 right-0 w-full h-full justify-end text-center ${
            open ? "flex" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col font-semibold dark:text-darkText  text-2xl items-center cursor-pointer">
            <li className=" py-4 text-3xl font-semibold h-20">
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

            <li className=" py-4 text-3xl font-semibold h-20">
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

            <li className=" py-4 text-3xl font-semibold h-20">
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
            <li className=" py-4 text-3xl font-semibold h-20">
              <Link
                onClick={handleClick}
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </li>

            <li className=" py-4 text-3xl font-semibold h-20">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://rozprogramowany.dev/"
              >
                Blog
              </a>
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-4 wrap w-full">
            <div className="flex items-center justify-center  h-20 bg-linkedin text-2xl">
              <p className="text-3xl font-semibold text-slate-200">Linkedin</p>
            </div>
            <div className="flex items-center justify-center  h-20 bg-github text-2xl">
              <p className="text-3xl font-semibold text-slate-200">Twitter</p>
            </div>
            <div className="flex items-center justify-center  h-20 bg-twitter text-2xl">
              <p className="text-3xl font-semibold text-slate-200">Github</p>
            </div>
            <div className="flex items-center justify-center  h-20 bg-indigo-500 ">
              <p className="text-3xl font-semibold text-slate-200">Email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
