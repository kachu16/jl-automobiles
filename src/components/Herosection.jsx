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
    "hero1.png",
    "hero2.png",
    "hero3.png"
  ];

  return (
    <section className="pt-15 relative w-full h-[80vh] md:h-screen overflow-hidden">

      {/* CAROUSEL */}
      <Slider {...settings} className="h-full">
        {slides.map((src, i) => (
          <div key={i}>
            <img
              src={src}
              className="w-full h-[80vh] md:h-screen object-cover"
              alt=""
            />
          </div>
        ))}
      </Slider>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* TEXT ON TOP */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">

        <h1 className="bg-linear-to-r from-(--primary-color) via-(--secondary-color) to-(--tertiary-color) bg-clip-text text-transparent text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          JL Automobiles
        </h1>

        <p className="text-white text-lg md:text-xl font-bold mb-6 drop-shadow-lg">
          Your trusted partner for reliable forklifts and industrial solutions.

        </p>

        <div className="flex gap-4">
          <a
            href="#services"
            className="bg-(--primary-color) px-4 py-2 rounded-md text-white font-semibold
                       hover:bg-(--secondary-color) transition-all"
          >
            Explore Services
          </a>

          <a
            href="#visit-us"
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
