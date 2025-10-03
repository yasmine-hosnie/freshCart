/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import style from "./Home.module.css";
import Cart from "./../Cart/Cart";
import Products from "./../Products/Products";
import Category from "./../Category/Category";
import axios from "axios";
import Loading from "../Loading/Loading";
import CategoriesSlider from "../categoriesSlider/categoriesSlider";
import MainSlider from "../mainSlider/mainSlider";

export default function Home() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products`
      );
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <MainSlider />
      <CategoriesSlider />
      {products.length ? (
        <div className="flex flex-wrap m-3">
          <Products />
        </div>
      ) : (
        <div className="h-100 flex items-center justify-center">
          <Loading />
        </div>
      )}
    </>
  );
}
