import React from "react";

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
];

const Testimonial = () => {
  return (
    <div className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
   <h2 className="text-4xl font-semibold text-center mb-5">
                    What Our <span className="text-pink-600">Customers Say</span>
                </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 border border-pink-200 hover:border-pink-400 transition-all animate-slideUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-5xl mb-4">{item.emoji}</div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                “{item.review}”
              </p>

              <h3 className="text-xl font-bold text-pink-600">
                — {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
