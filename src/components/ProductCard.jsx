import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="bg-white rounded-xl shadow-md p-6 cursor-pointer
                 hover:shadow-xl transition-all duration-300"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />

      <span className="inline-block bg-(--primary-color) text-white text-xs px-3 py-1 rounded">
        {product.code}
      </span>

      <h3 className="mt-3 font-semibold text-lg">
        {product.title}
      </h3>

      <p className="mt-2 text-gray-600">
        Capacity: <strong>{product.capacity}</strong>
      </p>
    </div>
  );
};

export default ProductCard;
