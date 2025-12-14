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

export const products = [
  {
    id: 1,
    icon: <FaCogs className="text-[var(--primary-color)] text-3xl" />,
    title: "Cylinder Seals (All Types)",
    desc: "Premium-quality cylinder seals designed for long-lasting hydraulic performance and complete leakage prevention for all forklift models.",
    images: [
      "https://imgs.search.brave.com/aSW37h56vUQqGePJJCctq6-2aXSFsgN2ierTxFqs-3A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9uZW9uLTNk/LWltYWdlLWZvcmts/aWZ0LXdhcmVob3Vz/ZS02MDBudy0yNDA1/MjE4OTU1LmpwZw",
      "https://imgs.search.brave.com/CTw4XD4TT1YMthDsy4FIiZJMtI_K8Fu9d7kYaK6NIs4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/b3JrbGlmdC10cnVj/ay1pcy1saWZ0aW5n/LXBhbGxldC13aXRo/LWNhcmRib2FyZC1i/b3hlc18zNTkxMy0x/OTI1LmpwZz9zZW10/PWFpc191c2VyX3Bl/cnNvbmFsaXphdGlv/biZ3PTc0MCZxPTgw",
      "https://imgs.search.brave.com/BhH6KeIeIZc-v5ohG61X17_sGHmWE2r4MDEKo0XWVPQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3lv/dGFmb3JrbGlmdC5z/Y2VuZTcuY29tL2lz/L2ltYWdlL3RveW90/YW1oL1BhcGVyJTIw/Um9sbCUyMFNwZWNp/YWxfU3R1ZGlvXzI5/P3FsdD04NSZ0cz0x/NzYxOTM0ODc0NTcw/JmRwcj1vZmY",
    ],
  },
  {
    id: 2,
    icon: <FaCogs className="text-[var(--primary-color)] text-3xl" />,
    title: "Cylinder Seals (All Types)",
    desc: "Premium-quality cylinder seals designed for long-lasting hydraulic performance and complete leakage prevention for all forklift models.",
    images: [
      "https://imgs.search.brave.com/aSW37h56vUQqGePJJCctq6-2aXSFsgN2ierTxFqs-3A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9uZW9uLTNk/LWltYWdlLWZvcmts/aWZ0LXdhcmVob3Vz/ZS02MDBudy0yNDA1/MjE4OTU1LmpwZw",
      "https://imgs.search.brave.com/CTw4XD4TT1YMthDsy4FIiZJMtI_K8Fu9d7kYaK6NIs4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/b3JrbGlmdC10cnVj/ay1pcy1saWZ0aW5n/LXBhbGxldC13aXRo/LWNhcmRib2FyZC1i/b3hlc18zNTkxMy0x/OTI1LmpwZz9zZW10/PWFpc191c2VyX3Bl/cnNvbmFsaXphdGlv/biZ3PTc0MCZxPTgw",
      "https://imgs.search.brave.com/BhH6KeIeIZc-v5ohG61X17_sGHmWE2r4MDEKo0XWVPQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3lv/dGFmb3JrbGlmdC5z/Y2VuZTcuY29tL2lz/L2ltYWdlL3RveW90/YW1oL1BhcGVyJTIw/Um9sbCUyMFNwZWNp/YWxfU3R1ZGlvXzI5/P3FsdD04NSZ0cz0x/NzYxOTM0ODc0NTcw/JmRwcj1vZmY",
    ],
  },
  {
    id: 3,
    icon: <FaCogs className="text-[var(--primary-color)] text-3xl" />,
    title: "Cylinder Seals (All Types)",
    desc: "Premium-quality cylinder seals designed for long-lasting hydraulic performance and complete leakage prevention for all forklift models.",
    images: [
      "https://imgs.search.brave.com/aSW37h56vUQqGePJJCctq6-2aXSFsgN2ierTxFqs-3A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9uZW9uLTNk/LWltYWdlLWZvcmts/aWZ0LXdhcmVob3Vz/ZS02MDBudy0yNDA1/MjE4OTU1LmpwZw",
      "https://imgs.search.brave.com/CTw4XD4TT1YMthDsy4FIiZJMtI_K8Fu9d7kYaK6NIs4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/b3JrbGlmdC10cnVj/ay1pcy1saWZ0aW5n/LXBhbGxldC13aXRo/LWNhcmRib2FyZC1i/b3hlc18zNTkxMy0x/OTI1LmpwZz9zZW10/PWFpc191c2VyX3Bl/cnNvbmFsaXphdGlv/biZ3PTc0MCZxPTgw",
      "https://imgs.search.brave.com/BhH6KeIeIZc-v5ohG61X17_sGHmWE2r4MDEKo0XWVPQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3lv/dGFmb3JrbGlmdC5z/Y2VuZTcuY29tL2lz/L2ltYWdlL3RveW90/YW1oL1BhcGVyJTIw/Um9sbCUyMFNwZWNp/YWxfU3R1ZGlvXzI5/P3FsdD04NSZ0cz0x/NzYxOTM0ODc0NTcw/JmRwcj1vZmY",
    ],
  },
  {
    id: 4,
    icon: <FaCogs className="text-[var(--primary-color)] text-3xl" />,
    title: "Cylinder Seals (All Types)",
    desc: "Premium-quality cylinder seals designed for long-lasting hydraulic performance and complete leakage prevention for all forklift models.",
    images: [
      "https://imgs.search.brave.com/aSW37h56vUQqGePJJCctq6-2aXSFsgN2ierTxFqs-3A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9uZW9uLTNk/LWltYWdlLWZvcmts/aWZ0LXdhcmVob3Vz/ZS02MDBudy0yNDA1/MjE4OTU1LmpwZw",
      "https://imgs.search.brave.com/CTw4XD4TT1YMthDsy4FIiZJMtI_K8Fu9d7kYaK6NIs4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/b3JrbGlmdC10cnVj/ay1pcy1saWZ0aW5n/LXBhbGxldC13aXRo/LWNhcmRib2FyZC1i/b3hlc18zNTkxMy0x/OTI1LmpwZz9zZW10/PWFpc191c2VyX3Bl/cnNvbmFsaXphdGlv/biZ3PTc0MCZxPTgw",
      "https://imgs.search.brave.com/BhH6KeIeIZc-v5ohG61X17_sGHmWE2r4MDEKo0XWVPQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3lv/dGFmb3JrbGlmdC5z/Y2VuZTcuY29tL2lz/L2ltYWdlL3RveW90/YW1oL1BhcGVyJTIw/Um9sbCUyMFNwZWNp/YWxfU3R1ZGlvXzI5/P3FsdD04NSZ0cz0x/NzYxOTM0ODc0NTcw/JmRwcj1vZmY",
    ],
  },
];



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
