import Slider from "react-slick";
import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";
import { testimonials } from "./data/testimonialData";
import { useTheme } from "../components/context/ThemeContext";

const Testimonials = () => {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const { dark } = useTheme();

  return (
    <section className={`py-20 transition-all duration-300 ${dark ? "dark-bg2" : "bg-white"
      }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold">
            What{" "}
            <span className="text-(--primary-color)">
              Our Customers Say
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

        {/* SLIDER */}
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-3 ">
              <div className={`rounded-2xl p-6 shadow-md hover:shadow-lg transition h-full ${dark ? "bg-black" : "bg-[#f5f7f9]"}`}>
                {/* Quote */}
                <FaQuoteLeft className="text-(--primary-color) text-4xl mb-4" />

                {/* User */}
                <div className="flex items-center gap-4 mb-3">
                  <FaUserCircle className={`text-5xl ${dark ? "text-white" : "text-gray-400"}`} />
                  <div>
                    <h3 className={`font-semibold text-lg ${dark ? "text-white" : "text-gray-900"}`}>
                      {item.name}
                    </h3>
                    <div className="flex gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-(--primary-color) text-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <p className={` text-sm leading-relaxed ${dark ? "text-white" : "text-gray-600"}`}>
                  “{item.text}”
                </p>

                <button className="mt-3 text-sm font-medium text-(--primary-color) hover:underline">
                  Contact Me
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
