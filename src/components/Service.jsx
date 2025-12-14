import React, { useState, useRef, useEffect } from "react";
import {
    FaTruckLoading,
    FaShoppingCart,
    FaTools,
    FaFilter,
    FaBolt,
    FaCogs,
    FaSync,
    FaWrench,
} from "react-icons/fa";
import { useTheme } from "../components/context/ThemeContext";
import { services } from "./data/servicesData";

const Service = () => {
    const [showMore, setShowMore] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    const { dark } = useTheme();

    useEffect(() => {
        if (showMore) {
            setHeight(`${contentRef.current.scrollHeight + 40}px`);
        } else {
            setHeight("0px");
        }
    }, [showMore]);

    return (
        <section
            id="services"
            className={`py-20 transition-all duration-300 ${dark ? "dark-bg" : "bg-[#f5f7f9]"
                }`}
        >
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-semibold">
                    Our{" "}
                    <span className="text-(--primary-color)">
                        Services
                    </span>
                </h2>
                <p
                    className={`max-w-2xl mx-auto mt-3 ${dark ? "text-gray-300" : "text-gray-600"
                        }`}
                >
                    At JL Automobiles, we offer a complete range of forklift-related solutions
                    designed to support industries, warehouses, and manufacturing units.
                </p>
            </div>

            {/* Initial 4 Services */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {services.slice(0, 4).map((service) => (
                    <div key={service.id} className="service-main group relative overflow-hidden rounded-xl">
                        {/* IMAGE */}
                        <img
                            src="https://imgs.search.brave.com/CTw4XD4TT1YMthDsy4FIiZJMtI_K8Fu9d7kYaK6NIs4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/b3JrbGlmdC10cnVj/ay1pcy1saWZ0aW5n/LXBhbGxldC13aXRo/LWNhcmRib2FyZC1i/b3hlc18zNTkxMy0x/OTI1LmpwZz9zZW10/PWFpc191c2VyX3Bl/cnNvbmFsaXphdGlv/biZ3PTc0MCZxPTgw"
                            alt={service.title}
                            className="w-full h-64 object-cover"
                        />

                        <div className="service-overlay"></div>
                        {/* TITLE BLOCK */}
                        <div className="service-title">
                            <h3 className="font-bold text-white">
                                {service.title}
                            </h3>
                            <div className="w-8 h-1 bg-(--primary-color) mt-1"></div>
                        </div>

                        {/* ACCENT LINE */}
                        <p
                            className="service-para mt-4 text-sm text-gray-200 max-w-md
               
                 transition-all duration-500
              "
                        >
                            {service.desc}
                        </p>
                    </div>

                ))}
            </div>

            {/* Expand Section */}
            <div
                className="overflow-hidden transition-height duration-500 ease-in-out"
                style={{ height }}
            >
                <div ref={contentRef}>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-6">
                        {services.slice(4).map((service) => (
                            <div key={service.id} className="service-main group relative overflow-hidden rounded-xl">
                                {/* IMAGE */}
                                <img
                                    src="https://imgs.search.brave.com/CTw4XD4TT1YMthDsy4FIiZJMtI_K8Fu9d7kYaK6NIs4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/b3JrbGlmdC10cnVj/ay1pcy1saWZ0aW5n/LXBhbGxldC13aXRo/LWNhcmRib2FyZC1i/b3hlc18zNTkxMy0x/OTI1LmpwZz9zZW10/PWFpc191c2VyX3Bl/cnNvbmFsaXphdGlv/biZ3PTc0MCZxPTgw"
                                    alt={service.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="service-overlay"></div>

                                {/* TITLE BLOCK */}
                                <div className="service-title">
                                    <h3 className="font-bold text-white">
                                        {service.title}
                                    </h3>
                                    <div className="w-8 h-1 bg-(--primary-color) mt-1"></div>
                                </div>

                                {/* ACCENT LINE */}
                                <p
                                    className="service-para mt-4 text-sm text-gray-200 max-w-md
               
                 transition-all duration-500
              "
                                >
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="text-center mt-12">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="bg-(--primary-color) text-white px-8 py-3 rounded-full
                    font-medium shadow-lg hover:shadow-xl hover:bg-(--secondary-color)
                    transition-all duration-300 cursor-pointer"
                >
                    {showMore ? "Show Less →" : "Explore More →"}
                </button>
            </div>
        </section>
    );
};

export default Service;
