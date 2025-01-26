// // import React, { useState } from "react";
// // import { FaBars } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import { MdClose } from "react-icons/md";

// // function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   function toggle() {
// //     setOpen(!open);
// //   }

// // //   return (
// // //     <div className="flex flex-row justify-between w-full bg-custom-gradient text-white text-gray-800 text-xl font-bold px-6 py-4 sm:flex sm:flex-col md:flex">
// // //       {open ? (
// // //         <ul className="flex flex-col  items-center space-x-5 ">
// // //          <Link to='/'><li className="   hover:text-white  pl-3">Home</li></Link>
// // //          <Link to='/about'><li className="hover:text-white"> About</li></Link>
// // //          <Link to='/skills'><li className="hover:text-white">Skills</li></Link>
// // //          <Link to='/projects'><li className="hover:text-white">Projects</li></Link>
// // //         <Link to='/contact'><li className="hover:text-white">Contact</li></Link>
// // //         </ul>
// // //       ) : (
// // //         <ul className={`flex-col  sm:flex-row hidden sm:flex  justify-between items-center space-x-10`}>
// // //         <Link to='/'> <li className=" hover:text-white">Home</li></Link>
// // //         <Link to='/about'> <li className="hover:text-white">About</li></Link>
// // //         <Link to='/skills'> <li className="hover:text-white">Skills</li></Link>
// // //         <Link to='/projects'><li className="hover:text-white">Projects</li></Link>
// // //         <Link to='/contact'> <li className="hover:text-white">Contact</li></Link>
// // //         </ul>
// // //       )}

// // // {
// // //   open==false?<div className="block sm:hidden" onClick={toggle}>
// // //         <FaBars className="text-3xl cursor-pointer" />
// // //       </div>:
// // //       <div className="block sm:hidden" onClick={toggle}>
// // //       <MdClose />
// // //       </div>
// // // }

// // //     </div>
// // //   );
// // // }

// // // export default Navbar;

// // import React, { useState } from "react";
// // import { FaBars } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import { MdClose } from "react-icons/md";

// // function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   function toggle() {
// //     setOpen(!open);
// //   }

// //   return (
// //     <div className="w-full bg-gradient-to-r from-red-500 to-indigo-600 text-white py-4 px-6 shadow-lg fixed top-0 left-0 z-50">
// //       {/* Mobile Menu Toggle (Hamburger or Close Icon) */}
// //       <div className="sm:hidden block" onClick={toggle}>
// //         {open ? (
// //           <MdClose className="text-3xl cursor-pointer" />
// //         ) : (
// //           <FaBars className="text-3xl cursor-pointer" />
// //         )}
// //       </div>

// //       {/* Desktop and Mobile Navigation Links */}
// //       <div className="flex justify-between items-center">
// //         {/* Mobile Menu */}
// //         {open ? (
// //           <ul className="flex flex-col items-center space-y-6 w-full bg-gradient-to-r from-red-500 to-indigo-600 p-6 text-lg shadow-lg absolute top-16 left-0 sm:hidden">
// //             <Link to="/" onClick={() => setOpen(false)}>
// //               <li className="hover:text-yellow-300 transition duration-300">Home</li>
// //             </Link>
// //             <Link to="/about" onClick={() => setOpen(false)}>
// //               <li className="hover:text-yellow-300 transition duration-300">About</li>
// //             </Link>
// //             <Link to="/skills" onClick={() => setOpen(false)}>
// //               <li className="hover:text-yellow-300 transition duration-300">Skills</li>
// //             </Link>
// //             <Link to="/projects" onClick={() => setOpen(false)}>
// //               <li className="hover:text-yellow-300 transition duration-300">Projects</li>
// //             </Link>
// //             <Link to="/contact" onClick={() => setOpen(false)}>
// //               <li className="hover:text-yellow-300 transition duration-300">Contact</li>
// //             </Link>
// //           </ul>
// //         ) : (
// //           // Desktop Menu
// //           <ul className="hidden sm:flex sm:flex-row space-x-10 text-lg">
// //             <Link to="/">
// //               <li className="hover:text-yellow-300 transition duration-300">Home</li>
// //             </Link>
// //             <Link to="/about">
// //               <li className="hover:text-yellow-300 transition duration-300">About</li>
// //             </Link>
// //             <Link to="/skills">
// //               <li className="hover:text-yellow-300 transition duration-300">Skills</li>
// //             </Link>
// //             <Link to="/projects">
// //               <li className="hover:text-yellow-300 transition duration-300">Projects</li>
// //             </Link>
// //             <Link to="/contact">
// //               <li className="hover:text-yellow-300 transition duration-300">Contact</li>
// //             </Link>
// //           </ul>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Navbar;

// // import React, { useState, useEffect } from "react";
// // import { FaBars } from "react-icons/fa";
// // import { MdClose } from "react-icons/md";
// // import { Link } from "react-router-dom";
// // import { useContext } from "react";
// // import { ThemeContext } from "./context/PortContext";

// // function Navbar() {
// //   const [open, setOpen] = useState(false);
// //   const { theme, setTheme } = useContext(ThemeContext);

// //   const light = {
// //     background: "#fff",
// //     color: "#000",
// //   };

// //   const dark = {
// //     background: "#333",
// //     color: "#fff",
// //   };

// //   const toggleTheme = () => {
// //     setTheme(theme === light ? dark : light);
// //   };

// //   function toggle() {
// //     setOpen(!open);
// //   }

// //   return (
// //     <div>
// //       {/* Navbar Container */}
// //       <div className="flex justify-between items-center w-full bg-gradient-to-r from-red-500 to-indigo-600 text-white py-4 px-6 shadow-lg fixed top-0 left-0 z-50 dark:bg-gray-900 dark:text-gray-200">
// //         {/* Mobile Menu Toggle (Hamburger or Close Icon) */}
// //         <div className="sm:hidden block" onClick={toggle}>
// //           {open ? (
// //             <MdClose className="text-3xl cursor-pointer" />
// //           ) : (
// //             <FaBars className="text-3xl cursor-pointer" />
// //           )}
// //         </div>

// //         {/* Desktop and Mobile Navigation Links */}
// //         <div className="flex justify-between w-full items-center">
// //           {/* Mobile Menu */}
// //           {open ? (
// //             <ul className="flex flex-col items-center space-y-6 absolute top-16 left-0 w-full bg-gradient-to-r from-red-500 to-indigo-600 p-6 text-lg shadow-lg z-50 dark:bg-gray-800 dark:text-gray-300">
// //               <Link to="/" onClick={() => setOpen(false)}>
// //                 <li className="hover:text-yellow-300 transition duration-300">Home</li>
// //               </Link>
// //               <Link to="/about" onClick={() => setOpen(false)}>
// //                 <li className="hover:text-yellow-300 transition duration-300">About</li>
// //               </Link>
// //               <Link to="/skills" onClick={() => setOpen(false)}>
// //                 <li className="hover:text-yellow-300 transition duration-300">Skills</li>
// //               </Link>
// //               <Link to="/projects" onClick={() => setOpen(false)}>
// //                 <li className="hover:text-yellow-300 transition duration-300">Projects</li>
// //               </Link>
// //               <Link to="/contact" onClick={() => setOpen(false)}>
// //                 <li className="hover:text-yellow-300 transition duration-300">Contact</li>
// //               </Link>
// //             </ul>
// //           ) : (
// //             // Desktop Menu
// //             <ul className="hidden sm:flex sm:flex-row space-x-10 text-lg">
// //               <Link to="/">
// //                 <li className="hover:text-yellow-300 transition duration-300">Home</li>
// //               </Link>
// //               <Link to="/about">
// //                 <li className="hover:text-yellow-300 transition duration-300">About</li>
// //               </Link>
// //               <Link to="/skills">
// //                 <li className="hover:text-yellow-300 transition duration-300">Skills</li>
// //               </Link>
// //               <Link to="/projects">
// //                 <li className="hover:text-yellow-300 transition duration-300">Projects</li>
// //               </Link>
// //               <Link to="/contact">
// //                 <li className="hover:text-yellow-300 transition duration-300">Contact</li>
// //               </Link>
// //             </ul>
// //           )}
// //         </div>

// //         {/* Dark Mode Toggle */}
// //         <button
// //           onClick={toggleTheme}
// //           className={`ml-4 p-2 rounded-full transition duration-300 ${
// //             "bg-red-600 text-white hover:bg-red-400"
// //           }`}
// //         >
// //           <p>The current theme is {`${theme === light ? "Light" : "Dark"}`}</p>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Navbar;



// import React, { useState, useContext } from "react";
// import { FaBars } from "react-icons/fa";
// import { MdClose } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { ThemeContext } from "./context/PortContext"; // Import the ThemeContext

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const { theme, setTheme ,themeChanger} = useContext(ThemeContext); // Get the theme from the context
  

//   // Function to toggle between light and dark theme
//   const toggleTheme = () => {
//    // setTheme(!theme)
//   };
//   console.log(theme);
  

//   // Toggle the mobile menu
//   function toggle() {
//     setOpen(!open);
//   }

//   return (
//     <div className={`text-pink ${theme?'bg-black':'bg-white'}`}>
//       {/* Navbar Container */}
//       <div
//         className="flex justify-between items-center w-full py-4 px-6 shadow-lg fixed 
//       top-0 left-0 z-50"
//       >
//         {/* Mobile Menu Toggle (Hamburger or Close Icon) */}
//         <div className="sm:hidden block" onClick={toggle}>
//           {open ? (
//             <MdClose className="text-3xl cursor-pointer" />
//           ) : (
//             <FaBars className="text-3xl cursor-pointer" />
//           )}
//         </div>

//         {/* Desktop and Mobile Navigation Links */}
//         <div className="flex justify-between w-full items-center">
//           {/* Mobile Menu */}
//           {open ? (
//             <ul
//               className="flex flex-col items-center space-y-6 absolute top-16 left-0 w-full p-6 text-lg shadow-lg z-50"            >
//               <Link to="/" onClick={() => setOpen(false)}>
//                 <li className="hover:text-yellow-300 transition duration-300">
//                   Home
//                 </li>
//               </Link>
//               <Link to="/about" onClick={() => setOpen(false)}>
//                 <li className="hover:text-yellow-300 transition duration-300">
//                   About
//                 </li>
//               </Link>
//               <Link to="/skills" onClick={() => setOpen(false)}>
//                 <li className="hover:text-yellow-300 transition duration-300">
//                   Skills
//                 </li>
//               </Link>
//               <Link to="/projects" onClick={() => setOpen(false)}>
//                 <li className="hover:text-yellow-300 transition duration-300">
//                   Projects
//                 </li>
//               </Link>
//               <Link to="/contact" onClick={() => setOpen(false)}>
//                 <li className="hover:text-yellow-300 transition duration-300">
//                   Contact
//                 </li>
//               </Link>
//             </ul>
//           ) : (
//             // Desktop Menu
//             <ul className="hidden sm:flex sm:flex-row space-x-10 text-lg">
//               <Link to="/">
//                 <li className="hover:text-yellow-300 transition duration-300">
//                   Home
//                 </li>
//               </Link>
//               <Link to="/about">
//                 <li className="hover:text-yellow-300 transition duration-300">
//                   About
//                 </li>
//               </Link>
//               <Link to="/skills">
//                 <li className="hover:text-yellow-300 transition duration-300">
//                   Skills
//                 </li>
//               </Link>
//               <Link to="/projects">
//                 <li className="hover:text-yellow-300 transition duration-300">
//                   Projects
//                 </li>
//               </Link>
//               <Link to="/contact">
//                 <li className="hover:text-yellow-300 transition duration-300">
//                   Contact
//                 </li>
//               </Link>
//             </ul>
//           )}
//         </div>

//         {/* Dark Mode Toggle */}
//         <button
//           onClick={themeChanger}
//           className={`ml-4 p-2 rounded-full transition duration-300 ${
//             theme.background === "#fff"
//               ? "bg-red-600 text-white hover:bg-red-400"
//               : "bg-gray-700 text-gray-300 hover:bg-gray-500"
//           }`}
//         >
//           <p className={`text-pink ${theme?'bg-black':'bg-white'}`}>
//           {
//             theme?"dark":"light"
//           }
//           </p>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "./context/PortContext"; // Ensure ThemeContext is correctly imported

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, themeChanger } = useContext(ThemeContext); // Destructure theme and themeChanger from context

  // Toggle the mobile menu
  function toggle() {
    setOpen(!open);
  }

  return (
    <div className="bg-white font-bold">
      {/* Navbar Container */}
      <div
        className="flex justify-between items-center w-full py-4 px-6 bg-white shadow-lg fixed 
      top-0 left-0 z-50"
      >
        {/* Mobile Menu Toggle (Hamburger or Close Icon) */}
        <div className="sm:hidden block" onClick={toggle}>
          {open ? (
            <MdClose className="text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-3xl cursor-pointer" />
          )}
        </div>

        {/* Desktop and Mobile Navigation Links */}
        <div className="flex justify-between w-full items-center">
          {/* Mobile Menu */}
          {open ? (
            <ul className="flex flex-col items-center space-y-6 absolute top-16 left-0 w-full p-6 text-lg shadow-lg z-50 bg-gray-100">
              <Link to="/" onClick={() => setOpen(false)}>
                <li className="hover:text-pink-900 transition duration-300">Home</li>
              </Link>
              <Link to="/about" onClick={() => setOpen(false)}>
                <li className="hover:text-pink-900 transition duration-300">About</li>
              </Link>
              <Link to="/skills" onClick={() => setOpen(false)}>
                <li className="hover:text-pink-900 transition duration-300">Skills</li>
              </Link>
              <Link to="/projects" onClick={() => setOpen(false)}>
                <li className="hover:text-pink-900 transition duration-300">Projects</li>
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)}>
                <li className="hover:text-pink-900 transition duration-300">Contact</li>
              </Link>
            </ul>
          ) : (
            // Desktop Menu
            <ul className="hidden sm:flex sm:flex-row space-x-10 text-lg">
              <Link to="/">
                <li className="hover:text-pink-900 transition duration-300">Home</li>
              </Link>
              <Link to="/about">
                <li className="hover:text-pink-900 transition duration-300">About</li>
              </Link>
              <Link to="/skills">
                <li className="hover:text-pink-900 transition duration-300">Skills</li>
              </Link>
              <Link to="/projects">
                <li className="hover:text-pink-900 transition duration-300">Projects</li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-pink-900 transition duration-300">Contact</li>
              </Link>
            </ul>
          )}
        </div>

       
      </div>
    </div>
  );
}

export default Navbar;




