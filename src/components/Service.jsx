import React, { useEffect, useState } from "react";

function Service() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="pb-5 pl-16 pr-16 relative pt-10 bg-gradient-to-r from-gray-900 to-gray-900 text-white">
      <div
        className={`mt-20 text-5xl font-semibold text-center text-red-500 ${
          isVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        About Me
      </div>

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
