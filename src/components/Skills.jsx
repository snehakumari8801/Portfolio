// import React from "react";
// import html from "../images/html.png";
// import css from "../images/css.png";
// import js from "../images/js.png";
// import react from "../images/react.png";
// import redux from "../images/redux.png";
// import tailwind from "../images/tailwind.png";
// import github from "../images/github.png";

// function Skills() {
//   return ( 
//     <div className=" pl-16 pr-16 mb-20 sm:mb-0  h-[100vh]">
//       <h1 className="text-4xl mt-10 sm:text-5xl font-medium text-red-400 flex justify-center">Skills I Have</h1>
//       <div className="flex flex-wrap gap-6 justify-center">
//         <div className="h-44 p-10 w-52 mt-8 rounded-lg shadow-lg shadow-orange-500/50">
//           <img src={html} alt="" className="h-24 "></img>
//         </div>
//         <div className="h-44 p-10 w-52 mt-8 rounded-lg shadow-lg shadow-red-600/50">
//           <img src={css} alt="" className="h-24"></img>
//         </div>
//         <div className="h-44 p-10 w-52 mt-8 rounded-lg shadow-lg shadow-red-300/50">
//           <img src={tailwind} alt="" className="h-24 "></img>
//         </div>
//         <div className="h-44  p-10 w-52 mt-8 rounded-lg shadow-lg shadow-yellow-500/50">
//           <img src={js} alt="" className="h-24 "></img>
//         </div>
//         <div className="h-44  p-10 w-52 mt-8 rounded-lg shadow-lg shadow-red-200/50">
//           <img src={react} alt="" className="h-24 "></img>
//         </div>
//         <div className="h-44  p-10 w-52 mt-8 rounded-lg shadow-lg shadow-red-400/50">
//           <img src={redux} alt="" className="h-24 "></img>
//         </div>
//         <div className="h-44  p-10 w-52 mt-8 rounded-lg shadow-lg shadow-amber-600/50">
//           <img src={github} alt="" className="h-24 "></img>
//         </div>
//       </div>
//     </div>
    
//   );
// }

// export default Skills;


// import React from "react";
// import html from "../images/html.png";
// import css from "../images/css.png";
// import js from "../images/js.png";
// import react from "../images/react.png";
// import redux from "../images/redux.png";
// import tailwind from "../images/tailwind.png";
// import github from "../images/github.png";

// function Skills() {
//   return (
//     <div className="pl-16 pr-16 pt-20 pb-20 sm:pb-10 bg-gradient-to-r 
//     bg-gray-900">
//       <h1 className="text-4xl sm:text-5xl font-medium text-red-500 text-center mt-10 mb-12">
//         Skills I Have
//       </h1>
//       <div className="flex flex-wrap gap-8 justify-center">
//         {/* HTML Skill Card */}
//         <div className="h-44 p-8 w-52 sm:w-64 bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-orange-400/50">
//           <img src={html} alt="HTML" className="h-24 mx-auto" />
//         </div>

//         {/* CSS Skill Card */}
//         <div className="h-44 p-8 w-52 sm:w-64 bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-600/50">
//           <img src={css} alt="CSS" className="h-24 mx-auto" />
//         </div>

//         {/* Tailwind CSS Skill Card */}
//         <div className="h-44 p-8 w-52 sm:w-64 bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-300/50">
//           <img src={tailwind} alt="Tailwind CSS" className="h-24 mx-auto" />
//         </div>

//         {/* JavaScript Skill Card */}
//         <div className="h-44 p-8 w-52 sm:w-64 bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-yellow-500/50">
//           <img src={js} alt="JavaScript" className="h-24 mx-auto" />
//         </div>

//         {/* React Skill Card */}
//         <div className="h-44 p-8 w-52 sm:w-64 bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-400/50">
//           <img src={react} alt="React" className="h-24 mx-auto" />
//         </div>

//         {/* Redux Skill Card */}
//         <div className="h-44 p-8 w-52 sm:w-64 bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-500/50">
//           <img src={redux} alt="Redux" className="h-24 mx-auto" />
//         </div>

//         {/* MongoDb Skill Card */}
//         <div className="h-44 p-8 w-52 sm:w-64 bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-500/50">
//           <img src="https://www.gtech.com.tr/wp-content/uploads/2020/09/mongodb-nedir-1.png" alt="MongoDb" className="h-24 mx-auto" />
//         </div>

//         {/* Express js Skill Card */}
//         <div className="h-44 p-8 w-52 sm:w-64 bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-500/50">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrqbyJ995EJgI5k4tmEA2ZaJ7r3nKhlE0Iw&s" alt="Redux" className="h-24 mx-auto" />
//         </div>

//         {/* GitHub Skill Card */}
//         <div className="h-44 p-8 w-52 sm:w-64 bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-amber-600/50">
//           <img src={github} alt="GitHub" className="h-24 mx-auto" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Skills;


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
      setIsVisible(true); // Trigger animation after component mounts
    }, 300); // Delay to trigger the animations after render

    return () => clearTimeout(timeout); // Clean up timeout
  }, []);

  return (
    <div className="pl-16 pr-16 pt-20 pb-20 sm:pb-10 bg-gradient-to-r bg-gray-900">
      <h1 className="text-4xl sm:text-5xl font-medium text-red-500 text-center mt-10 mb-12">
        Skills I Have
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        
        {/* HTML Skill Card */}
        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-orange-400/50 
          ${isVisible ? 'animate-fadeIn' : 'opacity-0'} transition-all duration-700 ease-out`}
        >
          <img
            src={html}
            alt="HTML"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-orange-500/50"
          />
        </div>

        {/* CSS Skill Card */}
        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-600/50 
          ${isVisible ? 'animate-fadeIn' : 'opacity-0'} transition-all duration-700 ease-out`}
        >
          <img
            src={css}
            alt="CSS"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-red-500/50"
          />
        </div>

        {/* Tailwind CSS Skill Card */}
        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-300/50 
          ${isVisible ? 'animate-fadeIn' : 'opacity-0'} transition-all duration-700 ease-out`}
        >
          <img
            src={tailwind}
            alt="Tailwind CSS"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-red-500/50"
          />
        </div>

        {/* JavaScript Skill Card */}
        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-yellow-500/50 
          ${isVisible ? 'animate-fadeIn' : 'opacity-0'} transition-all duration-700 ease-out`}
        >
          <img
            src={js}
            alt="JavaScript"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-yellow-500/50"
          />
        </div>

        {/* React Skill Card */}
        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-400/50 
          ${isVisible ? 'animate-fadeIn' : 'opacity-0'} transition-all duration-700 ease-out`}
        >
          <img
            src={react}
            alt="React"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-red-500/50"
          />
        </div>

        {/* Redux Skill Card */}
        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-500/50 
          ${isVisible ? 'animate-fadeIn' : 'opacity-0'} transition-all duration-700 ease-out`}
        >
          <img
            src={redux}
            alt="Redux"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-red-500/50"
          />
        </div>

        {/* MongoDb Skill Card */}
        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-500/50 
          ${isVisible ? 'animate-fadeIn' : 'opacity-0'} transition-all duration-700 ease-out`}
        >
          <img
            src="https://www.gtech.com.tr/wp-content/uploads/2020/09/mongodb-nedir-1.png"
            alt="MongoDb"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-green-500/50"
          />
        </div>

        {/* Express js Skill Card */}
        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-red-500/50 
          ${isVisible ? 'animate-fadeIn' : 'opacity-0'} transition-all duration-700 ease-out`}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrqbyJ995EJgI5k4tmEA2ZaJ7r3nKhlE0Iw&s"
            alt="Express JS"
            className="h-24 mx-auto transition transform hover:scale-125 hover:rotate-4 hover:shadow-md hover:shadow-gray-500/50"
          />
        </div>

        {/* GitHub Skill Card */}
        <div
          className={`h-44 p-8 w-full bg-white rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-amber-600/50 
          ${isVisible ? 'animate-fadeIn' : 'opacity-0'} transition-all duration-700 ease-out`}
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




