import React from "react";

const VisitUs = () => {
  return (
    <div id="visit-us" className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-extrabold text-(--primary-color) mb-6">
            Visit Us
          </h2>

          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">

            <div className="flex gap-4 items-start">
              <span className="text-3xl">📍</span>
              <p className="font-bold">
                <span className="font-semibold text-(--primary-color) text-xl">JL Automobiles</span><br />
                42/7 Industrial Area, <br />
                Near Metro Station, Delhi – 110001, India
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-2xl">📞</span>
              <p className="font-semibold">+91 98765 43210</p>
              <p className="font-semibold">+91 12345 43210</p>
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-2xl">✉️</span>
              <p className="font-semibold">contact@jlautomobiles.com</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.24132291387!2d77.06889778803382!3d28.527280343113906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfba311f7aabf%3A0x80b1d1a68d0c97bd!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default VisitUs;
