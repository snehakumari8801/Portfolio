import React from "react";
import port1 from "../images/port1.jpg";
import port7 from "../images/port-profile-2.jpg";

function Projects() {
  return (
    <div className="h-screen mt-8 pl-16 pr-16">
      <h1 className=" text-3xl sm:text-5xl font-medium text-amber-400">
        Recent Projects
      </h1>
      <div className="flex flex-col sm:flex-row sm:flex sm:justify-between gap-5 sm:gap-20 ">
        <div>
          <img src={port1} className="w-3/4 mt-12" alt=""></img>
        </div>
        <div className="pt-2 sm:pt-10 gap-2 sm:gap-0">
          <h2 className="text-2xl text-amber-500">Ecommerce website</h2>
          <p>
            Developed a fully functional ecommerce platform utilizing HTML,
            CSS JavaScript, and React JS.Key features include product listing
            with descriptions, add to cart functionality, and a responsive
            design.
          </p>
          <a href="https://66437715dad2f73a66783042--keen-manatee-26f77c.netlify.app/">
          <button className="w-20 bg-amber-600 mt-3 sm:mt-20 ">Demo</button>
          </a>
          <a href="https://github.com/snehakumari8801/Ecommerce_Website">
          <button className="w-20 bg-amber-600 mt-3 sm:mt-20 ml-5 sm:ml-10">
            Repo
          </button>
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex sm:justify-between gap-5 sm:gap-20">
        <div>
          <img src={port7} className="w-3/4 sm:mt-12 mt-40" alt=""></img>
        </div>
        <div className="pt-2 sm:pt-10 gap-2 sm:gap-0">
          <h2 className="text-2xl text-amber-500">Movix</h2>
          <div>
            Designed and implemented a movie search application with video
            playback functionality. Technologies used: HTML, CSS, JAVASCRIPT,
            REACT JS, REDUX. Features include search functionality for movies
            video playback, and a responsive layout.
          </div>
          <a href="https://movix-red-sigma.vercel.app/">
          <button className="w-20 bg-amber-600 mt-3 sm:mt-20 ">Demo</button>
          </a>
          <a href="https://github.com/snehakumari8801/movix">
          <button className="w-20 bg-amber-600 mt-3 sm:mt-20 ml-5 sm:ml-10">
            Repo
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
