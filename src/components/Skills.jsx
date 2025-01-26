import React, { useEffect, useState } from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import tailwind from "../images/tailwind.png";
import github from "../images/github.png";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="pl-16 pr-16 pt-20 pb-20 sm:pb-10 bg-gradient-to-r bg-gray-900">
      <h1 className="text-4xl sm:text-5xl font-medium text-red-500 text-center mt-10 mb-12">
        Skills I Have
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-orange-400/50 
          ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          } transition-all duration-700 ease-out`}
        >
          <img
            src={html}
            alt="HTML"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-orange-500/50"
          />
        </div>

        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-600/50 
          ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          } transition-all duration-700 ease-out`}
        >
          <img
            src={css}
            alt="CSS"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-red-500/50"
          />
        </div>

        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-300/50 
          ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          } transition-all duration-700 ease-out`}
        >
          <img
            src={tailwind}
            alt="Tailwind CSS"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-red-500/50"
          />
        </div>

        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-yellow-500/50 
          ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          } transition-all duration-700 ease-out`}
        >
          <img
            src={js}
            alt="JavaScript"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-yellow-500/50"
          />
        </div>

        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-400/50 
          ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          } transition-all duration-700 ease-out`}
        >
          <img
            src={react}
            alt="React"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-red-500/50"
          />
        </div>

        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-500/50 
          ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          } transition-all duration-700 ease-out`}
        >
          <img
            src={redux}
            alt="Redux"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-red-500/50"
          />
        </div>

        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-500/50 
          ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          } transition-all duration-700 ease-out`}
        >
          <img
            src="https://www.gtech.com.tr/wp-content/uploads/2020/09/mongodb-nedir-1.png"
            alt="MongoDb"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-green-500/50"
          />
        </div>

        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-500/50 
          ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          } transition-all duration-700 ease-out`}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrqbyJ995EJgI5k4tmEA2ZaJ7r3nKhlE0Iw&s"
            alt="Express JS"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-gray-500/50"
          />
        </div>

        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-amber-600/50 
          ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          } transition-all duration-700 ease-out`}
        >
          <img
            src={github}
            alt="GitHub"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-yellow-500/50"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
