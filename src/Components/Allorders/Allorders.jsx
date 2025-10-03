/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export default function Allorders() {
  let { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg text-center animate-fadeIn">
        {/* أيقونة ✅ */}
        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 text-5xl mb-6">
          <i className="fas fa-check-circle"></i>
        </div>

        {/* العنوان */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Order Placed Successfully!
        </h2>

        {/* الوصف */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for your purchase. 🎉 <br />
          Your order has been confirmed and will be processed soon. <br />
          You’ll receive an update when your items are on the way.
        </p>

        {/* أزرار */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex-1 bg-indigo-500 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 transition shadow-md"
          >
            Back to Home
          </Link>
          <Link
            to="/products"
            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition shadow-md"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
}
