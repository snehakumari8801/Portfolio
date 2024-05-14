import React from "react";

function Service() {
  return (
    <div className="h-screen pl-16 pr-16">
      <h1 className="mt-20 text-5xl font-medium text-amber-400">About me</h1>
      <h4 className="pt-10 text-lg">
        Hey there! I'm Sneha kumari, a frontend developer with a passion for
        crafting engaging and dynamic web experiences. I specialize in using HTML, CSS, and JavaScript
        to bring designs to life and create seamless user interfaces.
      </h4>
      <ul className="pt-10">
        <li className="pt-5">
           <span className="text-amber-400">HTML/CSS/JavaScript:</span> These are the building blocks of the web, and
          I've mastered them to create visually appealing and responsive
          layouts.
        </li>
        <li>
        <span className="text-amber-400">React:</span> I'm proficient in React.js, a powerful library for building
          interactive user interfaces. I love how it allows me to create
          reusable components and manage state efficiently.
        </li>
        <li>
        <span className="text-amber-400">Redux Toolkit:</span> I have experience using Redux Toolkit for state
          management in larger React applications. It helps me keep my codebase
          organized and scalable.
        </li>
        <li>
        <span className="text-amber-400">Tailwind CSS:</span> I'm a fan of Tailwind CSS for its utility-first approach
          to styling. It speeds up my development process and allows me to
          create beautiful designs with minimal effort.
        </li>
        <li>
        <span className="text-amber-400">GitHub:</span>  I actively contribute to open-source projects and showcase my
          code on GitHub. You can check out my repositories here.
        </li>
      </ul>
    </div>
  );
}

export default Service;
