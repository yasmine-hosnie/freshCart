import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export default function Cart() {
  let { updateProductCount, cart, deleteProduct, loading } =
    useContext(CartContext);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 font-semibold">Loading...</p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
          {cart && cart.data.products.length > 0 ? (
            <div className="max-w-6xl mx-auto space-y-8">
              {/* المنتجات */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cart?.data.products.map((product) => (
                  <div
                    key={product.product.id}
                    className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center transition hover:shadow-2xl hover:scale-105"
                  >
                    {/* صورة */}
                    <img
                      src={product.product.imageCover}
                      alt={product.product.title}
                      className="w-28 h-28 object-cover rounded-lg mb-3"
                    />

                    {/* الاسم */}
                    <h3 className="text-base font-semibold text-gray-800 text-center line-clamp-2">
                      {product.product.title}
                    </h3>

                    {/* السعر */}
                    <p className="mt-2 font-bold text-indigo-600">
                      {product.price} EGP
                    </p>

                    {/* الكمية */}
                    <div className="flex items-center justify-center mt-3">
                      <button
                        onClick={() =>
                          updateProductCount(
                            product.product.id,
                            product.count - 1
                          )
                        }
                        className="w-7 h-7 flex items-center justify-center border rounded-full text-gray-600 hover:bg-gray-200 transition"
                      >
                        –
                      </button>
                      <span className="mx-3 font-semibold text-gray-800">
                        {product.count}
                      </span>
                      <button
                        onClick={() =>
                          updateProductCount(
                            product.product.id,
                            product.count + 1
                          )
                        }
                        className="w-7 h-7 flex items-center justify-center border rounded-full text-gray-600 hover:bg-gray-200 transition"
                      >
                        +
                      </button>
                    </div>

                    {/* زر الحذف */}
                    <button
                      onClick={() => deleteProduct(product.product.id)}
                      className="mt-4 px-4 py-1 bg-red-500 text-white text-sm rounded-lg shadow hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* الإجمالي */}
              <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  Total:{" "}
                  <span className="text-indigo-600 font-bold">
                    {cart.data.totalCartPrice} EGP
                  </span>
                </h3>

                <Link
                  to={`/checkout`}
                  className="inline-block w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-md"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
              <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md">
                <div className="text-5xl mb-4">🛒</div>
                <h2 className="text-2xl font-bold text-gray-700 mb-2">
                  Your Cart is Empty
                </h2>
                <p className="text-gray-500 mb-6">
                  Looks like you haven’t added anything yet.
                </p>
                <Link
                  to="/"
                  className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-600 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
