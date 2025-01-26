import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import sneha_Img from "../images/sneha_Img.jpg";
import resume from "../components/_sneha_kumari_cv.docx";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start pt-28 pl-6 pr-6 sm:pl-16 sm:pr-16 mb-10 sm:mb-8 text-white">
      <div
        className={`w-full sm:w-1/2 animate-bloom ${
          isVisible ? "opacity-100" : "opacity-0"
        } sm:mr-8`}
      >
        <h1
          className={`text-4xl sm:text-5xl font-bold text-white transition-transform duration-1000 ease-out ${
            isVisible
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-10 opacity-0"
          }`}
        >
          Hi! I am
        </h1>
        <h1
          className={`text-4xl sm:text-5xl font-bold text-red-500 transition-transform duration-1000 ease-out ${
            isVisible
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-10 opacity-0"
          }`}
        >
          Sneha Kumari
        </h1>
        <p
          className={`pt-6 text-lg sm:text-xl text-white transition-opacity duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          I build complete web applications, handling both the frontend and
          backend. I focus on creating smooth, user-friendly experiences while
          also building strong and efficient systems behind the scenes. Take a
          look at my projects to see how I bring everything together from start
          to finish.
        </p>
        <a href={resume} download>
          <button className="bg-gradient-to-r from-red-500 to-indigo-600 hover:scale-105 text-white py-2 px-6 mt-8 rounded-lg shadow-lg transition duration-300">
            Download CV
          </button>
        </a>
        <div className="flex gap-8 pl-10 pt-12 text-3xl sm:text-4xl text-red-500">
          <a
            href="https://www.linkedin.com/in/sneha-kumari-05137029a/"
            className="hover:text-red-700 transition duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/snehakumari8801"
            className="hover:text-red-700 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div
        className={`w-full sm:w-auto mt-10 sm:mt-0 border-4 rounded-lg bg-red-50 border-gray-200 p-4 shadow-xl animate-bloom ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={sneha_Img}
          alt="Sneha"
          className={`h-44 sm:h-80 border-4 border-red-400 transform hover:scale-110 rounded-lg shadow-lg transition-all duration-500`}
        />
        <div className="bg-gradient-to-r from-red-500 to-indigo-600 text-white w-56 sm:w-72 h-10 rounded-lg mt-8 ml-2 sm:ml-12 flex items-center justify-center text-xl sm:text-2xl">
          Full-Stack Developer
        </div>
      </div>
    </div>
  );
}

export default Home;
