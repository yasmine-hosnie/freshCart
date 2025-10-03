/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import style from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { UserPlus } from "lucide-react";

export default function Register() {
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let { setUserData } = useContext(UserContext);

  async function handleRegister(values) {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        values
      );
      localStorage.setItem("userToken", data.token);
      navigate("/");
      setUserData(data.token);
    } catch (error) {
      setApiError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  let validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min length is 3")
      .max(10, "Max length is 10")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .matches(/^[A-z]\w{5,10}$/, "Password must be 6-10 chars (Ex: Yasmine36)")
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords don't match")
      .required("Re-password is required"),
    phone: Yup.string()
      .matches(/^(002)?01[0125][0-9]{8}$/, "Phone must be Egyptian number")
      .required("Phone is required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create Your Account
        </h2>

        {apiError && (
          <div className="px-4 py-2 mb-4 text-sm text-red-700 rounded-lg bg-red-100">
            {apiError}
          </div>
        )}

        <form onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Name:
            </label>
          </div>
          {formik.errors.name && formik.touched.name && (
            <p className="mb-3 text-xs text-red-500">{formik.errors.name}</p>
          )}

          {/* Email */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Email:
            </label>
          </div>
          {formik.errors.email && formik.touched.email && (
            <p className="mb-3 text-xs text-red-500">{formik.errors.email}</p>
          )}

          {/* Password */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Password:
            </label>
          </div>
          {formik.errors.password && formik.touched.password && (
            <p className="mb-3 text-xs text-red-500">
              {formik.errors.password}
            </p>
          )}

          {/* Re-password */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="rePassword"
              id="rePassword"
              value={formik.values.rePassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="rePassword"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm Your Password:
            </label>
          </div>
          {formik.errors.rePassword && formik.touched.rePassword && (
            <p className="mb-3 text-xs text-red-500">
              {formik.errors.rePassword}
            </p>
          )}

          {/* Phone */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Phone:
            </label>
          </div>
          {formik.errors.phone && formik.touched.phone && (
            <p className="mb-3 text-xs text-red-500">{formik.errors.phone}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg px-4 py-2 transition-all"
          >
            {loading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <>
                <UserPlus size={18} />
                Register
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
