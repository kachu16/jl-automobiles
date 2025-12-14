import React from "react";
import {
    FaWarehouse,
    FaIndustry,
    FaBoxes,
    FaTruckLoading,
    FaCogs,
    FaBatteryFull,
} from "react-icons/fa";
import { useTheme } from "../components/context/ThemeContext";
import { Link } from "react-router-dom";

const categories = [
    {
        title: "Warehouse Forklift",
        icon: FaWarehouse,
        desc: "Ideal for indoor material handling and storage operations.",
    },
    {
        title: "Industrial Forklift",
        icon: FaIndustry,
        desc: "Heavy-duty forklifts for industrial environments.",
    },
    {
        title: "Pallet Truck",
        icon: FaBoxes,
        desc: "Efficient solution for short-distance pallet movement.",
    },
    {
        title: "Reach Truck",
        icon: FaTruckLoading,
        desc: "Designed for narrow aisles and high stacking.",
    },
    {
        title: "Diesel Forklift",
        icon: FaCogs,
        desc: "Powerful forklifts for outdoor and rough usage.",
    },
    {
        title: "Electric Forklift",
        icon: FaBatteryFull,
        desc: "Eco-friendly forklifts with low noise and emissions.",
    },
];

const ForkliftCategories = () => {
    const { dark } = useTheme();

    return (
        <>
            <Link to='/products'>
                <section
                    className={`cursor-pointer py-16 ${dark ? "dark-bg" : "bg-[#f5f7f9]"
                        }`}
                >
                    <div className="max-w-6xl mx-auto px-6">
                        {/* Heading */}
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-semibold">
                                Forklift{" "}
                                <span className="text-(--primary-color)">
                                    Categories
                                </span>
                            </h2>
                            <p
                                className={`max-w-2xl mx-auto mt-3 ${dark ? "text-gray-300" : "text-gray-600"
                                    }`}
                            >
                                industries, warehouses, and manufacturing units.
                            </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {categories.map((item, index) => (
                                <div
                                    key={index}
                                    className={`rounded-2xl p-6 shadow-md hover:shadow-lg transition
                         hover:-translate-y-1 ${dark ? "bg-black" : "bg-white"}`}
                                >
                                    <item.icon className="text-4xl mb-4 text-(--primary-color)" />
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className={` text-sm ${dark ? "text-white" : "text-gray-600"}`}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Link >
        </>
    );
};

export default ForkliftCategories;
