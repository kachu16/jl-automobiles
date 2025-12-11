import React from "react";
import Slider from "react-slick";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Customer",
    review:
      "JL Automobiles gave me the best car buying experience ever. The staff was extremely supportive and knowledgeable!",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",

  },
  {
    name: "Priya Verma",
    role: "Customer",
    review:
      "Excellent service and quick delivery. Their detailing and maintenance service is top-notch!",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",

  },
  {
    name: "Aman Singh",
    role: "Customer",
    review:
      "Highly satisfied with their support team. They helped me choose the perfect car for my family.",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

const Testimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-10">
          What Our <span className="text-(--primary-color)">Clients Say</span>
        </h2>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="p-3">
              <div
                className="
                  relative rounded-3xl p-10 shadow-lg 
                  transition-all duration-500 
                "
              >
                {/* TOP SECTION */}
                <div className="flex items-center justify-between">

                  {/* PROFILE INFO */}
                  <div className="flex items-center gap-4">

                    {/* Image + Decorations */}
                    <div className="relative">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                      />

                      {/* Golden floating dots */}
                      <span className="w-3 h-3 bg-(--secondary-color) rounded-full absolute -top-2 left-1"></span>
                      <span className="w-2 h-2 bg-(--tertiary-color) rounded-full absolute top-3 -left-2"></span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">{t.name}</h3>
                      <p className="text-(--primary-color)">{t.role}</p>
                    </div>
                  </div>

            
                </div>

                {/* REVIEW TEXT */}
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  “{t.review}”
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex gap-5 mt-8">
                  <a className="p-3 rounded-full border text-(--primary-color) hover:bg-(--primary-color) hover:text-white transition">
                    <FaTwitter size={18} />
                  </a>
                  <a className="p-3 rounded-full border text-(--primary-color) hover:bg-(--primary-color) hover:text-white transition">
                    <FaFacebookF size={18} />
                  </a>
                  <a className="p-3 rounded-full border text-(--primary-color) hover:bg-(--primary-color) hover:text-white transition">
                    <FaLinkedinIn size={18} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
