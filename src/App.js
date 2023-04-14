import "./App.css";
import { Hero, Portfolio, Skills, Navbar } from "./components/index.js";

function App() {
  return (
    <div className="w-screen h-full flex items-center justify-center bg-mainBg dark:bg-mainBgDark">
      <div className="max-sm:w-screen h-full shadow-xl shadow-gray-800 dark:border-borderDark bg-containerBg dark:bg-mainBgDark  rounded-lg ">
        <Navbar />
        <Hero id="home" />
        <Portfolio id="portfolio" />
        <Skills id="skills" />
      </div>
    </div>
  );
}

export default App;
