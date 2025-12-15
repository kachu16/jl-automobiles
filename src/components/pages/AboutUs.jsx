import React from "react";
import { useTheme } from "../context/ThemeContext";

const AboutUs = () => {
  const { dark } = useTheme()
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative bg-center bg-no-repeat h-[300px] flex items-center"
        style={{
          backgroundImage:
            "url('https://imgs.search.brave.com/YoK2eFjachAkgNnOoVkzzVJGYJE8eD0YQxsWMsqqwcc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXFzZGlyZWN0b3J5/LmNvbS9hcnRpY2xl/cy9mb3JrbGlmdC9m/b3JrbGlmdC10cnVj/a3MvZm9ya2xpZnQt/dHJ1Y2stbWFzdC10/eXBlcy1vZi1zdGFn/ZXMuanBn')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Heading */}
        <div className="relative text-center text-white px-6 max-w-3xl mx-auto">
          <h2 className="text-5xl font-semibold">About Us</h2>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className={`py-16  ${dark ? "dark-bg2" : "bg-[#f5f7f9]"}`}>
        <div className="max-w-6xl mx-auto px-6">

          <h3 className="text-3xl font-bold mb-6">
            About <span className="text-(--primary-color)">JL Automobiles</span>
          </h3>

          <div className={`space-y-5  leading-relaxed ${dark ? 'text-white' : 'text-gray-700'}`}>
            <p>
              JL Automobiles was founded in 2009 by two visionary friends,
              <strong> Jamanlal</strong> and <strong>Sunder Singh</strong>, who
              shared a simple but powerful belief: businesses deserve reliable
              forklift solutions they can trust.
            </p>

            <p>
              Having worked for years in the industrial sector, they witnessed a
              major challenge across companies—unreliable service partners,
              expensive repairs, and machines breaking down when needed the
              most.
            </p>

            <p>
              Determined to change this, they left their stable jobs and began JL
              Automobiles in a small rented workshop with limited tools, but with
              a strong vision to deliver honest, affordable, and high-quality
              forklift services.
            </p>

            <blockquote className={`border-l-4 border-(--primary-color) pl-4 italic  ${dark ? "text-white" : "text-gray-800"}`}>
              “We will build a company known for trust, expertise, and long-term
              support.”
            </blockquote>

            <p>
              Over the years, that vision has shaped JL Automobiles into a
              leading forklift service provider. Today, the company offers a
              complete range of solutions, including buying and selling
              forklifts, repairing and customizing machines, preventive
              maintenance, and high-quality spare parts supply.
            </p>

            <p>
              With a dedicated rental fleet of <strong>25+ forklifts</strong>, JL
              Automobiles ensures businesses never face downtime.
            </p>

            <p>
              We proudly serve <strong>35+ companies</strong>, supported by a
              team of <strong>20+ experienced professionals</strong>, many of
              whom bring over <strong>15 years of industry expertise</strong>.
              Every engineer is fully certified and trained to deliver precise,
              safe, and reliable service.
            </p>

            <p>
              Driven by passion and founded on trust, JL Automobiles continues to
              grow while staying true to its original vision—providing dependable
              forklift solutions that keep industries moving.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
