import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=1500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=1500&auto=format&fit=crop&q=80"
  ];

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">

      {/* CAROUSEL */}
      <Slider {...settings} className="h-full">
        {slides.map((src, i) => (
          <div key={i}>
            <img
              src={src}
              className="w-full h-[80vh] md:h-[90vh] object-cover"
              alt=""
            />
          </div>
        ))}
      </Slider>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* TEXT ON TOP */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">

        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          JL Automobiles
        </h1>

        <p className="text-white text-lg md:text-xl font-bold mb-6 drop-shadow-lg">
          Forklift Rental • Hydraulic Hose • Spares & Maintenance
        </p>

        <div className="flex gap-4">
          <a
            href="/services"
            className="bg-pink-600 px-4 py-2 rounded-md text-white font-semibold
                       hover:bg-pink-700 transition-all"
          >
            Explore Services
          </a>

          <a
            href="/contact"
            className="border border-white px-4 py-2 rounded-md text-white font-semibold
                       hover:bg-white hover:text-black transition-all"
          >
            Visit Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
