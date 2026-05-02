// src/pages/ProductDetails.jsx

import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import productData from "../data/productsData.js";

function ProductDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [activeSize, setActiveSize] = useState(null);

  const product = productData.find(
    (item) => item.name === decodeURIComponent(name),
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Product Not Found
      </div>
    );
  }

  const activeSizeData =
    activeSize !== null && product.sizes ? product.sizes[activeSize] : null;

  return (
    <div className="bg-[#f5f0eb] min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <nav className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest font-semibold">
          <Link
            to="/product/allproducts"
            className="hover:text-red-600 transition"
          >
            Products
          </Link>
          <span className="text-gray-400">›</span>
          <span className="hover:text-red-600 transition cursor-pointer">
            {product.category}
          </span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800">{product.name.toUpperCase()}</span>
        </nav>

        <button
          className="mt-3 text-gray-600 font-semibold hover:text-red-600 transition cursor-pointer text-sm flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="flex justify-center items-center bg-[#f9f6f2] rounded-xl p-10 min-h-[320px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[300px] object-contain drop-shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-start">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              {product.name.toUpperCase()}
            </h1>

            <p className="mt-5 text-gray-600 leading-7 text-base">
              {product.description}
            </p>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mt-8">
                <h2 className="text-sm font-extrabold uppercase tracking-widest text-gray-800 mb-4">
                  Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm leading-6">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button className="mt-8 bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition w-fit text-sm tracking-wide uppercase">
              Contact for Pricing
            </button>
          </div>
        </div>
      </div>

      {/* Specifications Table */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 pb-8">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-8 pt-8 pb-2">
              <h2 className="text-sm font-extrabold uppercase tracking-widest text-gray-800">
                Specifications
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-gray-500 w-24">
                      Sizes
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-extrabold uppercase tracking-widest text-gray-500">
                      Specifications
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-extrabold uppercase tracking-widest text-gray-500">
                      Max. Speed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.sizes.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-50 cursor-pointer transition-colors ${
                        activeSize === idx ? "bg-yellow-50" : "hover:bg-gray-50"
                      }`}
                      onClick={() =>
                        setActiveSize(activeSize === idx ? null : idx)
                      }
                    >
                      <td className="px-8 py-5 font-bold text-gray-900 text-base">
                        {row.size}
                      </td>
                      <td className="px-6 py-5 text-gray-600 leading-7">
                        <div className="font-semibold text-gray-800">
                          {row.spec}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 space-y-0.5">
                          <div>Outer Diameter - {row.outerDiameter}</div>
                          <div>Inner Diameter (Bore)- {row.innerDiameter}</div>
                          {row.thickness !== "N/A" && (
                            <div>Thickness - {row.thickness}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5 font-semibold text-gray-800">
                        {row.maxSpeed}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Size Images Grid */}
      {product.sizeImages && product.sizeImages.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 pb-14">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-gray-800 mb-8">
              Sizes
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
              {product.sizeImages.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="bg-[#f9f6f2] rounded-xl p-1  w-60 h-60 flex items-center justify-center group-hover:bg-yellow-50 transition-colors">
                    <img
                      src={item.image}
                      alt={`${product.name} ${item.label}`}
                      className="h-full object-contain drop-shadow"
                    />
                  </div>
                  <span className="text-sm font-bold text-gray-700 tracking-wide">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ProductDetails;
