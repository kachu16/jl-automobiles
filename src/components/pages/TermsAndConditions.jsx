import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="w-full py-20 px-6 min-h-screen">
      <div className="w-full bg-white  p-10">
        {/* Heading */}
        <h1
          className="text-4xl font-bold mb-6"
          style={{ color: "var(--primary-color)" }}
        >
          Terms & Conditions
        </h1>

        <p className="text-gray-700 mb-6">
          Welcome to JL Automobiles! By accessing or using our services, you agree to comply
          with and be bound by the following terms and conditions. Please read them carefully.
        </p>

        {/* Sections */}
        {[
          {
            title: "Use of Services",
            content:
              "Our services are provided for personal and professional use. Users must not misuse or interfere with our services in any way.",
          },
          {
            title: "Account Responsibility",
            content:
              "Users are responsible for maintaining the confidentiality of account credentials and are liable for all activities under their account.",
          },
          {
            title: "Privacy",
            content:
              "Your personal data is handled according to our privacy policy. We prioritize security and confidentiality of your information.",
          },
          {
            title: "Limitation of Liability",
            content:
              "JL Automobiles shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.",
          },
          {
            title: "Modifications",
            content:
              "We reserve the right to update or modify these terms at any time. Continued use of services constitutes acceptance of updated terms.",
          },
          {
            title: "Governing Law",
            content:
              "These terms are governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles.",
          },
        ].map((section, index) => (
          <section className="mb-6 w-full" key={index}>
            <h2
              className="text-2xl font-semibold mb-3"
              style={{ color: "var(--secondary-color)" }}
            >
              {index + 1}. {section.title}
            </h2>
            <p className="text-gray-700">{section.content}</p>
          </section>
        ))}

        {/* CTA */}
        <div className="text-center mt-10">
         <a href="https://wa.me/+919729651574?text=Hello%20I%20need%20assistance%20regarding%20your%20services.%20Please%20help%20me%20with%20the%20details." target="_blank">
           <button
            className="w-full md:w-auto px-8 py-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "white",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--secondary-color)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--primary-color)")
            }
          >
            Accept & Continue
          </button>
         </a>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
