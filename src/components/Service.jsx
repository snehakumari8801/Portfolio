// import React from "react";

// function Service() {
//   return (
//     <div className=" sm:h-screen pl-16 pr-16   mb-10 sm:mb-0 relative">

//       <div className="mt-20 text-5xl font-medium text-center  flex text-red-400  justify-center">About me</div>
//       <h4 className="pt-10 text-lg">
//         Hey there! I'm Sneha kumari, a frontend developer with a passion for
//         crafting engaging and dynamic web experiences. I specialize in using HTML, CSS, and JavaScript
//         to bring designs to life and create seamless user interfaces.
//       </h4>
//       <ul className="pt-10">
//         <li className="pt-5">
//            <span className="text-red-400">HTML/CSS/JavaScript:</span> These are the building blocks of the web, and
//           I've mastered them to create visually appealing and responsive
//           layouts.
//         </li>
//         <li>
//         <span className="text-red-400">React:</span> I'm proficient in React.js, a powerful library for building
//           interactive user interfaces. I love how it allows me to create
//           reusable components and manage state efficiently.
//         </li>
//         <li>
//         <span className="text-red-400">Redux Toolkit:</span> I have experience using Redux Toolkit for state
//           management in larger React applications. It helps me keep my codebase
//           organized and scalable.
//         </li>
//         <li>
//         <span className="text-red-400">Tailwind CSS:</span> I'm a fan of Tailwind CSS for its utility-first approach
//           to styling. It speeds up my development process and allows me to
//           create beautiful designs with minimal effort.
//         </li>
//         <li>
//         <span className="text-red-400">GitHub:</span>  I actively contribute to open-source projects and showcase my
//           code on GitHub. You can check out my repositories here.
//         </li>
//       </ul>

//     </div>
//   );
// }

// export default Service;



// import React from "react";

// function Service() {
//   return (
//     <div
//       className="pb-5 pl-16 pr-16  relative pt-10 
//  bg-gradient-to-r from-gray-900 to-gray-900 text-white"
//     >
//       {/* Title Section */}
//       <div className="mt-20 text-5xl font-semibold text-center text-red-500">
//         About Me
//       </div>

//       {/* Description */}
//       <h4 className="pt-8 text-lg text-white text-center  max-w-3xl mx-auto">
//         With the MERN stack (MongoDB, Express, React, and Node.js), I can build
//         end-to-end applications, handling everything from building dynamic user
//         interfaces to setting up a backend and managing databases. This complete
//         skill set allows me to develop powerful, full-featured web applications.
//       </h4>

//       {/* Skills List */}
//       <ul className="pt-10 space-y-6 max-w-4xl mx-auto">
//         <li className="flex items-start space-x-3">
//           <span className="text-red-400  font-semibold">
//             HTML/CSS/JavaScript:
//           </span>
//           <p className="text-white ">
//             These are the building blocks of the web, and I've mastered them to
//             create visually appealing and responsive layouts.
//           </p>
//         </li>
//         <li className="flex items-start space-x-3">
//           <span className="text-red-400  font-semibold">React:</span>
//           <p className="text-white ">
//             I'm proficient in React.js, a powerful library for building
//             interactive user interfaces. I love how it allows me to create
//             reusable components and manage state efficiently.
//           </p>
//         </li>
//         <li className="flex items-start space-x-3">
//           <span className="text-red-400  font-semibold">Redux Toolkit:</span>
//           <p className="text-white ">
//             I have experience using Redux Toolkit for state management in larger
//             React applications. It helps me keep my codebase organized and
//             scalable.
//           </p>
//         </li>
//         <li className="flex items-start space-x-3">
//           <span className="text-red-400  font-semibold">Tailwind CSS:</span>
//           <p className="text-white  ">
//             I'm a fan of Tailwind CSS for its utility-first approach to styling.
//             It speeds up my development process and allows me to create
//             beautiful designs with minimal effort.
//           </p>
//         </li>
//         <li className="flex items-start space-x-3">
//           <span className="text-red-400 text-xl font-semibold">GitHub:</span>
//           <p className="text-white ">
//             I actively contribute to open-source projects and showcase my code
//             on GitHub. You can check out my repositories here.
//           </p>
//         </li>
//         <li className="flex items-start space-x-3">
//           <span className="text-red-400  font-semibold">
//             Node.js & Express:
//           </span>
//           <p className="text-white ">
//             I build scalable and efficient server-side applications using
//             Node.js and Express. These technologies allow me to create fast and
//             reliable APIs.
//           </p>
//         </li>
//         <li className="flex items-start space-x-3">
//           <span className="text-red-400  font-semibold"> MongoDB: </span>
//           <p className="text-white ">
//             As a NoSQL database, I use MongoDB to manage data and build flexible
//             data models for my applications.
//           </p>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Service;



import React, { useEffect, useState } from "react";

function Service() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true); // Trigger animation after component mounts
    }, 300); // Delay to trigger the animations after render

    return () => clearTimeout(timeout); // Clean up timeout
  }, []);

  return (
    <div className="pb-5 pl-16 pr-16 relative pt-10 bg-gradient-to-r from-gray-900 to-gray-900 text-white">
      {/* Title Section */}
      <div
        className={`mt-20 text-5xl font-semibold text-center text-red-500 ${
          isVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        About Me
      </div>

      {/* Description */}
      <h4
        className={`pt-8 text-lg text-white text-center max-w-3xl mx-auto ${
          isVisible ? "animate-fadeIn" : "opacity-0"
        } transition-all duration-1000`}
      >
        With the MERN stack (MongoDB, Express, React, and Node.js), I can build
        end-to-end applications, handling everything from building dynamic user
        interfaces to setting up a backend and managing databases. This complete
        skill set allows me to develop powerful, full-featured web applications.
      </h4>

      {/* Skills List */}
      <ul className="pt-10 space-y-6 max-w-4xl mx-auto">
        {[
          {
            skill: "HTML/CSS/JavaScript",
            description:
              "These are the building blocks of the web, and I've mastered them to create visually appealing and responsive layouts.",
          },
          {
            skill: "React",
            description:
              "I'm proficient in React.js, a powerful library for building interactive user interfaces. I love how it allows me to create reusable components and manage state efficiently.",
          },
          {
            skill: "Redux Toolkit",
            description:
              "I have experience using Redux Toolkit for state management in larger React applications. It helps me keep my codebase organized and scalable.",
          },
          {
            skill: "Tailwind CSS",
            description:
              "I'm a fan of Tailwind CSS for its utility-first approach to styling. It speeds up my development process and allows me to create beautiful designs with minimal effort.",
          },
          {
            skill: "GitHub",
            description:
              "I actively contribute to open-source projects and showcase my code on GitHub. You can check out my repositories here.",
          },
          {
            skill: "Node.js & Express",
            description:
              "I build scalable and efficient server-side applications using Node.js and Express. These technologies allow me to create fast and reliable APIs.",
          },
          {
            skill: "MongoDB",
            description:
              "As a NoSQL database, I use MongoDB to manage data and build flexible data models for my applications.",
          },
        ].map(({ skill, description }, index) => (
          <li
            key={index}
            className={`flex items-start space-x-3 ${
              isVisible ? "animate-slideUp" : "opacity-0"
            } transition-all duration-1000`}
          >
            <span className="text-red-400 font-semibold">{skill}:</span>
            <p className="text-white">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Service;
