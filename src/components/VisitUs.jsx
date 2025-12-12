import React from "react";
import { useTheme } from "../components/context/ThemeContext";

const VisitUs = () => {
  const { dark } = useTheme();


  return (
    <div id="visit-us" className={`w-full py-16 px-6 ${dark? "dark-bg2" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-extrabold text-(--primary-color) mb-6">
            Visit Us
          </h2>

          <div className={`space-y-5 ${dark ? "text-white" : "text-gray-700"} text-lg leading-relaxed`}>

            {/* ADDRESS */}
            <div className="flex gap-4 items-start">
              <span className="text-3xl">📍</span>
              <p className="font-bold">
                <span className="font-semibold text-(--primary-color) text-xl">
                  JL Automobiles
                </span>
                <br />
                Near Durga Mandir, <br />
                Naichana Road, Bawal (Rewari)
              </p>
            </div>

            {/* PHONE NUMBERS */}
            <div className="flex gap-4 items-center">
              <span className="text-2xl">📞</span>
              <p className="font-semibold">+91-9215686748</p>
              <p className="font-semibold">+91-9215686747</p>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4 items-center">
              <span className="text-2xl">✉️</span>
              <p className="font-semibold">contact.jlautomobiles@gmail.com</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE : MAP */}
        <div className="w-full h-96 rounded-md overflow-hidden shadow-2xl">
          <iframe
            title="map"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.955433411237!2d76.586!3d28.090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d5cffffffffff%3A0x0000000000000000!2sBawal%2C%20Rewari%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default VisitUs;
