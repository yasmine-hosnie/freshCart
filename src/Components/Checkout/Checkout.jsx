import React, { useContext } from "react";
import { useFormik } from "formik";
import { CartContext } from "../../Context/CartContext";

export default function Checkout() {
  let { checkout } = useContext(CartContext);

  let formik = useFormik({
    initialValues: {
      details: "",
      city: "",
      phone: "",
    },
    onSubmit: checkout,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full shadow-inner">
            <i className="fas fa-shopping-bag text-2xl"></i>
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Complete Your Checkout
        </h2>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* details */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="details"
              id="details"
              value={formik.values.details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="details"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address Details
            </label>
          </div>

          {/* city */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="city"
              id="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>

          {/* phone */}
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <i className="fas fa-credit-card"></i>
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
}
