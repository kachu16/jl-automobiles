import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold  text-(--primary-color) transition-all duration-300">
          JL Automobiles
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="font-bold transition-all duration-300 hover:text-(--primary-color) hover:scale-105"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="font-bold transition-all duration-300 hover:text-(--primary-color) hover:scale-105"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/terms-and-conditions"
              className="font-bold transition-all duration-300 hover:text-(--primary-color) hover:scale-105"
            >
              Terms & Conditions
            </Link>
          </li>

          <li>
            <a
              href="https://wa.me/+919729651574?text=Hello%20I%20need%20assistance%20regarding%20your%20services.%20Please%20help%20me%20with%20the%20details.
"
              target="_blank"
              className="bg-(--primary-color) font-bold text-white px-4 py-2 rounded transition-all duration-300 hover:bg-(--secondary-color) hover:scale-105"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </div>

      {/* Mobile Menu With Slide + Fade Transition */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden 
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="bg-white shadow-md flex flex-col gap-4 p-4 text-gray-700 font-medium">

          <li>
            <Link
              to="/"
              className="transition-all duration-300 hover:text-(--primary-color) hover:translate-x-2"
            >
              Home
            </Link>
          </li>



          <li>
            <Link
              to="/about"
              className="transition-all duration-300 hover:text-(--primary-color) hover:translate-x-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/terms-and-conditions"
              className="transition-all duration-300 hover:text-(--primary-color) hover:translate-x-2"
            >
              Terms & Conditions
            </Link>
          </li>

          <li>
            <a
              href="https://wa.me/+919729651574?text=Hello%20I%20need%20assistance%20regarding%20your%20services.%20Please%20help%20me%20with%20the%20details.
" target="_blank"
              className="bg-(--primary-color) text-white px-4 py-2 rounded text-center transition-all duration-300 hover:bg-(--secondary-color) hover:scale-105"
            >
              Contact
            </a>
          </li>

        </ul>


      </div>
    </nav>
  );
};

export default Navbar;



