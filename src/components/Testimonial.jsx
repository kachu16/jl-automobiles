import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "JL Automobiles gave me the best car buying experience ever. The staff was extremely supportive and knowledgeable!",
    emoji: "🚗",
  },
  {
    name: "Priya Verma",
    review:
      "Excellent service and quick delivery. Their detailing and maintenance service is top-notch!",
    emoji: "✨",
  },
  {
    name: "Aman Singh",
    review:
      "Highly satisfied with the customer support. They helped me choose the perfect car for my family.",
    emoji: "😊",
  },
  {
    name: "Kunal Mehra",
    review:
      "Amazing customer service! I will definitely recommend JL Automobiles to friends and family.",
    emoji: "👍",
  },
];

function Testimonial() {
  const settings = {
    className: "center",
    centerMode: true,
    arrows: false,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="testimonial w-full mx-auto py-20">
      <h2 className="text-4xl font-semibold text-center mb-10">
        What Our <span className="text-pink-600">Customers Say</span>
      </h2>

      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className="px-3">
            <div className="relative bg-white rounded-3xl p-8 pt-14 shadow-md hover:scale-[1.03] transition-all duration-300 ease-out text-center border border-pink-200">

              {/* Floating Emoji */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#f5f7f9] p-4 rounded-full flex items-center justify-center text-5xl">
                {t.emoji}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                “{t.review}”
              </p>

              {/* Name */}
              <h3 className="text-xl font-bold text-pink-600">— {t.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
