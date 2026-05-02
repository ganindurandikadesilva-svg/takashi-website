// src/components/CategoryGrid.jsx

import ProductCard from "./ProductCard";
import productData from "../data/productsData";
import { Link } from "react-router-dom";

function CategoryGrid() {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-16">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-4xl font-extrabold uppercase text-gray-900">
            Featured Products
          </h2>

          <div className="w-20 h-1 bg-red-600 mt-3"></div>
        </div>

        <Link to={`/product/allproducts`}>
          <button className="text-gray-700 font-bold uppercase hover:text-red-600 transition cursor-pointer">
            View All Products →
          </button>
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {productData.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
