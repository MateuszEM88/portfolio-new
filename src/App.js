import "./App.css";
import {
  Hero,
  Portfolio,
  Skills,
  Navbar,
  Contact,
  Works,
} from "./components/index.js";

function App() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-x-hidden">
      <div className="dark:border-borderDark bg-containerBg dark:bg-mainBgDark  ">
        <div className="h-screen">
          <Navbar />
          <Hero id="home" />
        </div>

        <Works id="portfolio" />
        <Skills id="skills" />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
