import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND SECTION */}
        <div>
          <h2 className="text-2xl font-extrabold text-(--primary-color) mb-4">
            JL Automobiles
          </h2>
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
            <li><a href="#" className="hover:text-(--tertiary-color)">Home</a></li>
            <li><a href="#" className="hover:text-(--tertiary-color)">About</a></li>
            <li><a href="#" className="hover:text-(--tertiary-color)">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold text-(--primary-color) mb-4">
            Contact
          </h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <p>42/7 Industrial Area, Delhi – 110001, India</p>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <p>+91 98765 43210</p>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-2xl">✉️</span>
              <p>contact@jlautomobiles.com</p>
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="text-xl font-semibold text-(--primary-color) mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl">
            <a href="#" className="hover:text-(--tertiary-color)">📘 </a>
            <a href="#" className="hover:text-(--tertiary-color)">📷</a>
            <a href="#" className="hover:text-(--tertiary-color)">🐦</a>
            <a href="#" className="hover:text-(--tertiary-color)">▶️</a>
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
