import blog from "./components/img/blog.png";
import portfolio from "./components/img/portfolio.png";

const projects = [
  {
    id: 1,
    name: "My personal blog.",
    tech: ["Html", "Css", "Tailwind.css", "React", "Next.js", "GraphQL"],
    img: `${blog}`,
  },
  {
    id: 2,
    name: "My portfolio site.",
    tech: ["Html", "Css", "Tailwind.css", "React"],
    img: `${portfolio}`,
  },
];

export default projects;
