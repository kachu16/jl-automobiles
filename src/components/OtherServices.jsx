import React from "react";

const services = [
  {
    icon: "🛠️",
    title: "Car Repair & Maintenance",
    desc: "Complete engine checkups, servicing, repairs, and premium maintenance.",
  },
  {
    icon: "🧼",
    title: "Car Wash & Detailing",
    desc: "Premium interior and exterior cleaning with ceramic and foam wash.",
  },
  {
    icon: "🔧",
    title: "Custom Modifications",
    desc: "Body kits, custom exhaust, lighting upgrades, and interior modifications.",
  },
  {
    icon: "🔋",
    title: "Battery Replacement",
    desc: "Fast and reliable battery diagnostics and replacement service.",
  },
  {
    icon: "🛞",
    title: "Tyre & Wheel Services",
    desc: "Alignment, balancing, tyre change, alloy wheels, and nitrogen filling.",
  },
  {
    icon: "🚘",
    title: "Car Accessories",
    desc: "Seat covers, music systems, dash cams, floor mats, and more.",
  },
];

const OtherServices = () => {
  return (
    <div className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
      <h2 className="text-4xl font-semibold text-center mb-5">
                    Other <span className="text-pink-600">Services</span>
                </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="text-2xl font-bold text-pink-600 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default OtherServices;
