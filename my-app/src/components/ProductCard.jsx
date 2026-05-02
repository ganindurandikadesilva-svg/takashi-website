// src/components/ProductCard.jsx

import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="bg-gray-50 flex justify-center items-center h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-[92%] h-[92%] object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="text-lg md:text-xl font-bold uppercase text-gray-900 mb-1 min-h-[40px] md:min-h-[48px]">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-5 mb-4">
          {product.description}
        </p>

        {/* Button */}
        <Link to={`/product/${product.name}`}>
          <button className="mt-auto text-red-600 font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
            {product.buttonText}
            <span>➜</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
