
import React from "react";

const AboutUs = () => {
  return (
    <section className="py-20 bg-[#f5f7f9]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">
            About <span className="text-pink-600">Us</span>
          </h2>
          <p className="text-gray-600  mt-4 text-lg">
            At JL Automobiles, our mission is to provide exceptional automotive services
            and a seamless car buying experience. With a passion for excellence and 
            customer satisfaction, we strive to deliver quality solutions tailored to your needs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Text Section */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Founded with the vision of creating a trusted automotive hub, JL Automobiles
              has been at the forefront of delivering innovative solutions, expert advice,
              and reliable services. Our team of professionals ensures every client feels
              valued and supported throughout their journey with us.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We offer comprehensive services, from car maintenance and repairs to custom
              modifications and accessories, all designed to enhance your vehicle and driving
              experience. Quality, trust, and transparency are the pillars of our service philosophy.
            </p>

            <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-pink-700 transition-all duration-300">
              Learn More →
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://imgs.search.brave.com/1RcToshWaxUdZu8edu2NPQHQadOy-J4U9NJAgQaVo2I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9l/eHByZXNzaXZlLXJl/ZGhlYWQtYmVhcmRl/ZC1tYW4td2l0aC1o/YXRfMTc2NDIwLTMy/MjY2LmpwZz9zZW10/PWFpc19zZV9lbnJp/Y2hlZCZ3PTc0MCZx/PTgw"
              alt="About Us"
              className="rounded-3xl shadow-xl object-cover w-full h-96"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
