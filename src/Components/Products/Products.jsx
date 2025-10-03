import React, { useContext } from "react";
import style from "./Products.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Loading from "../Loading/Loading";
import useProducts from "../../Hooks/useProducts";
import { WishListContext } from "../../Context/WishListContext";

export default function Products() {
  let { addProductToCart } = useContext(CartContext);
  let { data, isLoading } = useProducts();
  let { addToWishList, deleteProductFromWishList, wishList } =
    useContext(WishListContext);

  function isInWishList(productId) {
    return wishList?.data?.some((item) => item._id === productId);
  }

  return (
    <>
      {!isLoading ? (
        <div className={style.productsGrid}>
          {data.map((product) => (
            <div key={product.id} className={style.card}>
              <i
                onClick={() => {
                  if (isInWishList(product.id)) {
                    deleteProductFromWishList(product.id);
                  } else {
                    addToWishList(product.id);
                  }
                }}
                className={`fa-heart absolute right-4 top-4 cursor-pointer ${
                  isInWishList(product.id)
                    ? "fa-solid text-red-500"
                    : "fa-regular text-gray-400"
                } ${style.heartIcon}`}
              />

              <Link to={`/productdetails/${product.id}`}>
                <img
                  className={style.image}
                  src={product.imageCover}
                  alt={product.title}
                />
                <h4 className={style.category}>{product.category.name}</h4>
                <h3 className={style.title}>
                  {product.title.split(" ").slice(0, 3).join(" ")}
                </h3>
                <div className={style.priceRating}>
                  <h3 className={style.price}>{product.price} EGP</h3>
                  <h3 className={style.rating}>
                    <i className="fas fa-star"></i> {product.ratingsAverage}
                  </h3>
                </div>
              </Link>

              <button
                onClick={() => addProductToCart(product.id)}
                className={style.cartBtn}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
