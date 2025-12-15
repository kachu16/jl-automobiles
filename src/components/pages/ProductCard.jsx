import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { dark } = useTheme();
  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className={`rounded-xl shadow-md p-6 cursor-pointer
                 hover:shadow-xl transition-all duration-300 ${dark ? "bg-black" : "bg-white"} `}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />

      <span className="inline-block bg-(--primary-color) text-white text-xs px-3 py-1 rounded">
        {product.category}
      </span>

      <h3 className={`mt-3 font-semibold text-lg ${dark ? "text-white" : "text-black"}`}>
        {product.title}
      </h3>

      <p className={`mt-2  ${dark ? "text-white" : "text-gray-600"}`}>
        Capacity: <strong>{product.capacity}</strong>
      </p>
    </div>
  );
};

export default ProductCard;
