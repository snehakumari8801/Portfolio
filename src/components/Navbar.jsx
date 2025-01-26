import React, { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "./context/PortContext";
function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, themeChanger } = useContext(ThemeContext);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div className="bg-white font-bold">
      <div
        className="flex justify-between items-center w-full py-4 px-6 bg-white shadow-lg fixed 
      top-0 left-0 z-50"
      >
        <div className="sm:hidden block" onClick={toggle}>
          {open ? (
            <MdClose className="text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-3xl cursor-pointer" />
          )}
        </div>

        <div className="flex justify-between w-full items-center">
          {open ? (
            <ul className="flex flex-col items-center space-y-6 absolute top-16 left-0 w-full p-6 text-lg shadow-lg z-50 bg-gray-100">
              <Link to="/" onClick={() => setOpen(false)}>
                <li className="hover:text-pink-900 transition duration-300">
                  Home
                </li>
              </Link>
              <Link to="/about" onClick={() => setOpen(false)}>
                <li className="hover:text-pink-900 transition duration-300">
                  About
                </li>
              </Link>
              <Link to="/skills" onClick={() => setOpen(false)}>
                <li className="hover:text-pink-900 transition duration-300">
                  Skills
                </li>
              </Link>
              <Link to="/projects" onClick={() => setOpen(false)}>
                <li className="hover:text-pink-900 transition duration-300">
                  Projects
                </li>
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)}>
                <li className="hover:text-pink-900 transition duration-300">
                  Contact
                </li>
              </Link>
            </ul>
          ) : (
            // Desktop Menu
            <ul className="hidden sm:flex sm:flex-row space-x-10 text-lg">
              <Link to="/">
                <li className="hover:text-pink-900 transition duration-300">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="hover:text-pink-900 transition duration-300">
                  About
                </li>
              </Link>
              <Link to="/skills">
                <li className="hover:text-pink-900 transition duration-300">
                  Skills
                </li>
              </Link>
              <Link to="/projects">
                <li className="hover:text-pink-900 transition duration-300">
                  Projects
                </li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-pink-900 transition duration-300">
                  Contact
                </li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
