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

export const products = [
  {
    id: 1,
    icon: <FaCogs className="text-[var(--primary-color)] text-3xl" />,
    title: "Cylinder Seals (All Types)",
    desc: "Premium-quality cylinder seals designed for long-lasting hydraulic performance and complete leakage prevention for all forklift models.",
  },
  {
    id: 2,
    icon: <FaCircle className="text-green-500 text-3xl" />,
    title: "Solid & Pneumatic Tyres",
    desc: "Heavy-duty solid tyres for tough surfaces and pneumatic tyres for shock absorption, offering exceptional grip and extended durability.",
  },
  {
    id: 3,
    icon: <FaCertificate className="text-indigo-500 text-3xl" />,
    title: "Tyre Rims",
    desc: "High-strength forklift tyre rims ensuring perfect alignment, stability, and reliable load handling performance.",
  },
  {
    id: 4,
    icon: <FaFan className="text-orange-500 text-3xl" />,
    title: "Radiators",
    desc: "Industrial-grade radiators engineered to prevent engine overheating and enhance cooling performance during heavy operations.",
  },
  {
    id: 5,
    icon: <FaOilCan className="text-blue-500 text-3xl" />,
    title: "Engine Oil",
    desc: "Premium engine oils designed to reduce wear, improve lubrication, and extend the overall life and efficiency of forklift engines.",
  },
  {
    id: 6,
    icon: <FaCog className="text-red-500 text-3xl" />,
    title: "Gear Oil",
    desc: "High-performance gear oils offering smooth gear shifting, excellent heat resistance, and superior load protection.",
  },
  {
    id: 7,
    icon: <FaTools className="text-yellow-500 text-3xl" />,
    title: "Brake Oil",
    desc: "Reliable hydraulic brake oils that ensure quick response, safety, and consistency under all working conditions.",
  },
  {
    id: 8,
    icon: <FaTachometerAlt className="text-purple-500 text-3xl" />,
    title: "Transmission Oil",
    desc: "Advanced transmission oils that improve torque delivery, reduce heat, and maintain smooth forklift performance.",
  },
];


const OtherServices = () => {
  return (
    <section className="py-20 bg-white" id="products">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">
          Our <span className="text-(--primary-color)">Products</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Our product range includes all essential components—from tyres and rims to oils, radiators, and precision-engineered cylinder seals
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {products.map((service, index) => (
          <div
            key={service.id}
            className="
      relative bg-gray-50 rounded-3xl p-6 pt-10 mb-2 shadow-md hover:scale-[1.03]
      transition-all duration-300 ease-out other-service-container cursor-pointer
    "
          >
            {/* Floating Icon */}
            <div
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mt-4">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2">{service.desc}</p>

          </div>

        ))}
      </div>


    </section>
  );
};

export default OtherServices;
