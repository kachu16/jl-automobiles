import React, { useState } from "react";
import { useTheme } from "../components/context/ThemeContext";

const images = [
  "https://imgs.search.brave.com/aSW37h56vUQqGePJJCctq6-2aXSFsgN2ierTxFqs-3A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9uZW9uLTNk/LWltYWdlLWZvcmts/aWZ0LXdhcmVob3Vz/ZS02MDBudy0yNDA1/MjE4OTU1LmpwZw",
  "https://imgs.search.brave.com/Vfb7MvHXVDUoKvkWFJ-I1-fq1aTaQRJkOfvFKSgQt3I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MzUwLzUyMC9zbWFs/bC9haS1nZW5lcmF0/ZWQtYS1mb3JrbGlm/dC10cnVjay1pcy1k/cml2aW5nLXRocm91/Z2gtYS13YXJlaG91/c2UtZnJlZS1waG90/by5qcGc",
  "https://imgs.search.brave.com/iSzyQEgpW67QmXvV7QIKxiVi5tpvQY5K5KLnRRMyZLk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9mb3JrbGlm/dC1oZWFkbGlnaHRz/LTYwMG53LTI0NTE1/NDgyNDcuanBn",
  "https://imgs.search.brave.com/fWaaIc-JDYYJRK9M9YLDkGcbn_j5Ma4Lqv2lsFO90WQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MzU0LzIxMi9zbWFs/bC9haS1nZW5lcmF0/ZWQtaGVhdnktbGlm/dC1mb3JrbGlmdC1k/cml2aW5nLWluLXdh/cmVob3VzZS13aXRo/LXN1bi1yYXlzLWlu/LWxpZ2h0LWZyZWUt/cGhvdG8uanBn",
  "https://imgs.search.brave.com/BydItquUTT64afzElUtYX3Ih8v65Eml0yKJ_EU0kYyA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzkv/MTkwLzUwOC9zbWFs/bC9haS1nZW5lcmF0/ZWQtZm9ya2xpZnQt/bG9hZGVyLWluLXdh/cmVob3VzZS1mcmVl/LXBob3RvLmpwZWc",
  "https://imgs.search.brave.com/G32B8VQzkIN6WT4teQ-WDZErgq8gR8TqBq3dLyha6ic/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9sYXJnZS1v/cmFuZ2UtZm9ya2xp/ZnQtaG9sZGluZy1t/YXNzaXZlLTYwMG53/LTI0Mjc0MTcwMzku/anBn",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { dark } = useTheme();

  return (
    <section className={`  w-full py-20 px-6 transition-all duration-300 ${
                dark ? "dark-bg" : "bg-[#f5f7f9]"
            }`}>
      <div className="max-w-7xl mx-auto">

        <h2 className={`text-4xl font-semibold mb-5 text-center ${dark ? "text-white" : "text-black"}`}>
          Our <span className="text-(--primary-color)">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {images.map((img, index) => (
            <div
              key={index}
              className="
                group rounded-2xl shadow-xl dark:shadow-lg dark:bg-dark-bg2 overflow-hidden relative 
                transform transition-all duration-700 
                hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-xl
                animate-slideUp
              "
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt="gallery"
                  className="
                    w-full h-72 object-cover 
                    transition-all duration-700 
                    group-hover:scale-110 group-hover:rotate-[2deg]
                  "
                />

                <div
                  className="
                    absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-700 flex items-center justify-center
                  "
                >
                  <p
                    className="
                      text-white text-xl font-semibold 
                      opacity-0 group-hover:opacity-100 
                      transition-all duration-700 tracking-wide
                    "
                  >
                    View Image
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="
              fixed inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-md z-50 
              flex items-center justify-center animate-fadeIn
            "
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute top-6 right-6 text-white text-3xl 
                font-bold bg-black/40 px-4 py-1 rounded-full 
                hover:bg-black/70 transition
              "
            >
              ✕
            </button>

            {/* Fullscreen Image */}
            <img
              src={selectedImage}
              alt="fullscreen"
              className="
                w-[700px] h-[450px] 
                object-cover 
                rounded-xl shadow-2xl animate-zoomIn
              "
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
