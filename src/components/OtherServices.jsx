import React from "react";
import { FaHeart, FaLeaf, FaUserFriends, FaGlobe } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaHeart className="text-pink-500 text-3xl" />,
    title: "Title Goes Here",
    desc: "Tailored to meet individual needs perfectly balanced.",
  },
  {
    id: 2,
    icon: <FaLeaf className="text-green-500 text-3xl" />,
    title: "Title Goes Here",
    desc: "Tailored to meet individual needs perfectly balanced.",
  },
  {
    id: 3,
    icon: <FaUserFriends className="text-indigo-500 text-3xl" />,
    title: "Title Goes Here",
    desc: "Tailored to meet individual needs perfectly balanced.",
  },
  {
    id: 4,
    icon: <FaGlobe className="text-orange-500 text-3xl" />,
    title: "Title Goes Here",
    desc: "Tailored to meet individual needs perfectly balanced.",
  },
];

const OtherServices = () => {
  return (
    <section className="py-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">
          Other <span className="text-pink-600">Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Our mission is to drive progress and enhance the lives of our customers by delivering
          superior products and services that exceed expectations.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="
      relative bg-gray-50 rounded-3xl p-6 pt-10 mb-2 shadow-md hover:scale-[1.03]
      transition-all duration-300 ease-out other-service-container cursor-pointer
    "
          >
            {/* Floating Icon */}
            <div
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mt-4">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2">{service.desc}</p>

          </div>

        ))}
      </div>

      
    </section>
  );
};

export default OtherServices;
