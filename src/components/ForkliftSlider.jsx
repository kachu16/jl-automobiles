import React from "react";
import Slider from "react-slick";
import { companies } from "./data/companyData";
import { useTheme } from "../components/context/ThemeContext";

const ForkliftSlider = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 0,     // IMPORTANT
        speed: 6000,          // controls movement speed
        cssEase: "linear",    // smooth continuous motion

        pauseOnHover: true,
        pauseOnFocus: true,
        swipe: true,
        draggable: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 6 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 3 },
            },
        ],
    };
    const { dark } = useTheme();
    return (
        <section className={`py-8 ${dark ? 'dark-bg' : "bg-[#f5f7f9]"}`}>
            <div className="text-center mb-10">
                <h2 className="text-4xl font-semibold">
                    Our{" "}
                    <span className="text-(--primary-color)">
                        Partners
                    </span>
                </h2>

            </div>
            <div>
                <Slider {...settings}>
                    {companies.map((company, index) => (
                        <div key={index}>
                            <div >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className=" object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ForkliftSlider;
