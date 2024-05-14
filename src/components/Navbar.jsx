import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div className="flex flex-row justify-between w-full bg-yellow-400 text-black text-xl font-bold px-6 py-4 sm:flex sm:flex-col md:flex">
      {open ? (
        <ul className="flex flex-col  items-center space-x-5 ">
         <Link to='/'><li className="hover:text-white pl-3">Home</li></Link>
         <Link to='/about'><li className="hover:text-white"> About</li></Link>
         <Link to='/skills'><li className="hover:text-white">Skills</li></Link>
         <Link to='/projects'><li className="hover:text-white">Projects</li></Link>
        <Link to='/contact'><li className="hover:text-white">Contact</li></Link>
        </ul>
      ) : (
        <ul className="hidden sm:flex justify-between items-center space-x-10">
        <Link to='/'> <li className="hover:text-white">Home</li></Link>
        <Link to='/about'> <li className="hover:text-white">About</li></Link>
        <Link to='/skills'> <li className="hover:text-white">Skills</li></Link>
        <Link to='/projects'><li className="hover:text-white">Projects</li></Link>
        <Link to='/contact'> <li className="hover:text-white">Contact</li></Link>
        </ul>
      )}

{
  open==false?<div className="block sm:hidden" onClick={toggle}>
        <FaBars className="text-3xl cursor-pointer" />
      </div>:
      <div className="block sm:hidden" onClick={toggle}>
      <MdClose />
      </div>
}
      
    </div>
  );
}

export default Navbar;



