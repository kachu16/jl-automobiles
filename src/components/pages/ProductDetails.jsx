import { useParams } from "react-router-dom";
import { productDetailsList } from "../data/productDetailsList";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productDetailsList.find(p => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <section className="py-16 bg-[#f5f7f9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow">

          {/* Main Image */}
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-full h-96 object-contain"
          />

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-20 h-20 object-contain border rounded cursor-pointer"
              />
            ))}
          </div>

          {/* Specifications */}
          <h3 className="mt-10 font-semibold text-lg">
            Technical Specification
          </h3>

          <table className="w-full mt-4 text-sm border">
            <tbody>
              {product.specifications.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 font-medium w-1/2">
                    {item.label}
                  </td>
                  <td className="py-3">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bg-white p-8 rounded-xl shadow">
          <span className="inline-block bg-gray-700 text-white text-xs px-3 py-1 rounded">
            Model : {product.code}
          </span>

          <h1 className="mt-4 text-2xl font-semibold">
            {product.title}
          </h1>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          {/* Features */}
          <h4 className="mt-6 font-semibold">
            Key Features & Benefits
          </h4>

          <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
            {product.keyFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
         

            <button className="bg-gray-800 text-white px-6 py-3 rounded">
              ASK FOR SPECIFICATION
            </button>
          </div>

         
        </div>

      </div>
    </section>
  );
};

export default ProductDetails;
