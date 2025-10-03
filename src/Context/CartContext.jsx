import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
export let CartContext = createContext();

export default function CartContextProvider({ children }) {
  let headers = { token: localStorage.getItem("userToken") };
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  async function addProductToCart(productId) {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId },
        { headers }
      );
      toast.success(data.message);
      setCart(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error adding product to cart");
    }
  }

  async function checkout(shippingAddress) {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`,
        { shippingAddress },
        { headers }
      );
      window.location.href = data.session.url;
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error adding product to cart");
    }
  }
  async function updateProductCount(productId, count) {
    if (count === 0) {
      deleteProduct(productId);
      return;
    }
    try {
      setLoading(true);
      let { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count },
        { headers }
      );
      setCart(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error updating product count");
    }
  }

  async function deleteProduct(productId) {
    try {
      setLoading(true);
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { headers }
      );
      setCart(data);
      setLoading(false);
      toast.success("Product removed from cart");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error removing product from cart");
    }
  }

  async function clearCart() {
    try {
      setLoading(true);
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers }
      );
      setCart(null);
      setLoading(false);
      toast.success("Cart cleared");
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error clearing cart");
    }
  }

  async function getCart() {
    try {
      setLoading(true);
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers }
      );
      setCart(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error fetching cart data");
    }
  }

  useEffect(() => {
    getCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartContext.Provider
      value={{
        deleteProduct,
        updateProductCount,
        addProductToCart,
        cart,
        setCart,
        getCart,
        loading,
        checkout,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
