import React, { useContext } from "react";
import style from "./RelatedProducts.module.css";
import { Link, useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Loading from "../Loading/Loading";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";

export default function RelatedProducts() {
  let { addProductToCart } = useContext(CartContext);
  let { name } = useParams();
  let { data, isLoading } = useProducts();
  let { addToWishList, deleteProductFromWishList, wishList } =
    useContext(WishListContext);


  data = data?.filter(
    (product) => product.category?.name === name || product.brand?.name === name
  );

  function isInWishList(productId) {
    return wishList?.data?.some((item) => item._id === productId);
  }

  return (
    <>
      {!isLoading ? (
        <div className={style.productsGrid}>
          {data.map((product) => (
            <div key={product.id} className={style.card}>
              {/* زرار الـ WishList */}
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

              {/* تفاصيل المنتج */}
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

              {/* زرار الكارت */}
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
