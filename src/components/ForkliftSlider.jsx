import React from "react";
import { useTheme } from "../components/context/ThemeContext"; 

const companies = [
    { name: "VOLTAS", logo: "https://imgs.search.brave.com/j9o2EEgPqZY_aQmZdc5Xr-xiydiT2ph_puhREZICYAw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90b3Bw/bmcuY29tL3VwbG9h/ZHMvcHJldmlldy9n/b2RyZWotbG9nby12/ZWN0b3ItZnJlZS0x/MTU3NDE5NjAwOGJk/cTJqeXhpdncucG5n" },
    { name: "TOYOTA", logo: "https://imgs.search.brave.com/j9o2EEgPqZY_aQmZdc5Xr-xiydiT2ph_puhREZICYAw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90b3Bw/bmcuY29tL3VwbG9h/ZHMvcHJldmlldy9n/b2RyZWotbG9nby12/ZWN0b3ItZnJlZS0x/MTU3NDE5NjAwOGJk/cTJqeXhpdncucG5n" },
    { name: "ACE", logo: "https://imgs.search.brave.com/j9o2EEgPqZY_aQmZdc5Xr-xiydiT2ph_puhREZICYAw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90b3Bw/bmcuY29tL3VwbG9h/ZHMvcHJldmlldy9n/b2RyZWotbG9nby12/ZWN0b3ItZnJlZS0x/MTU3NDE5NjAwOGJk/cTJqeXhpdncucG5n" },
    { name: "GODREJ", logo: "https://imgs.search.brave.com/j9o2EEgPqZY_aQmZdc5Xr-xiydiT2ph_puhREZICYAw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90b3Bw/bmcuY29tL3VwbG9h/ZHMvcHJldmlldy9n/b2RyZWotbG9nby12/ZWN0b3ItZnJlZS0x/MTU3NDE5NjAwOGJk/cTJqeXhpdncucG5n" },
];

const ForkliftSlider = () => {
        const { dark } = useTheme();   
    
    return (
        <section className={`py-6 bg-gray-50 ${
                dark ? "dark-bg" : "bg-[#f5f7f9]"
            }`}>
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-10">
                    Our <span className=" text-(--primary-color)">Partners</span>
                </h2>

                {/* Scrollable list */}
                <div className="flex gap-6 overflow-x-auto py-4 px-2 justify-center">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="  flex  items-center justify-center text-center transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="w-24 h-24 object-contain mb-4"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForkliftSlider;
