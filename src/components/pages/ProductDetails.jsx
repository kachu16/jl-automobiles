import { useParams } from "react-router-dom";
export const productDetailsList = [
    {
        id: 1,
        code: "8FB15",
        title: "Toyota 8 series 4 Wheel Electric CB 1.5t Forklift",
        image: "https://imgs.search.brave.com/nrTcF7pqrZ48ZhTcAoDLbv_vxAe7qfi2xPfLS5TgQDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzk5LzY5LzYy/LzM2MF9GXzg5OTY5/NjIyOF9wSjZIa0VK/UEl0WXl5MkpyNTNi/QWt6R1JVU3JZOWxJ/bi5qcGc",
        description:
            "This electric forklift is designed to keep going – with increased battery capacity and a regenerative system that restores power while driving. With enhanced efficiency of movement, speed control systems, and water resistance, you can handle your goods without limitations.",

        images: [
            "https://imgs.search.brave.com/7cfdcGt9W8yyH2DurhGO6lPQAprWOVdmky27b1P1ezY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aXFzZGlyZWN0b3J5/LmNvbS9hcnRpY2xl/cy9mb3JrbGlmdC9m/b3JrbGlmdC10cnVj/a3MvYXJ0aWN1bGF0/aW5nLWZvcmtsaWZ0/LXRydWNrLmpwZw",
            "https://imgs.search.brave.com/7cfdcGt9W8yyH2DurhGO6lPQAprWOVdmky27b1P1ezY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aXFzZGlyZWN0b3J5/LmNvbS9hcnRpY2xl/cy9mb3JrbGlmdC9m/b3JrbGlmdC10cnVj/a3MvYXJ0aWN1bGF0/aW5nLWZvcmtsaWZ0/LXRydWNrLmpwZw",
            "https://imgs.search.brave.com/7cfdcGt9W8yyH2DurhGO6lPQAprWOVdmky27b1P1ezY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aXFzZGlyZWN0b3J5/LmNvbS9hcnRpY2xl/cy9mb3JrbGlmdC9m/b3JrbGlmdC10cnVj/a3MvYXJ0aWN1bGF0/aW5nLWZvcmtsaWZ0/LXRydWNrLmpwZw",
            "https://imgs.search.brave.com/7cfdcGt9W8yyH2DurhGO6lPQAprWOVdmky27b1P1ezY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aXFzZGlyZWN0b3J5/LmNvbS9hcnRpY2xl/cy9mb3JrbGlmdC9m/b3JrbGlmdC10cnVj/a3MvYXJ0aWN1bGF0/aW5nLWZvcmtsaWZ0/LXRydWNrLmpwZw",
        ],

        keyFeatures: [
            "Advanced safety",
            "Management support",
            "Outstanding operability",
            "High productivity and efficiency",
            "SAS: Toyota's unique operator assist feature",
        ],

        specifications: [
            { label: "Load Capacity (kg)", value: "1500" },
            { label: "Lift Height (mm)", value: "6000" },
            { label: "Usage Intensity", value: "Medium-High" },
            { label: "Transport Distance", value: "Medium-Long" },
            {
                label: "Suitable Areas",
                value: "Manufacturing / Stores / Supermarkets / Warehouses",
            },
            { label: "Operator Position", value: "Seated" },
            { label: "Travel Speed, no load (km/h)", value: "17" },
            { label: "Power Type", value: "Lead acid / Li-ion" },
        ],

        brochure: {
            label: "Download PDF",
            url: "/brochures/8fb15.pdf",
        },
    },

    {
        id: 2,
        code: "8FB20",
        title: "Toyota 8 series 4 Wheel Electric CB 2.0t Forklift",

        description:
            "A powerful electric forklift built for higher load handling with superior stability, smooth acceleration, and optimized energy consumption for long operational shifts.",

        images: [
            "https://imgs.search.brave.com/QleiXeaLHvHqTOYC8hB_8I1Z8eNebn56_xfZ21GGaKY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mb3Jr/bGlmdC0yNjczNDU0/LmpwZw",
        ],

        keyFeatures: [
            "Enhanced lifting power",
            "Energy-efficient electric motor",
            "Excellent maneuverability",
            "Low maintenance design",
        ],

        specifications: [
            { label: "Load Capacity (kg)", value: "2000" },
            { label: "Lift Height (mm)", value: "6500" },
            { label: "Usage Intensity", value: "High" },
            { label: "Transport Distance", value: "Long" },
            { label: "Operator Position", value: "Seated" },
            { label: "Power Type", value: "Lead acid / Li-ion" },
        ],

        brochure: {
            label: "Download PDF",
            url: "/brochures/8fb20.pdf",
        },
    },
];

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
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-96 object-contain"
                    />

                    {/* Thumbnails (static for now) */}
                    <div className="flex gap-3 mt-4">
                        {[1, 2, 3, 4].map(i => (
                            <img
                                key={i}
                                src={product.image}
                                className="w-20 h-20 object-contain border rounded"
                                alt=""
                            />
                        ))}
                    </div>

                    {/* Specs */}
                    <h3 className="mt-10 font-semibold text-lg">
                        Technical Specification
                    </h3>

                    <table className="w-full mt-4 text-sm">
                        <tbody>
                            <tr className="border-b">
                                <td className="py-3">Load Capacity (kg)</td>
                                <td className="py-3 font-medium">{product.capacity}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-3">Power Type</td>
                                <td className="py-3 font-medium">Electric</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-3">Operator Position</td>
                                <td className="py-3 font-medium">Seated</td>
                            </tr>
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
                        This electric forklift is designed to deliver high efficiency,
                        reliability, and advanced safety for demanding industrial use.
                    </p>

                    <h4 className="mt-6 font-semibold">
                        Key Features & Benefits
                    </h4>

                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                        <li>Advanced safety</li>
                        <li>High productivity</li>
                        <li>Outstanding operability</li>
                        <li>Energy efficient</li>
                    </ul>

                    <div className="flex gap-4 mt-8">
                        <button className="bg-(--primary-color) text-white px-6 py-3 rounded">
                            ADD TO CART
                        </button>

                        <button className="bg-gray-800 text-white px-6 py-3 rounded">
                            ASK FOR SPECIFICATION
                        </button>
                    </div>

                    <div className="mt-10">
                        <h4 className="font-semibold">Brochures</h4>
                        <button className="mt-3 w-full bg-gray-900 text-white py-3 rounded">
                            Download PDF
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductDetails;
