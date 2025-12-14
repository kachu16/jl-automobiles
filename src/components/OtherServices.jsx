import {
  FaCogs,
  FaTachometerAlt,
  FaCertificate,
  FaOilCan,
  FaCog,
  FaFan,
  FaTools,
  FaCircle,
} from "react-icons/fa";
import { useTheme } from "../components/context/ThemeContext";
import Slider from "react-slick";
import { products } from "./data/otherServicesData";

const OtherServices = () => {
  const { dark } = useTheme();
  const imageSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <section className={`py-20 product-container ${dark ? "dark-bg2" : "bg-white"
      }`} id="products">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">
          Other <span className="text-(--primary-color)">Services</span>
        </h2>
        <p className={`max-w-2xl mx-auto mt-3 ${dark ? "text-white" : "text-gray-600"}`}>
          Our product range includes all essential components—from tyres and rims to oils, radiators, and precision-engineered cylinder seals
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {products.map((service) => (
          <div
            key={service.id}
            className="service-main group relative overflow-hidden rounded-xl"
          >
            {/* IMAGE CAROUSEL */}
            <Slider {...imageSliderSettings}>
              {service.images?.map((img, idx) => (
                <>
                  <img
                    src={img}
                    alt={service.title}
                    className="w-full h-64 object-cover" key={idx}
                  />
                </>
              ))}
            </Slider>

            {/* OVERLAY */}
            <div className="service-overlay"></div>

            {/* CONTENT */}
            <div className="service-title">
              <h3 className="font-bold text-white mt-2">
                {service.title}
              </h3>
              <div className="w-8 h-1 bg-(--primary-color) mt-1"></div>
            </div>

            <p className="other-service-para service-para text-sm text-gray-200">
              {service.desc}
            </p>
          </div>
        ))}

      </div>


    </section>
  );
};

export default OtherServices;
