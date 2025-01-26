// import React, { useContext } from "react";
// import Home from "./Home";
// import Service from "./Service";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";
// import { ThemeContext } from "./context/PortContext";

// function Mainpage() {
//   const { theme } = useContext(ThemeContext);

//   // Conditional class based on the theme

//   return (
//     <div className="bg-gray-900 relative text-white">
//       <section id="home" className="">
//         <Home />
//       </section>

//       <section id="service" className=" pt-10 px-6">
//         <Service />
//       </section>

//       <section id="skills" className="snap-start pt-10 px-6">
//         <Skills />
//       </section>

//       <section id="projects" className="snap-start pt-10 px-6">
//         <Projects />
//       </section>

//       <section id="contact" className=" pt-10 px-6">
//         <Contact />
//       </section>
//     </div>
//   );
// }

// export default Mainpage;


// import React, { useEffect, useState } from "react";
// import Home from "./Home";
// import Service from "./Service";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";

// function Mainpage() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setIsVisible(true); // Trigger animation after component mounts
//     }, 200); // Delay to trigger the animations after render

//     return () => clearTimeout(timeout); // Clean up timeout
//   }, []);

//   return (
//     <div className="bg-gray-900 relative text-white">
//       <section
//         id="home"
//         className={`section transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 translate-y-10'}`}
//       >
//         <Home />
//       </section>

//       <section
//         id="service"
//         className={`section transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 translate-x-10'}`}
//       >
//         <Service />
//       </section>

//       <section
//         id="skills"
//         className={`section transition-all duration-1000 ease-out delay-400 ${isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 scale-90'}`}
//       >
//         <Skills />
//       </section>

//       <section
//         id="projects"
//         className={`section transition-all duration-1000 ease-out delay-600 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 translate-y-10'}`}
//       >
//         <Projects />
//       </section>

//       <section
//         id="contact"
//         className={`section transition-all duration-1000 ease-out delay-800 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 translate-y-10'}`}
//       >
//         <Contact />
//       </section>
//     </div>
//   );
// }

// export default Mainpage;



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
      setIsVisible(true); // Trigger animation after component mounts
    }, 200); // Delay to trigger the animations after render

    return () => clearTimeout(timeout); // Clean up timeout
  }, []);

  return (
    <div className="bg-gray-900 relative text-white">
      {/* Home Section */}
      <section
        id="home"
        className="section transition-all duration-1000 ease-out"
      >
        <div className={`text-section ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Home />
        </div>
      </section>

      {/* Service Section */}
      <section
        id="service"
        className="section transition-all duration-1000 ease-out"
      >
        <div className={`text-section ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
          <Service />
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="section transition-all duration-1000 ease-out"
      >
        <div className={`text-section ${isVisible ? 'animate-zoomIn' : 'opacity-0'}`}>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="section transition-all duration-1000 ease-out"
      >
        <div className={`text-section ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="section transition-all duration-1000 ease-out"
      >
        <div className={`text-section ${isVisible ? 'animate-rotateIn' : 'opacity-0'}`}>
          <Contact />
        </div>
      </section>

      <section
        id="contact"
        className="section transition-all duration-1000 ease-out"
      >
        <div className={`text-section ${isVisible ? 'animate-rotateIn' : 'opacity-0'}`}>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Mainpage;
