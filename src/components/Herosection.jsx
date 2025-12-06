import React from "react";

const HeroSection = () => {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center">

            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjaGluZXN8ZW58MHx8MHx8fDA%3D")`
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-3xl">

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4
                       animate-fadeIn">
                    JL Automobiles
                </h1>

                <p className="text-lg md:text-2xl font-light mb-8 animate-fadeIn delay-200">
                    Forklift Rental • Hydraulic Hose • JCB & Hydra Repairs • Spares & Maintenance
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4 animate-fadeIn delay-300">
                    <a
                        href="/services"
                        className="bg-pink-600 px-6 py-3 rounded-md text-lg font-semibold 
                       transition-all duration-300 hover:bg-pink-700 hover:scale-105"
                    >
                        Explore Services
                    </a>

                    <a
                        href="/contact"
                        className="border border-white px-6 py-3 rounded-md text-lg font-semibold 
                       transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
