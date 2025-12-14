import ProductCard from "./ProductCard";
import { useTheme } from "../context/ThemeContext";

export const productList = [
  {
    id: 1,
    code: "8FB15",
    title: "Toyota 8 series 4 Wheel Electric CB 1.5t Forklift",
    capacity: "1500 kg",
    image:
      "https://imgs.search.brave.com/QleiXeaLHvHqTOYC8hB_8I1Z8eNebn56_xfZ21GGaKY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mb3Jr/bGlmdC0yNjczNDU0/LmpwZw",
  },
  {
    id: 2,
    code: "8FB20",
    title: "Toyota 8 series 4 Wheel Electric CB 2.0t Forklift",
    capacity: "2000 kg",
    image:
      "https://imgs.search.brave.com/QleiXeaLHvHqTOYC8hB_8I1Z8eNebn56_xfZ21GGaKY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mb3Jr/bGlmdC0yNjczNDU0/LmpwZw",
  },
  {
    id: 3,
    code: "8FB25",
    title: "Toyota 8 series 4 Wheel Electric CB 2.5t Forklift",
    capacity: "2500 kg",
    image:
      "https://imgs.search.brave.com/QleiXeaLHvHqTOYC8hB_8I1Z8eNebn56_xfZ21GGaKY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mb3Jr/bGlmdC0yNjczNDU0/LmpwZw",
  },
  {
    id: 3,
    code: "8FB25",
    title: "Toyota 8 series 4 Wheel Electric CB 2.5t Forklift",
    capacity: "2500 kg",
    image:
      "https://imgs.search.brave.com/QleiXeaLHvHqTOYC8hB_8I1Z8eNebn56_xfZ21GGaKY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mb3Jr/bGlmdC0yNjczNDU0/LmpwZw",
  },
  {
    id: 3,
    code: "8FB25",
    title: "Toyota 8 series 4 Wheel Electric CB 2.5t Forklift",
    capacity: "2500 kg",
    image:
      "https://imgs.search.brave.com/QleiXeaLHvHqTOYC8hB_8I1Z8eNebn56_xfZ21GGaKY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mb3Jr/bGlmdC0yNjczNDU0/LmpwZw",
  },
  {
    id: 3,
    code: "8FB25",
    title: "Toyota 8 series 4 Wheel Electric CB 2.5t Forklift",
    capacity: "2500 kg",
    image:
      "https://imgs.search.brave.com/QleiXeaLHvHqTOYC8hB_8I1Z8eNebn56_xfZ21GGaKY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mb3Jr/bGlmdC0yNjczNDU0/LmpwZw",
  },
  {
    id: 3,
    code: "8FB25",
    title: "Toyota 8 series 4 Wheel Electric CB 2.5t Forklift",
    capacity: "2500 kg",
    image:
      "https://imgs.search.brave.com/QleiXeaLHvHqTOYC8hB_8I1Z8eNebn56_xfZ21GGaKY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mb3Jr/bGlmdC0yNjczNDU0/LmpwZw",
  },
];

const Products = () => {
  const { dark } = useTheme();

  return (
    <section className="py-20 bg-[#f5f7f9]">
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
