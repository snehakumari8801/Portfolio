import React, { useEffect, useState } from "react";
import Home from "./Home";
import Service from "./Service";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Mainpage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gray-900 relative text-white">
      <section
        id="home"
        className="section transition-all duration-1000 ease-out"
      >
        <div
          className={`text-section ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <Home />
        </div>
      </section>

      <section
        id="service"
        className="section transition-all duration-1000 ease-out"
      >
        <div
          className={`text-section ${
            isVisible ? "animate-slideInRight" : "opacity-0"
          }`}
        >
          <Service />
        </div>
      </section>

      <section
        id="skills"
        className="section transition-all duration-1000 ease-out"
      >
        <div
          className={`text-section ${
            isVisible ? "animate-zoomIn" : "opacity-0"
          }`}
        >
          <Skills />
        </div>
      </section>

      <section
        id="projects"
        className="section transition-all duration-1000 ease-out"
      >
        <div
          className={`text-section ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <Projects />
        </div>
      </section>

      <section
        id="contact"
        className="section transition-all duration-1000 ease-out"
      >
        <div
          className={`text-section ${
            isVisible ? "animate-rotateIn" : "opacity-0"
          }`}
        >
          <Contact />
        </div>
      </section>

      <section
        id="contact"
        className="section transition-all duration-1000 ease-out"
      >
        <div
          className={`text-section ${
            isVisible ? "animate-rotateIn" : "opacity-0"
          }`}
        >
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Mainpage;
