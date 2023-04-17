import "./App.css";
import {
  Hero,
  Portfolio,
  Skills,
  Navbar,
  Contact,
} from "./components/index.js";

function App() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="dark:border-borderDark bg-containerBg dark:bg-mainBgDark  rounded-lg ">
        <div className="h-screen">
          <Navbar />
          <Hero id="home" />
        </div>

        <Portfolio id="portfolio" />
        <Skills id="skills" />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
