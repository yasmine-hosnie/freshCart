import React, { useContext } from "react";
import style from "./WishList.module.css";
import { WishListContext } from "../../Context/WishListContext";
import Loading from "../Loading/Loading";

export default function WishList() {
  let { wishList, loading, deleteProductFromWishList } =
    useContext(WishListContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="py-8 px-4">
          {wishList && wishList.data.length > 0 ? (
            <div className={style.wishlistGrid}>
              {wishList.data.map((product) => (
                <div key={product.id} className={style.wishlistCard}>
                  <div className={style.imageWrapper}>
                    <img src={product.imageCover} alt={product.title} />
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="font-semibold text-gray-900 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-green-600 font-bold">
                      {product.price} EGP
                    </p>
                    <button
                      onClick={() => deleteProductFromWishList(product.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h2 className="text-center text-2xl font-bold mt-10 text-gray-600">
              Your Wish List is Empty
            </h2>
          )}
        </div>
      )}
    </>
  );
}
