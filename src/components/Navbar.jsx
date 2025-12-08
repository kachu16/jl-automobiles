import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold  text-pink-600 transition-all duration-300">
          JL AUTOMOBILES
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="font-bold transition-all duration-300 hover:text-pink-600 hover:scale-105"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="#services"
              className="font-bold transition-all duration-300 hover:text-pink-600 hover:scale-105"
            >
              Services
            </Link>
          </li>

          <li>
            <a
              href="#products"
              className="font-bold transition-all duration-300 hover:text-pink-600 hover:scale-105"
            >
              Products
            </a>
          </li>

          <li>
            <Link
              to="/about"
              className="font-bold transition-all duration-300 hover:text-pink-600 hover:scale-105"
            >
              About
            </Link>
          </li>

          <li>
            <a
              href="/contact"
              className="bg-pink-600 font-bold text-white px-4 py-2 rounded transition-all duration-300 hover:bg-pink-700 hover:scale-105"
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
            <a
              href="/"
              className="transition-all duration-300 hover:text-pink-600 hover:translate-x-2"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/services"
              className="transition-all duration-300 hover:text-pink-600 hover:translate-x-2"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="/products"
              className="transition-all duration-300 hover:text-pink-600 hover:translate-x-2"
            >
              Products
            </a>
          </li>

          <li>
            <a
              href="/about"
              className="transition-all duration-300 hover:text-pink-600 hover:translate-x-2"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="bg-pink-600 text-white px-4 py-2 rounded text-center transition-all duration-300 hover:bg-pink-700 hover:scale-105"
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



