import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import tailwind from "../images/tailwind.png";
import github from "../images/github.png";

function Skills() {
  return ( 
    <div className="h-screen pl-16 pr-16">
      <h1 className="text-4xl sm:text-5xl font-medium text-amber-400 mt-8">Skills I Have</h1>
      <div className="flex flex-wrap gap-6 ">
        <div className="h-52 bg-white p-10 w-52 mt-8 rounded-lg shadow-lg shadow-orange-500/50">
          <img src={html} alt="" className="h-30 "></img>
        </div>
        <div className="h-52 bg-white p-10 w-52 mt-8 rounded-lg shadow-lg shadow-blue-600/50">
          <img src={css} alt="" className="h-36 "></img>
        </div>
        <div className="h-52 bg-white p-10 w-52 mt-8 rounded-lg shadow-lg shadow-blue-300/50">
          <img src={tailwind} alt="" className="h-36 "></img>
        </div>
        <div className="h-52 bg-white p-10 w-52 mt-8 rounded-lg shadow-lg shadow-yellow-500/50">
          <img src={js} alt="" className="h-36 "></img>
        </div>
        <div className="h-52 bg-white p-10 w-52 mt-8 rounded-lg shadow-lg shadow-blue-200/50">
          <img src={react} alt="" className="h-36 "></img>
        </div>
        <div className="h-52 bg-white p-10 w-52 mt-8 rounded-lg shadow-lg shadow-purple-400/50">
          <img src={redux} alt="" className="h-36 "></img>
        </div>
        <div className="h-52 bg-white p-10 w-52 mt-8 rounded-lg shadow-lg shadow-amber-600/50">
          <img src={github} alt="" className="h-36 "></img>
        </div>
      </div>
    </div>
    
  );
}

export default Skills;
