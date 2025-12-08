import React from "react";

const images = [
    "https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682144591991-585764d2a651?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1678341432302-b929fd24080c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1596791488417-b2e1af8e7116?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1582297649766-c07106890cea?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524514587686-e2909d726e9b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

const Gallery = () => {
    return (
        <div className="bg-[#f5f7f9] w-full py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                 <h2 className="text-4xl font-semibold text-center mb-5">
                    Our <span className="text-pink-600">Gallery</span>
                </h2>

                {/* Grid */}
                <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                       <div className="bg-white shadow-2xl px-3 pt-2 pb-5 gallery-item "  key={index}>
                         <div
                           
                            className="relative overflow-hidden shadow-xl group animate-fadeIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <img
                                src={img}
                                alt="gallery"
                                className=" w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                            />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <p className="text-white text-lg font-semibold tracking-wide">
                                    View Image
                                </p>
                            </div>

                        </div>
                            <p className="text-center mt-2 font-bold text-xl">My Image is here</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Gallery;
