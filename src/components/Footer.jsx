import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND SECTION */}
        <div>
          <Link to="/">
            <h2 className="cursor-pointer text-2xl font-extrabold text-(--primary-color) mb-4">
              JL Automobiles
            </h2>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Premium automobiles, trusted service, and a commitment to excellence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-(--primary-color) mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-(--tertiary-color)">Home</Link></li>
            <li><Link to="/about" className="hover:text-(--tertiary-color)">About Us</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-(--tertiary-color)">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO (UPDATED AS PER CARD) */}
        <div>
          <h3 className="text-xl font-semibold text-(--primary-color) mb-4">
            Contact
          </h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <p>Near Durga Mandir, Naichana Road, Bawal (Rewari), Haryana</p>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <p>
                09215686748 <br />
                09446586748
              </p>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-2xl">✉️</span>
              <p>contact.jlautomobiles@gmail.com</p>
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="text-xl font-semibold text-(--primary-color) mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/" className="hover:text-(--tertiary-color)">
              <FaLinkedin />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" className="hover:text-(--tertiary-color)">
              <FaInstagram />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className="hover:text-(--tertiary-color)">
              <FaFacebook />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/" className="hover:text-(--tertiary-color)">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 text-center text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} JL Automobiles — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
