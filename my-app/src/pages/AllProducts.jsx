import { Link } from "react-router-dom";

import productData from "../data/productsData.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

export default function AllProducts() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f5f0eb] min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <nav className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest font-semibold">
          <Link to="/" className="hover:text-red-600 transition">
            Products
          </Link>
          <span className="text-gray-400">›</span>
          <span className="hover:text-red-600 transition cursor-pointer">
            All Products
          </span>
          <span className="text-gray-400">›</span>
          {/* <span className="text-gray-800">{product.name.toUpperCase()}</span> */}
        </nav>

        <button
          className="mt-3 text-gray-600 font-semibold hover:text-red-600 transition cursor-pointer text-sm flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>

      {/* All Produts Cards */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productData.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full"
          >
            {/* Image */}
            <div className="bg-gray-50 flex justify-center items-center h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-[92%] h-[92%] object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-bold uppercase text-gray-900 mb-1 min-h-[40px] md:min-h-[48px]">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm leading-5 mb-4">
                {product.description}
              </p>

              <Link to={`/product/${product.name}`}>
                <button className="mt-auto text-red-600 font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                  {product.buttonText}
                  <span>➜</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
