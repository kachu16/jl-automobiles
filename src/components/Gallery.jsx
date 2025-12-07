import React from "react";

const images = [
    "https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682144591991-585764d2a651?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1678341432302-b929fd24080c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1596791488417-b2e1af8e7116?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1582297649766-c07106890cea?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524514587686-e2909d726e9b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1135714764/photo/metalworking-machines-working-mechanisms.jpg?s=1024x1024&w=is&k=20&c=XfxNW6yai0cHZPOROrgq5TStYdPpeDusHdVf0zLSFOE=",
    "https://media.istockphoto.com/id/601027902/photo/rotating-head-with-drilling-machine-bits-and-tools-at-cnc.jpg?s=1024x1024&w=is&k=20&c=lRHF1TKAdKs1FVHZbv74iDcOjuht_XykcvolxMmJca0=",
    "https://media.istockphoto.com/id/495734789/photo/part-of-machine-for-metal-industry.jpg?s=1024x1024&w=is&k=20&c=gOq--_B_U0hBh9cl2wzZc5WfDbMZEf4sE24C1nCLxks=",
];

const Gallery = () => {
    return (
        <div className="bg-[#f5f7f9] w-full py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                 <h2 className="text-4xl font-semibold text-center mb-5">
                    Our <span className="text-pink-600">Gallery</span>
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-2xl shadow-xl group animate-fadeIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <img
                                src={img}
                                alt="gallery"
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <p className="text-white text-lg font-semibold tracking-wide">
                                    View Image
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Gallery;
