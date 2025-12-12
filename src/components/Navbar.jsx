import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow-md z-50 transition-all duration-300 ${
        dark ? "dark-bg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-(--primary-color)">
          JL Automobiles
        </h1>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-medium`}>
          <ul className="flex gap-8 items-center">
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
                href="https://wa.me/+919729651574?text=Hello%20I%20need%20assistance%20regarding%20your%20services.%20Please%20help%20me%20with%20the%20details."
                target="_blank"
                className="bg-(--primary-color) font-bold text-white px-4 py-2 rounded transition-all duration-300 hover:bg-(--secondary-color) hover:scale-105"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Theme Toggle (Rightmost) */}
          <button
            className="cursor-pointer p-2 rounded-full border border-gray-400 transition-all duration-300 hover:scale-110"
            onClick={toggleTheme}
          >
            {dark ? (
              <FaSun className="text-gray-200" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          <div className={`w-6 h-0.5 mb-1 ${dark ? "bg-white" : "bg-black"}`}></div>
          <div className={`w-6 h-0.5 mb-1 ${dark ? "bg-white" : "bg-black"}`}></div>
          <div className={`w-6 h-0.5 ${dark ? "bg-white" : "bg-black"}`}></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul
          className={`flex flex-col gap-4 p-4 font-medium shadow-md transition-all duration-300 ${
            dark ? "dark-bg" : "bg-white text-gray-700"
          }`}
        >
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

          {/* Mobile Contact + Theme Toggle Side-by-Side */}
          <li className="flex items-center justify-between gap-3">
            <a
              href="https://wa.me/+919729651574?text=Hello%20I%20need%20assistance%20regarding%20your%20services.%20Please%20help%20me%20with%20the%20details."
              target="_blank"
              className="bg-(--primary-color) text-white px-4 py-2 rounded flex-1 text-center transition-all duration-300 hover:bg-(--secondary-color)"
            >
              Contact
            </a>

            <button
              className="cursor-pointer p-2 rounded-full border border-gray-400 transition-all duration-300 hover:scale-110"
              onClick={toggleTheme}
            >
              {dark ? (
                <FaSun className="text-gray-200" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
