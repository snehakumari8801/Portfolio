import React from "react";
import port1 from "../images/port1.jpg";
import port7 from "../images/redss.jpg";
import port8 from "../images/sNss.jpg";
import port9 from "../images/talk a tive.jpg";

function Projects() {
  return (
    <div className="mt-16 sm:mt-15 pl-16 pr-16 pb-10 sm:pb-5 bg-gray-900">
      <h1 className="text-3xl sm:text-5xl font-medium text-red-400 flex justify-center">
        Recent Projects
      </h1>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-5 sm:gap-20 mt-8">
        <div className="w-full sm:w-1/2">
          <img
            src={port1}
            className="w-full sm:w-3/4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            alt="Ecommerce Website"
          />
        </div>
        <div className="w-full sm:w-1/2 pt-4 sm:pt-10">
          <h2 className="text-2xl text-red-500 font-semibold">
            Ecommerce Website (Frontend)
          </h2>
          <p className="mt-3 text-white">
            Developed a fully functional ecommerce platform utilizing HTML, CSS,
            JavaScript, and React JS. Key features include product listings with
            descriptions, add-to-cart functionality, and a responsive design.
          </p>
          <div className="flex gap-5 mt-6">
            <a
              href="https://hilarious-faloodeh-f46fab.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-32 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300">
                Demo
              </button>
            </a>
            <a
              href="https://github.com/snehakumari8801/Ecommerce_Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-32 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300">
                Repo
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-5 sm:gap-20 mt-12">
        <div className="w-full sm:w-1/2">
          <img
            src={port7}
            className="w-full sm:w-3/4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            alt="food-app"
          />
        </div>
        <div className="w-full sm:w-1/2 pt-4 sm:pt-10">
          <h2 className="text-2xl text-red-500 font-semibold">
            Food App (Frontend + Backend)
          </h2>
          <p className="mt-3 text-white">
            This project showcases a fully functional food app built with modern
            web technologies, including React.js for the frontend, Node.js and
            Express for the backend, and MongoDB with Mongoose for data
            management. The app allows users to sign up, log in, browse
            products, create food listings, and purchase items with a simple and
            intuitive interface.
          </p>
          <div className="flex gap-5 mt-6">
            <a
              href="https://food-app-1422.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-32 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300">
                Demo
              </button>
            </a>
            <a
              href="https://github.com/snehakumari8801/Food-App.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-32 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300">
                Repo
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-5 sm:gap-20 mt-12">
        <div className="w-full sm:w-1/2">
          <img
            src={port9}
            className="w-full sm:w-3/4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            alt="chat-app"
          />
        </div>
        <div className="w-full sm:w-1/2 pt-4 sm:pt-10">
          <h2 className="text-2xl text-red-500 font-semibold">
            Chat-App (Frontend + Backend)
          </h2>
          <p className="mt-3 text-white">
            This project demonstrates a real-time chat application built using
            the MERN stack (MongoDB, Express, React.js, and Node.js) with
            Socket.io for live messaging functionality. The app allows users to
            sign up, log in, and create or edit groups, as well as manage group
            members by adding or removing people.
          </p>
          <div className="flex gap-5 mt-6">
            <a
              href="https://tal-a-tive-chatting-app-5-zjtj.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-32 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300">
                Demo
              </button>
            </a>
            <a
              href="https://github.com/snehakumari8801/movix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-32 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300">
                Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
