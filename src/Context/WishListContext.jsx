import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
export let WishListContext = createContext();

export default function WishListContextProvider({ children }) {
  let headers = { token: localStorage.getItem("userToken") };
  const [wishList, setWishList] = useState(null);
  const [loading, setLoading] = useState(false);

  async function addToWishList(productId) {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId },
        { headers }
      );
      toast.success(data.message);
      setWishList(data);
      getWishList();
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Error adding product to wish list");
      setLoading(false);
    }
  }

  async function deleteProductFromWishList(productId) {
    try {
      setLoading(true);
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        { headers }
      );
      setWishList(data);
      getWishList();
      setLoading(false);
      toast.success("Product removed from wishList");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error removing product from wishList");
    }
  }

  async function getWishList() {
    try {
      setLoading(true);
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { headers }
      );
      setWishList(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error fetching wish list data");
    }
  }

  useEffect(() => {
    getWishList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WishListContext.Provider
      value={{
        addToWishList,
        wishList,
        loading,
        setLoading,
        setWishList,
        deleteProductFromWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}
