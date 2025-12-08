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

const Service = () => {
    return (
        <section id="services" className="py-20 bg-[#f5f7f9]">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-semibold">
                    Our <span className="text-pink-600">Services</span>
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
                        className="relative bg-white rounded-3xl p-6 pt-10 mb-2 shadow-md hover:scale-[1.03]
      transition-all duration-300 ease-out
    "
                    >
                        {/* Floating Icon */}
                        <div
                            className="
      absolute -top-6 left-[-13px]
      bg-[#f5f7f9] p-3 rounded-full 
      flex items-center justify-center
    "
                        >
                            {service.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold mt-4">{service.title}</h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mt-2">{service.desc}</p>

                        {/* Read More */}
                        <button className="cursor-pointer mt-4 text-sm font-medium text-pink-600 flex items-center gap-2 hover:gap-3 transition-all">
                            Read more →
                        </button>
                    </div>

                ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
                <button
                    className="
            bg-pink-600 text-white px-8 py-3 rounded-full
            font-medium shadow-lg hover:shadow-xl
            hover:bg-pink-700
            transition-all duration-300 cursor-pointer
          "
                >
                    Explore More →
                </button>
            </div>
        </section>
    );
};

export default Service;
