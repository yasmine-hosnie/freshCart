import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  async function handleLogin(values) {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        values
      );
      localStorage.setItem("userToken", data.token);
      setUserData(data.token);
      navigate("/");
    } catch (error) {
      setApiError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  let validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .matches(/^[A-z]\w{5,10}$/, "Invalid Password")
      .required("Password is required"),
  });

  let formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl py-6 font-semibold text-center text-gray-800">
          Login Now
        </h2>

        {apiError && (
          <div className="px-4 py-2 mb-4 text-sm text-red-700 rounded-lg bg-red-100">
            {apiError}
          </div>
        )}

        <form onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
              border-0 border-b-2 border-gray-300 appearance-none focus:outline-none 
              focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform 
              -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-emerald-600 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
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
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
              border-0 border-b-2 border-gray-300 appearance-none focus:outline-none 
              focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform 
              -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-emerald-600 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Password:
            </label>
          </div>
          {formik.errors.password && formik.touched.password && (
            <p className="mb-3 text-xs text-red-500">
              {formik.errors.password}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white 
            font-medium rounded-lg px-4 py-2 transition-all"
          >
            {loading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
          </button>
        </form>

        {/* Register link */}
        <p className="text-sm text-gray-600 mt-6 text-center">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-emerald-600 hover:underline font-medium"
          >
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
}
