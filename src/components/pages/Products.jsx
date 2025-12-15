import ProductCard from "./ProductCard";
import { useTheme } from "../context/ThemeContext";
import { productList } from "../data/productList";

const Products = () => {
  const { dark } = useTheme();

  return (
    <section className={`py-20  ${dark ? "dark-bg2" : "bg-[#f5f7f9]"}`}>
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold">
            Our <span className="text-(--primary-color)">Products</span>
          </h2>
          <p className={`max-w-2xl mx-auto mt-3 ${dark ? "text-white" : "text-gray-600"}`}>
            Our product range includes all essential components—from tyres and rims to oils, radiators, and precision-engineered cylinder seals
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
