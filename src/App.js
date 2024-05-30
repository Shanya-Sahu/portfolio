import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import HeroSection from "./components/heroSection";
import Spinner from "./components/spinner";
import About from "./components/about";
import GoodAt from "./components/goodat";
import Experiences from "./components/experiences";
import SkillSec from "./components/skillSec";
import ProjectSec from "./components/projects";
import Contact from "./components/contact";
import ScrollToTopButtom from "./components/bottomToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false); // Set loading to false once everything on the page has loaded
    };
  }, []);

  return (
    <div className="App scroll-smooth relative">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Sidebar />
          <HeroSection />
          <About />
          <GoodAt />
          <Experiences />
          <SkillSec />
          <ProjectSec />
          <Contact />
          <ScrollToTopButtom />
        </>
      )}
    </div>
  );
}

export default App;
