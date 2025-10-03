/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Category from "./Components/Category/Category";
import Brands from "./Components/Brands/Brands";
import Products from "./Components/Products/Products";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import CounterContextProvider from "./Context/CounterContext";
import UserContextProvider from "./Context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CartContextProvider from "./Context/CartContext";
import { Toaster } from "react-hot-toast";
import Allorders from "./Components/Allorders/Allorders";
import Checkout from "./Components/Checkout/Checkout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RelatedProducts from "./Components/RelatedProducts/RelatedProducts";
import WishList from "./Components/wishList/wishList";
import WishListContextProvider from "./Context/WishListContext";

let routers = createBrowserRouter(
  [
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRoute>
              <Allorders />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: "productdetails/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "categories/:name",
          element: (
            <ProtectedRoute>
              <RelatedProducts />
            </ProtectedRoute>
          ),
        },
        {
          path: "brands/:name",
          element: (
            <ProtectedRoute>
              <RelatedProducts />
            </ProtectedRoute>
          ),
        },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  { basename: "/freshcart" }
);

let query = new QueryClient();

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={query}>
      <WishListContextProvider>
        <CartContextProvider>
          <UserContextProvider>
            <RouterProvider router={routers}></RouterProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster />
          </UserContextProvider>
        </CartContextProvider>
      </WishListContextProvider>
    </QueryClientProvider>
  );
}
