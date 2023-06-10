import countries from "./components/img/Group 2.png";
import portfolio from "./components/img/Group 1.png";
import blog from "./components/img/Group 3.png";

const projects = [
  {
    id: 1,
    name: "My personal blog.",
    tech: ["HTML", "CSS", "Tailwind", "React", "Next.js", "GraphQL"],
    img: `${blog}`,
  },
  {
    id: 2,
    name: "My portfolio site.",
    tech: ["HTML", "CSS", "Tailwind", "React"],
    img: `${portfolio}`,
  },
  {
    id: 3,
    name: "Countries APP",
    tech: ["HTML", "CSS", "Tailwind", "React"],
    img: `${countries}`,
  },
];

export default projects;
